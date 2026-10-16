'use strict';
// JavaScript thuần chỉ xử lý tương tác phía trình duyệt. Không gửi dữ liệu đi.
const form = document.querySelector('#filter-form');
const cards = [...document.querySelectorAll('.product')];
const grid = document.querySelector('.product-grid');
const selected = document.querySelector('#selected-filters');
const featured = document.querySelector('#featured');
const sort = document.querySelector('#sort');
const panel = document.querySelector('#filter-panel');
const mobile = window.matchMedia('(max-width: 760px)');
let applied = new Map();

// OR trong cùng một nhóm; AND giữa các nhóm.
function matchesFilters(card, groups, featuredValue) {
  return [...groups].every(([name, values]) => values.includes(card.dataset[name]))
    && (featuredValue === 'all' || card.dataset.featured === featuredValue);
}

function render() {
  let count = 0;
  cards.forEach(card => {
    card.hidden = !matchesFilters(card, applied, featured.value);
    if (!card.hidden) count++;
  });
  const ordered = [...cards].sort((a, b) => {
    if (sort.value === 'asc') return Number(a.dataset.price) - Number(b.dataset.price);
    if (sort.value === 'desc') return Number(b.dataset.price) - Number(a.dataset.price);
    return Number(a.dataset.index) - Number(b.dataset.index);
  });
  ordered.forEach(card => grid.append(card));
  document.querySelector('#result-count').textContent = `${count} sản phẩm`;
  document.querySelector('#empty-state').hidden = count !== 0;
  selected.replaceChildren();
  applied.forEach((values, name) => values.forEach(value => {
    const input = [...form.elements].find(el => el.name === name && el.value === value);
    addChip(input.parentElement.textContent.replace(/\s+/g, ' ').trim(), () => {
      input.checked = false;
      const remaining = applied.get(name).filter(item => item !== value);
      if (remaining.length) applied.set(name, remaining);
      else applied.delete(name);
      render();
      document.querySelector('#catalog').focus({ preventScroll: true });
    });
  }));
  if (featured.value !== 'all') {
    addChip(featured.selectedOptions[0].textContent, () => {
      featured.value = 'all';
      render();
      featured.focus();
    });
  }
}
function addChip(label, onRemove) {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'filter-chip';
  chip.textContent = `${label} ×`;
  chip.setAttribute('aria-label', `Bỏ bộ lọc ${label}`);
  chip.addEventListener('click', onRemove);
  selected.append(chip);
}
form.addEventListener('submit', event => {
  event.preventDefault();
  applied = new Map();
  new FormData(form).forEach((value, name) => {
    if (!applied.has(name)) applied.set(name, []);
    applied.get(name).push(value);
  });
  render();
  if (mobile.matches) panel.open = false;
  document.querySelector('#catalog').focus({ preventScroll: true });
  if (mobile.matches) document.querySelector('#catalog').scrollIntoView({ block: 'start' });
});
form.addEventListener('reset', () => {
  applied.clear();
  featured.value = 'all';
  render();
});
document.querySelector('#empty-reset').addEventListener('click', () => form.reset());
featured.addEventListener('change', render);
sort.addEventListener('change', render);
function adaptFilters() {
  panel.open = !mobile.matches;
  panel.querySelector('summary').tabIndex = mobile.matches ? 0 : -1;
}
adaptFilters();
mobile.addEventListener('change', adaptFilters);
// Desktop luôn mở cột lọc; mobile sử dụng details/summary nguyên bản.
panel.addEventListener('toggle', () => { if (!mobile.matches && !panel.open) panel.open = true; });

// <dialog> cung cấp đóng bằng Escape và quản lý focus nguyên bản.
const dialog = document.querySelector('#product-dialog');
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => {
    const template = document.querySelector(`#detail-${button.dataset.detail}`);
    document.querySelector('#dialog-content').replaceChildren(template.content.cloneNode(true));
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
}});
