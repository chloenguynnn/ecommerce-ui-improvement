# Guerlain Fragrance — bản sửa v2 theo feedback

## Mở đúng bản mới

1. Tải lại ZIP và giải nén vào **một thư mục mới** để tránh mở nhầm bản cũ.
2. Mở `index.html` bằng Chrome, Edge, Firefox hoặc Safari phiên bản mới.
3. Giữ `index.html`, `style.css`, `script.js` và `assets/` đúng vị trí.
4. Nếu vẫn thấy hai chai vẽ SVG hoặc nút “Khám phá sản phẩm”, bạn đang mở bản cũ. Mở đúng file mới rồi nhấn Ctrl+F5.

Không cần cài đặt, backend, database hoặc Internet. Phông chữ và toàn bộ hình ảnh đã nằm trong thư mục assets. Có thể dùng Live Server nếu muốn, nhưng không bắt buộc.

## Năm nội dung đã thay đổi

| Feedback | Cách chỉnh |
| --- | --- |
| Chưa có cảm giác luxury | Thiết kế lại header, khoảng trắng, tỉ lệ ảnh, cách trình bày tên/giá; nền trắng, đen và điểm nhấn vàng tiết chế |
| Dấu tiếng Việt hiển thị không tốt | Phông Noto Serif và Manrope có đầy đủ ký tự tiếng Việt được nhúng cục bộ; chuẩn hóa Unicode NFC; bỏ headline chữ nghiêng |
| Chai nước hoa trông như hình vẽ | Thay toàn bộ SVG bằng 6 ảnh mô phỏng chụp studio, chất liệu thủy tinh, ánh sáng và phản xạ chân thực hơn |
| Muốn bấm ảnh để xem chi tiết | Ảnh và tên sản phẩm đều mở cửa sổ chi tiết; đã bỏ nút “Khám phá sản phẩm” riêng |
| Banner quá đơn giản | Banner toàn chiều rộng, ảnh chiến dịch nền tối/ánh vàng, tiêu đề ngắn; có bố cục riêng cho màn hình nhỏ |

Ảnh mới tạo bằng AI, sản phẩm hư cấu mang nhãn ETUDE. Không phải ảnh sản phẩm Guerlain thật. Bản thiết kế học tập lấy cảm hứng từ cách giới thiệu chiến dịch và định hướng cao cấp của thương hiệu.

## Cấu trúc dự án

| File/thư mục | Nội dung |
| --- | --- |
| index.html | Nội dung và cấu trúc HTML5, dữ liệu 6 sản phẩm, form lọc, template chi tiết |
| style.css | Toàn bộ CSS; có chia phần rõ ràng và media queries |
| script.js | JavaScript thuần cho lọc, đếm, xóa lựa chọn, sắp xếp và mở chi tiết |
| assets/hero.png | Ảnh banner chiến dịch |
| assets/iris.png, tea.png, rose.png, ambre.png, bois.png, fleur.png | Ảnh sản phẩm tương ứng |
| assets/fonts/ | Phông chữ tiếng Việt và giấy phép SIL Open Font License |
| ASSET_NOTES.md | Nguồn tham khảo, công cụ và prompt tạo từng ảnh |
| README.md | Hướng dẫn chạy và kiểm tra |

Không thêm framework, thư viện giao diện hoặc package cần cài đặt. JavaScript chỉ chạy trong trình duyệt, không gửi dữ liệu đi và không lưu lựa chọn khi tải lại trang.

## Kiểm tra trên điện thoại bằng Chrome máy tính

1. Mở trang → F12 hoặc Ctrl+Shift+I.
2. Ctrl+Shift+M → chọn Responsive.
3. Nhập Width 390 và Height 844; tải lại trang.
4. Thử thêm Width 320; sau đó chuyển về desktop 1280 hoặc 1440.

| Cần kiểm tra | Kết quả mong đợi |
| --- | --- |
| Headline “Dấu ấn / của riêng bạn.” | Dấu tiếng Việt đúng, các chữ đồng nhất, không bị cắt dấu |
| Banner ở 390 và 320 px | Ảnh phủ kín khung; chữ trắng ở phần dưới đọc rõ; CTA không tràn |
| Desktop | Bộ lọc bên trái, 3 cột sản phẩm bên phải |
| Tablet khoảng 820 px | 2 cột sản phẩm; bộ lọc bên trái |
| Mobile | 2 cột sản phẩm; bộ lọc mặc định thu gọn; không kéo ngang |
| Bấm ảnh từng sản phẩm | Mở đúng ảnh, tên, dung tích, mô tả và giá của sản phẩm đó |
| Bấm tên sản phẩm | Cũng mở chi tiết tương ứng |
| Đóng chi tiết | Nút × hoặc Escape đóng cửa sổ; focus trở lại phần tử đã mở |
| Lọc Thanh lịch & tinh tế → Áp dụng | 2 sản phẩm: Éclat d’Iris và Bois Serein |
| Chọn thêm Nhẹ nhàng & tự nhiên → Áp dụng | 4 sản phẩm: Iris, Bois, Thé, Fleur |
| Xóa hết; chọn Nhẹ nhàng & tự nhiên + Nữ → Áp dụng | 1 sản phẩm: Fleur de Soie |
| Xóa hết; chọn Sang trọng & nổi bật + Nữ → Áp dụng | 0 sản phẩm, hiển thị thông báo và nút Xóa tất cả |
| Nhấn × ở một tiêu chí đang áp dụng | Bỏ đúng tiêu chí và cập nhật số sản phẩm |
| Xóa tất cả | Bỏ toàn bộ tiêu chí và lựa chọn Nổi bật; trở về 6 sản phẩm |
| Chọn Nổi bật → Tuyển chọn | 3 sản phẩm nếu không có bộ lọc khác |
| Chọn Giá tăng dần | 2.250.000 → 2.450.000 → 2.950.000 → 3.150.000 → 3.450.000 → 4.250.000 ₫ |
| Tab, Enter, Space, Escape | Chọn bộ lọc và mở/đóng chi tiết được bằng bàn phím; viền focus rõ |
| Tắt mạng và mở lại | Ảnh, phông chữ, CSS và tương tác vẫn chạy |

Checkbox chỉ áp dụng sau khi nhấn **Áp dụng bộ lọc**. Nổi bật và Sắp xếp cập nhật ngay. Cùng một nhóm dùng OR; giữa các nhóm dùng AND. Unisex là nhóm độc lập. Xóa bộ lọc giữ thứ tự sắp xếp đang chọn.

## Phạm vi và kiểm tra đã thực hiện

- Không có chức năng giỏ hàng, thanh toán, đăng nhập hoặc đặt hàng. Nút ảnh/tên chỉ mở thông tin mẫu.
- Đã xem ảnh feedback và các ảnh mới; kiểm tra cú pháp JavaScript, cấu trúc HTML, đường dẫn ảnh/phông, ký tự tiếng Việt trong phông, dữ liệu lọc và liên kết ảnh/tên với template chi tiết.
- Chưa chạy kiểm thử trực quan hoặc thao tác trong trình duyệt vì môi trường không có công cụ trình duyệt phù hợp. Dùng bảng trên để đối chiếu trên thiết bị thực tế.
- Tham khảo: https://www.guerlain.com/us/en-us/ (16/10/2026). Không sao chép mã nguồn hoặc đưa ảnh chiến dịch của hãng vào gói bài tập.
