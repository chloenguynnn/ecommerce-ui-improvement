# Advanced-FrontEnd – Nhóm 2: áp dụng vào tình huống thực tế

Bài tập cá nhân Chương 6 (Advanced Front-end), học phần **Phát triển ứng dụng TMĐT**, giảng viên TS Nguyễn Mạnh Tuấn.
Nhóm 1 (Lab 07 CSS nâng cao) nằm trong thư mục [`CSS-NangCao`](../CSS-NangCao/).

| | |
|---|---|
| Họ và tên | Nguyễn Trần Bảo Nhi |
| Mã số sinh viên | 31241021234 |
| Lớp học phần | 26C1INF50902701 |

## Đường dẫn GitHub Pages

| Trang | Đường dẫn |
|---|---|
| Trang Nhóm 2 | <https://chloenguynnn.github.io/ecommerce-ui-improvement/Advanced-FrontEnd/> |
| 1. E-commerce | <https://chloenguynnn.github.io/ecommerce-ui-improvement/Advanced-FrontEnd/ecommerce/> |
| 2. jQuery LMS | <https://chloenguynnn.github.io/ecommerce-ui-improvement/Advanced-FrontEnd/jquery-lms/> |
| 3. Flappy Bird | <https://chloenguynnn.github.io/ecommerce-ui-improvement/Advanced-FrontEnd/flappy-bird/> |

## 1. Hoàn thiện bài e-commerce

Loại hình kinh doanh: **cửa hàng nước hoa** (L'Atelier Parfum, thương hiệu giả lập). Làm theo file *Hướng dẫn làm Website bằng Bootstrap*:

| Trang | Nội dung |
|---|---|
| `ecommerce/index.html` | Navbar (logo, dropdown, ô tìm kiếm ẩn/hiện theo màn hình, giỏ hàng có badge), carousel, danh mục `list-group`, lưới sản phẩm `thumbnail` |
| `ecommerce/product.html?id=…` | Ảnh lớn + ảnh nhỏ, mô tả, form số lượng / kiểu chai / dung tích, đánh giá, bình luận, sản phẩm khác |
| `ecommerce/status.html` | Trạng thái đơn hàng |

Yêu cầu bổ sung của đề:

- **xZoom** (`vendor/xzoom`): trang chi tiết dùng `img.xzoom` + `img.xzoom-gallery`; bấm ảnh nhỏ để đổi ảnh, rê chuột lên ảnh lớn để phóng to.
- **Bootstrap progress** (`stockBar()` trong `js/shop.js`): thanh trạng thái kho, xanh > 50%, vàng 20–50%, đỏ sọc chạy < 20%.
- **Nhãn trên ảnh** (`badges()`): phần trăm giảm giá ở góc trên bên trái, New / Best seller ở góc trên bên phải.
- **bootstrap-star-rating** (`vendor/star-rating`, theme `krajee-svg`): thay toàn bộ `glyphicon-star`; ô "Viết đánh giá" cho phép bấm chọn sao.

Dữ liệu sản phẩm nằm trong `ecommerce/js/products.js`. Ảnh sản phẩm dùng lại từ bộ ảnh của bài Buổi 1 (`assets/`).

## 2. jQuery cho trang LMS-UEH

- `jquery-lms/lms-assignments.js`: dán vào Console của trang môn học trên LMS (đã đăng nhập).
  - Chạy lại đoạn code gốc của đề (`$(".modtype_assign").each(...)`).
  - **Yêu cầu 1:** `$(".modtype_assign").eq(4)` → bài nộp thứ 5.
  - **Yêu cầu 2:** duyệt từng chủ đề (`li.section`), đếm `.modtype_assign` bên trong, đọc deadline trong `.activity-dates` ("Đến hạn:" / "Due:"), in bảng bằng `console.table`. Chủ đề không có bài tập (ví dụ "Tài liệu tham khảo") ghi "Không".
  - Nếu trang LMS không có `$` toàn cục, script tự nạp jQuery trước khi chạy.
- `jquery-lms/index.html`: hướng dẫn, nút sao chép code và một trang mô phỏng cấu trúc HTML Moodle để chạy thử.

## 3. Hoàn thiện game Flappy Bird

`flappy-bird/index.html`, `flappy-bird/game.js`, ảnh `flappy-bird/images/bird.svg`, `pipe.svg` (tự vẽ).

| Yêu cầu | Cách làm |
|---|---|
| Đổi hình ống khói và Bird | `images/bird.svg` (chim đỏ rượu vang, khăn vàng), `images/pipe.svg` (ống khói gạch, viền vàng) |
| Level ở góc trên bên trái | Hàm `hud()` |
| 5 → L2, 20 → L3, 40 → L4, 50 → thắng | Mảng `LEVELS`, hàm `checkLevel()`, `win()` dừng `setInterval` |
| Interval 40 / 30 / 25 / 20 | `startTimer()` gọi lại `setInterval(update, level().interval)` khi lên level |
| Bỏ mousedown, dùng keydown ↓ | `window.addEventListener("keydown", …)` với `e.key === "ArrowDown"` |

Cải tiến nâng cao:

1. Vẽ bằng `requestAnimationFrame` và nội suy vị trí giữa hai nhịp `setInterval` → hình mượt ~60 khung/giây ở mọi level (có ô bật/tắt để so sánh).
2. Bấm phím đặt lại vận tốc bay lên (không cộng dồn), giới hạn tốc độ rơi.
3. Vùng va chạm hình tròn nhỏ hơn hình chim; khoảng trống giữa hai ống đủ rộng, không lệch quá 140px giữa hai ống liên tiếp.
4. Chống lặp phím khi giữ, màn chờ, tạm dừng (P), chơi lại (Enter), điểm cao nhất lưu `localStorage`, chim nghiêng theo hướng bay, thông báo lên level, chạm màn hình trên điện thoại.

Đề xuất thêm: âm thanh khi bay/qua ống, vật phẩm (khiên chống va chạm một lần), bảng xếp hạng online, ống di chuyển lên xuống ở level cao.

## Thư viện dùng (lưu trong `vendor/`)

Bootstrap 3.4.1, jQuery 3.7.1, xZoom 1.0.x (Apache 2.0), bootstrap-star-rating 4.1.2 (BSD-3).
