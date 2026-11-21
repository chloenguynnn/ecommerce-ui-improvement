/* game.js – Flappy Bird (Bài 3, Nhóm 2)
 *
 * Yêu cầu của đề:
 *  - Hình Bird và ống khói thay theo cá nhân: images/bird.svg, images/pipe.svg
 *  - Level hiển thị ở góc trên bên trái
 *  - 5 điểm → Level 2; 20 điểm → Level 3; 40 điểm → Level 4; 50 điểm → dừng game, báo chiến thắng
 *  - Level 1: interval = 40; Level 2: 30; Level 3: 25; Level 4: 20  (interval của setInterval, đơn vị ms)
 *  - Bỏ sự kiện mousedown, điều khiển bằng keydown phím mũi tên xuống (ArrowDown)
 *
 * Phần nâng cao (xem mục CẢI TIẾN trong code và README):
 *  1. Vẽ bằng requestAnimationFrame + nội suy vị trí giữa hai nhịp interval → hình chạy mượt 60 khung/giây
 *     dù logic game vẫn chạy đúng interval 40/30/25/20 của từng level.
 *  2. Bấm phím là đặt lại vận tốc bay lên (không cộng dồn), có giới hạn tốc độ rơi → dễ điều khiển.
 *  3. Vùng va chạm nhỏ hơn hình con chim một chút, khoảng trống giữa hai ống đủ rộng,
 *     độ cao khoảng trống không chênh quá nhiều giữa hai ống liên tiếp → không có màn "không thể qua".
 *  4. Giữ phím không bị lặp phím (e.repeat), có màn chờ, tạm dừng (P), chơi lại (Enter), điểm cao nhất lưu localStorage,
 *     chim nghiêng theo vận tốc, thông báo khi lên level, hỗ trợ chạm màn hình trên điện thoại.
 */
(function () {
  "use strict";

  var W = 400, H = 600, GROUND = 70;               // kích thước logic của canvas
  var LEVELS = [                                    // điểm bắt đầu level và interval (ms)
    { level: 1, from: 0,  interval: 40, gap: 170 },
    { level: 2, from: 5,  interval: 30, gap: 165 },
    { level: 3, from: 20, interval: 25, gap: 160 },
    { level: 4, from: 40, interval: 20, gap: 155 }
  ];
  var WIN_SCORE = 50;
  var PIPE_W = 70, PIPE_SPACING = 230, SPEED = 3;   // px mỗi nhịp
  var GRAVITY = 0.42, FLAP = -6.6, MAX_FALL = 8.5;  // px mỗi nhịp

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var smoothBox = document.getElementById("smooth");

  var birdImg = new Image(); birdImg.src = "images/bird.svg";
  var pipeImg = new Image(); pipeImg.src = "images/pipe.svg";

  var state, bird, pipes, score, best, levelIdx, timer, lastTick, groundX, banner, clouds;

  try { best = parseInt(localStorage.getItem("flappy-best") || "0", 10); } catch (e) { best = 0; }

  /* ---------------- Khởi tạo ---------------- */
  function reset() {
    state = "ready";                    // ready | playing | paused | over | win
    bird = { x: 110, y: H / 2 - 40, px: 110, py: H / 2 - 40, vy: 0, w: 50, h: 38, r: 15 };
    pipes = [];
    score = 0;
    levelIdx = 0;
    groundX = 0;
    banner = null;
    clouds = [{ x: 40, y: 90, s: 1 }, { x: 250, y: 150, s: 0.7 }, { x: 330, y: 60, s: 0.9 }];
    startTimer();
  }

  function level() { return LEVELS[levelIdx]; }

  /* Logic game chạy bằng setInterval với interval của level hiện tại (đúng yêu cầu đề) */
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(update, level().interval);
    lastTick = performance.now();
  }

  function addPipe(x) {
    var gap = level().gap;
    var minTop = 60, maxTop = H - GROUND - gap - 60;
    var prev = pipes.length ? pipes[pipes.length - 1].top : (H - GROUND - gap) / 2;
    // CẢI TIẾN 3: độ cao khoảng trống chỉ lệch tối đa 140px so với ống trước
    var top = prev + (Math.random() * 280 - 140);
    top = Math.max(minTop, Math.min(maxTop, top));
    pipes.push({ x: x, px: x, top: top, gap: gap, passed: false });
  }

  /* ---------------- Cập nhật mỗi nhịp interval ---------------- */
  function update() {
    lastTick = performance.now();
    // lưu vị trí cũ để nội suy khi vẽ
    bird.px = bird.x; bird.py = bird.y;
    for (var i = 0; i < pipes.length; i++) { pipes[i].px = pipes[i].x; }

    if (state === "ready") {                          // chim nhấp nhô chờ bắt đầu
      bird.y = H / 2 - 40 + Math.sin(lastTick / 250) * 8;
      groundX = (groundX - SPEED) % 24;
      if (!smoothBox.checked) { draw(1); }
      return;
    }
    if (state !== "playing") { return; }

    // Vật lý: trọng lực + giới hạn tốc độ rơi (CẢI TIẾN 2)
    bird.vy = Math.min(bird.vy + GRAVITY, MAX_FALL);
    bird.y += bird.vy;
    if (bird.y < bird.h / 2) { bird.y = bird.h / 2; bird.vy = 0; }

    // Ống khói di chuyển sang trái, tạo ống mới theo khoảng cách (không theo số khung hình)
    for (i = 0; i < pipes.length; i++) { pipes[i].x -= SPEED; }
    if (pipes.length && pipes[0].x < -PIPE_W - 10) { pipes.shift(); }
    if (!pipes.length || pipes[pipes.length - 1].x < W - PIPE_SPACING) { addPipe(W + 10); }
    groundX = (groundX - SPEED) % 24;
    for (i = 0; i < clouds.length; i++) {
      clouds[i].x -= 0.4 * clouds[i].s;
      if (clouds[i].x < -80) { clouds[i].x = W + 40; }
    }

    // Tính điểm khi chim bay qua ống
    for (i = 0; i < pipes.length; i++) {
      if (!pipes[i].passed && pipes[i].x + PIPE_W < bird.x - bird.r) {
        pipes[i].passed = true;
        score++;
        checkLevel();
      }
    }

    if (hit()) { gameOver(); }
    if (!smoothBox.checked) { draw(1); }
  }

  function checkLevel() {
    if (score >= WIN_SCORE) { win(); return; }
    var next = levelIdx;
    for (var i = 0; i < LEVELS.length; i++) { if (score >= LEVELS[i].from) { next = i; } }
    if (next !== levelIdx) {
      levelIdx = next;
      startTimer();                                    // đổi interval khi lên level
      banner = { text: "LEVEL " + level().level, until: performance.now() + 1400 };
    }
  }

  /* Va chạm: vùng tròn bán kính r nhỏ hơn hình (CẢI TIẾN 3) */
  function hit() {
    if (bird.y + bird.r > H - GROUND) { return true; }
    for (var i = 0; i < pipes.length; i++) {
      var p = pipes[i];
      var nearX = Math.max(p.x, Math.min(bird.x, p.x + PIPE_W));
      if (Math.abs(nearX - bird.x) < bird.r) {
        // chim nằm ngang tầm ống: kiểm tra với ống trên và ống dưới
        var topY = Math.max(0, Math.min(bird.y, p.top));
        var botY = Math.max(p.top + p.gap, Math.min(bird.y, H));
        if (dist(nearX, topY) < bird.r && bird.y - bird.r < p.top) { return true; }
        if (dist(nearX, botY) < bird.r && bird.y + bird.r > p.top + p.gap) { return true; }
      }
    }
    return false;
  }
  function dist(x, y) { return Math.sqrt((x - bird.x) * (x - bird.x) + (y - bird.y) * (y - bird.y)); }

  function gameOver() {
    state = "over";
    clearInterval(timer);
    saveBest();
    draw(1);
  }

  function win() {
    state = "win";
    clearInterval(timer);                              // 50 điểm: dừng game
    saveBest();
    draw(1);
  }

  function saveBest() {
    if (score > best) {
      best = score;
      try { localStorage.setItem("flappy-best", String(best)); } catch (e) { /* bỏ qua */ }
    }
  }

  /* ---------------- Điều khiển ---------------- */
  function flap() {
    if (state === "ready") { state = "playing"; addPipe(W + 60); }
    if (state === "playing") { bird.vy = FLAP; }       // CẢI TIẾN 2: đặt lại vận tốc, không cộng dồn
  }

  // Thay sự kiện mousedown bằng keydown: phím mũi tên xuống
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (e.repeat) { return; }                        // giữ phím không tính là nhiều lần bấm
      if (state === "over" || state === "win") { return; }
      flap();
    } else if (e.key === "p" || e.key === "P") {
      if (state === "playing") { state = "paused"; clearInterval(timer); draw(1); }
      else if (state === "paused") { state = "playing"; startTimer(); }
    } else if (e.key === "Enter") {
      if (state === "over" || state === "win") { reset(); }
    }
  });

  // Điện thoại không có phím mũi tên: chạm màn hình để bay, chạm khi thua để chơi lại
  canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    if (state === "over" || state === "win") { reset(); } else { flap(); }
  }, { passive: false });

  document.getElementById("restart").addEventListener("click", function () { reset(); canvas.focus(); });
  smoothBox.addEventListener("change", function () { canvas.focus(); });

  /* ---------------- Vẽ ---------------- */
  // CẢI TIẾN 1: requestAnimationFrame vẽ ~60 khung/giây, nội suy vị trí giữa hai nhịp interval
  function frame(now) {
    if (smoothBox.checked) {
      var a = state === "playing" || state === "ready" ? Math.min(1, (now - lastTick) / level().interval) : 1;
      draw(a);
    } else if (banner) {
      draw(1);
    }
    requestAnimationFrame(frame);
  }

  // Cắt ảnh ống theo chiều cao cần vẽ (giữ nguyên tỉ lệ miệng ống, không bị kéo giãn)
  function drawPipe(x, y, h) {
    var sh = Math.min(480, h);
    ctx.drawImage(pipeImg, 0, 0, 80, sh, x, y, PIPE_W, h);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function draw(t) {
    // Nền trời
    var sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#fbd3c4"); sky.addColorStop(0.6, "#fdebd3"); sky.addColorStop(1, "#f6e2c7");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255,255,255,.85)";
    for (var c = 0; c < clouds.length; c++) { cloud(clouds[c].x, clouds[c].y, clouds[c].s); }
    skyline();

    // Ống khói: ống dưới vẽ thẳng, ống trên lật ngược
    for (var i = 0; i < pipes.length; i++) {
      var p = pipes[i], x = lerp(p.px, p.x, t);
      drawPipe(x, p.top + p.gap, H - GROUND - p.top - p.gap);
      ctx.save();
      ctx.translate(x, p.top); ctx.scale(1, -1);
      drawPipe(0, 0, p.top + 5);
      ctx.restore();
    }

    // Mặt đất chạy
    ctx.fillStyle = "#6b8f3c"; ctx.fillRect(0, H - GROUND, W, 14);
    ctx.fillStyle = "#d9b98a"; ctx.fillRect(0, H - GROUND + 14, W, GROUND - 14);
    ctx.fillStyle = "#c7a473";
    for (var g = groundX; g < W; g += 24) { ctx.fillRect(g, H - GROUND + 22, 12, 6); }

    // Chim: nghiêng theo vận tốc
    var by = lerp(bird.py, bird.y, t);
    var angle = state === "ready" ? 0 : Math.max(-0.45, Math.min(1.1, bird.vy / 9));
    ctx.save();
    ctx.translate(bird.x, by); ctx.rotate(angle);
    ctx.drawImage(birdImg, -bird.w / 2, -bird.h / 2, bird.w, bird.h);
    ctx.restore();

    hud();
  }

  function hud() {
    ctx.textBaseline = "top";
    // Level ở góc trên bên trái
    ctx.fillStyle = "rgba(43,38,34,.82)";
    roundRect(10, 10, 104, 34, 8); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "bold 18px Arial"; ctx.textAlign = "left";
    ctx.fillText("Level " + level().level, 22, 18);

    // Điểm ở giữa, điểm cao nhất bên phải
    ctx.textAlign = "center"; ctx.font = "bold 44px Arial";
    ctx.lineWidth = 5; ctx.strokeStyle = "#5e0f1b"; ctx.strokeText(score, W / 2, 14);
    ctx.fillStyle = "#fff"; ctx.fillText(score, W / 2, 14);
    ctx.textAlign = "right"; ctx.font = "bold 14px Arial"; ctx.fillStyle = "#5e0f1b";
    ctx.fillText("Best: " + best, W - 14, 14);
    ctx.font = "12px Arial"; ctx.fillText("interval " + level().interval + " ms", W - 14, 32);

    if (banner && performance.now() < banner.until) {
      ctx.textAlign = "center"; ctx.font = "bold 40px Arial";
      ctx.lineWidth = 6; ctx.strokeStyle = "#5e0f1b"; ctx.strokeText(banner.text, W / 2, H / 2 - 150);
      ctx.fillStyle = "#e0a800"; ctx.fillText(banner.text, W / 2, H / 2 - 150);
    } else { banner = null; }

    if (state === "ready") {
      panel("Sẵn sàng?", ["Nhấn phím ↓ (mũi tên xuống) để bay", "Qua mỗi ống khói được 1 điểm", "50 điểm là chiến thắng!"]);
    } else if (state === "paused") {
      panel("Tạm dừng", ["Nhấn P để chơi tiếp"]);
    } else if (state === "over") {
      panel("Thua rồi!", ["Điểm: " + score + "   ·   Best: " + best, "Đạt Level " + level().level, "Nhấn Enter để chơi lại"]);
    } else if (state === "win") {
      panel("🏆 CHIẾN THẮNG!", ["Bạn đã đạt " + WIN_SCORE + " điểm", "Hoàn thành cả 4 level", "Nhấn Enter để chơi lại"], true);
    }
  }

  function panel(title, lines, gold) {
    ctx.fillStyle = "rgba(43,38,34,.86)";
    roundRect(40, H / 2 - 95, W - 80, 64 + lines.length * 26, 14); ctx.fill();
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    ctx.fillStyle = gold ? "#ffd54a" : "#fff"; ctx.font = "bold 28px Arial";
    ctx.fillText(title, W / 2, H / 2 - 80);
    ctx.fillStyle = "#f3e6da"; ctx.font = "16px Arial";
    for (var i = 0; i < lines.length; i++) { ctx.fillText(lines[i], W / 2, H / 2 - 36 + i * 26); }
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function cloud(x, y, s) {
    ctx.beginPath();
    ctx.arc(x, y, 18 * s, 0, Math.PI * 2); ctx.arc(x + 22 * s, y - 8 * s, 22 * s, 0, Math.PI * 2);
    ctx.arc(x + 46 * s, y, 18 * s, 0, Math.PI * 2); ctx.fill();
  }

  function skyline() {
    ctx.fillStyle = "rgba(138,28,43,.12)";
    var base = H - GROUND, xs = [0, 30, 70, 95, 140, 175, 215, 250, 290, 330, 365], hs = [60, 95, 50, 120, 80, 140, 70, 105, 60, 130, 85];
    for (var i = 0; i < xs.length; i++) { ctx.fillRect(xs[i], base - hs[i], 34, hs[i]); }
  }

  /* ---------------- Chạy ---------------- */
  var loaded = 0;
  function onLoad() { if (++loaded === 2) { reset(); draw(1); requestAnimationFrame(frame); } }
  birdImg.onload = onLoad; pipeImg.onload = onLoad;
  canvas.focus();
})();
