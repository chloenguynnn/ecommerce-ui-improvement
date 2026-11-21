/* lms-assignments.js – Bài 2 (Nhóm 2): dùng jQuery đọc trang môn học trên LMS UEH (Moodle)
 *
 * Cách chạy:
 *   1. Đăng nhập LMS, mở trang chính của một môn học (trang có danh sách các chủ đề).
 *   2. Nhấn F12 → tab Console, dán toàn bộ file này vào rồi nhấn Enter.
 *   3. Kết quả in ra Console: (a) bài nộp thứ 5, (b) bảng các chủ đề, có bài tập không và deadline.
 *
 * Moodle không phải lúc nào cũng gắn jQuery vào biến toàn cục $, nên đoạn đầu tự nạp jQuery nếu cần.
 */
(function (run) {
  if (window.jQuery) { run(window.jQuery); return; }
  // Moodle nạp jQuery qua RequireJS: lấy jQuery có sẵn của trang trước khi phải tải từ ngoài
  if (typeof window.require === "function" && window.M) {
    window.require(["jquery"], run);
    return;
  }
  var s = document.createElement("script");
  s.src = "https://code.jquery.com/jquery-3.7.1.min.js";
  s.onload = function () { run(window.jQuery.noConflict(true)); };
  document.head.appendChild(s);
})(function ($) {

  /* Lấy tên hoạt động: bỏ phần chữ ẩn (accesshide) như " Bài tập", " Assignment" mà Moodle chèn cho trình đọc màn hình */
  function cleanName($instancename) {
    var $copy = $instancename.clone();
    $copy.find(".accesshide").remove();
    return $.trim($copy.text());
  }

  /* Tìm deadline trong một hoạt động: Moodle 3.11+ / 4.x ghi trong .activity-dates,
     ví dụ "Due: Friday, 28 November 2026, 11:59 PM" hoặc "Đến hạn: Thứ Sáu, 28 Tháng Mười Một 2026, 11:59 PM" */
  var DUE_LABELS = /(Due|Đến hạn|Hạn chót|Hạn nộp|Closes|Đóng)\s*:?\s*/i;
  function findDeadline($activity) {
    var result = "";
    $activity.find(".activity-dates div, .activity-dates span, .activity-information div, .description div, .contentafterlink").each(function (i, el) {
      var text = $.trim($(el).text()).replace(/\s+/g, " ");
      if (DUE_LABELS.test(text)) {
        result = text.replace(/^.*?(Due|Đến hạn|Hạn chót|Hạn nộp|Closes|Đóng)\s*:?\s*/i, "");
        return false; // dừng each
      }
    });
    return result || "(không ghi deadline trên trang chủ môn học)";
  }

  /* ---------------- Đoạn code gốc của đề: in tên tất cả bài tập ---------------- */
  console.log("%c== Tất cả bài tập (code gốc của đề) ==", "font-weight:bold;color:#e3001b");
  $(".modtype_assign").each(function (index, value) {
    $(value).find(".instancename").each(function (index_Instancename, value_Instancename) {
      console.log($(value_Instancename).text());
    });
  });

  /* ---------------- Yêu cầu 1: in ra bài nộp thứ 5 ---------------- */
  var $assigns = $(".modtype_assign");
  console.log("%c== Yêu cầu 1: bài nộp thứ 5 ==", "font-weight:bold;color:#e3001b");
  if ($assigns.length >= 5) {
    var $fifth = $assigns.eq(4);                                   // eq() đếm từ 0 nên bài thứ 5 là eq(4)
    console.log("Bài nộp thứ 5 / " + $assigns.length + ": " + cleanName($fifth.find(".instancename").first()));
    console.log("Deadline: " + findDeadline($fifth));
  } else {
    console.log("Môn học này chỉ có " + $assigns.length + " bài nộp, chưa đủ 5 bài.");
  }

  /* ---------------- Yêu cầu 2: mỗi chủ đề có bài tập không, deadline ngày mấy ---------------- */
  console.log("%c== Yêu cầu 2: các chủ đề của môn học ==", "font-weight:bold;color:#e3001b");
  var rows = [];
  // Moodle 3.x: li.section.main; Moodle 4.x: li.section.course-section
  $("li.section.main, li.section.course-section").each(function (i, section) {
    var $section = $(section);
    var title = $.trim($section.find(".sectionname, h3.section-title").first().text()) ||
                $.trim($section.attr("aria-label")) || ("Chủ đề " + i);
    var $sectionAssigns = $section.find(".modtype_assign");

    if ($sectionAssigns.length === 0) {
      rows.push({ "Chủ đề": title, "Có bài tập?": "Không", "Bài tập": "", "Deadline": "" });
      console.log("• " + title + ": không có bài tập");
    } else {
      $sectionAssigns.each(function (j, a) {
        var name = cleanName($(a).find(".instancename").first());
        var due = findDeadline($(a));
        rows.push({ "Chủ đề": j === 0 ? title : "", "Có bài tập?": j === 0 ? "Có (" + $sectionAssigns.length + ")" : "", "Bài tập": name, "Deadline": due });
        console.log("• " + title + ": có bài tập \"" + name + "\" – deadline: " + due);
      });
    }
  });
  console.table(rows);

  // Trả về dữ liệu để trang demo (index.html) có thể hiển thị
  window.LMS_RESULT = { total: $assigns.length, fifth: $assigns.length >= 5 ? cleanName($assigns.eq(4).find(".instancename").first()) : null, rows: rows };
});
