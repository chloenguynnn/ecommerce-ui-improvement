# E-commerce UI Improvement

**Học phần:** Phát triển ứng dụng WEB/TMĐT  
**Giảng viên:** TS Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn

## 1. Giới thiệu

Bài tập xây dựng giao diện danh mục nước hoa (Fragrance), lấy cảm hứng từ website Guerlain. Khu vực cải tiến chính là bộ lọc sản phẩm: ưu tiên phong cách hương thơm và đối tượng sử dụng, đồng thời thu gọn các tiêu chí chuyên sâu để khách hàng Việt Nam dễ lựa chọn.

Giao diện có 6 sản phẩm mẫu, thiết kế hướng đến sự sang trọng và bố cục thích ứng với máy tính, máy tính bảng, điện thoại. Đây là bài tập học tập, không phải website chính thức hoặc cửa hàng của Guerlain.

## 2. Website tham khảo

- **Tên website:** Guerlain – phiên bản Hoa Kỳ.
- **URL:** https://www.guerlain.com/us/en-us/
- **Khu vực đã khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- **Khu vực tập trung cải tiến:** Bộ lọc danh mục Fragrance.

## 3. Chức năng

- Hiển thị 6 sản phẩm với hình ảnh, tên, giá và dung tích.
- Lọc nhanh theo phong cách hương thơm và đối tượng sử dụng.
- Mở/thu gọn bộ lọc nâng cao: nhóm mùi, độ đậm mùi, bộ sưu tập, loại sản phẩm và khoảng giá.
- Hiển thị các tiêu chí đang áp dụng, số sản phẩm phù hợp và thông báo khi không có kết quả.
- Xóa từng tiêu chí hoặc toàn bộ bộ lọc.
- Chọn nhóm sản phẩm nổi bật, sắp xếp giá tăng hoặc giảm.
- Nhấn ảnh hoặc tên sản phẩm để mở cửa sổ chi tiết.
- Điều chỉnh bố cục theo kích thước màn hình.

Không có đăng nhập, giỏ hàng, đặt hàng, thanh toán, backend hoặc cơ sở dữ liệu. Tương tác chỉ chạy trong trình duyệt.

## 4. Công nghệ

- **HTML5:** Xây dựng cấu trúc và nội dung trang.
- **CSS3:** Định dạng màu sắc, phông chữ, bố cục Grid/Flexbox và responsive bằng media queries.
- **JavaScript thuần:** Xử lý lọc, đếm kết quả, sắp xếp và mở/đóng chi tiết sản phẩm.
- Không sử dụng framework hoặc thư viện JavaScript bên ngoài.
- Ảnh và phông Noto Serif/Manrope được lưu cục bộ; giấy phép phông nằm trong `assets/fonts/`.

| File/thư mục | Vai trò |
| --- | --- |
| `index.html` | Giao diện và nội dung 6 sản phẩm |
| `style.css` | CSS tách riêng |
| `script.js` | Tương tác phía trình duyệt |
| `assets/` | Banner, ảnh sản phẩm và phông chữ |
| `README.md` | Giới thiệu dự án theo yêu cầu học phần |
| `AI_USAGE.md` | Nhật ký sử dụng AI |
| `HUONG_DAN.md` | Hướng dẫn chạy và checklist kiểm tra |
| `GITHUB_GUIDE.md` | Hướng dẫn tải mã nguồn và bật GitHub Pages |
| `ASSET_NOTES.md` | Nguồn tham khảo và prompt tạo ảnh |

## 5. Cách chạy

1. Tải và giải nén dự án, hoặc tải mã nguồn từ repository.
2. Mở file `index.html` bằng trình duyệt.
3. Giữ nguyên vị trí của `style.css`, `script.js` và thư mục `assets/`.

Không cần cài đặt công cụ hoặc kết nối Internet để chạy bản cục bộ. Khi triển khai GitHub Pages, đặt `index.html` ở thư mục gốc repository và chọn nhánh chứa mã nguồn, thư mục `/ (root)`.

## 6. Cải tiến đã thực hiện

| Vấn đề/nhu cầu | Cải tiến |
| --- | --- |
| Bộ lọc có nhiều thuật ngữ và tiêu chí, có thể gây khó khăn cho người mới | Ưu tiên phong cách hương thơm và đối tượng; chuyển tiêu chí chuyên sâu vào nhóm thu gọn |
| Cần nhận biết kết quả lọc | Hiển thị tiêu chí đang chọn, số sản phẩm và thông báo khi không có kết quả |
| Bản giao diện đầu chưa phù hợp định hướng cao cấp | Điều chỉnh khoảng trắng, màu sắc, kiểu chữ và bố cục sản phẩm |
| Chữ tiếng Việt ở banner hiển thị không đồng nhất | Nhúng phông hỗ trợ tiếng Việt, chuẩn hóa Unicode NFC và bỏ kiểu tiêu đề nghiêng |
| Ảnh chai SVG chưa tạo cảm giác chân thực | Thay bằng 6 ảnh AI mô phỏng chụp studio |
| Nút khám phá riêng làm giao diện thẻ sản phẩm thêm rườm rà | Cho phép nhấn trực tiếp vào ảnh hoặc tên để mở chi tiết |
| Banner ban đầu đơn giản | Thiết kế banner toàn chiều rộng với ảnh chiến dịch nền tối, ánh vàng và tiêu đề ngắn |
| Cần sử dụng trên điện thoại | Chuyển lưới sản phẩm từ 3 xuống 2 cột; thu gọn bộ lọc trên màn hình nhỏ |

Các phong cách, bộ sưu tập, tên sản phẩm, giá và nhãn nổi bật là dữ liệu giả định phục vụ bài tập; không phải danh mục hay giá bán thật của Guerlain. Không sao chép ảnh chiến dịch hoặc mã nguồn của website tham khảo.

## 7. Hỗ trợ từ AI

ChatGPT (Codex) hỗ trợ phân tích giao diện, đề xuất bộ lọc, xây dựng HTML/CSS/JavaScript, giải thích mã nguồn và chuẩn bị tài liệu. Công cụ Imagegen hỗ trợ tạo banner và hình ảnh sản phẩm.

Sinh viên lựa chọn phương án cải tiến; mở và xem giao diện; cung cấp hình minh chứng và 5 phản hồi về phong cách, tiếng Việt, ảnh sản phẩm, thao tác xem chi tiết và banner. AI đã chỉnh sửa theo các phản hồi này; sinh viên đã phản hồi đồng ý với bản sửa.

AI đã kiểm tra cú pháp JavaScript, cấu trúc HTML, đường dẫn tài nguyên, ký tự trong phông và logic lọc. Không coi các kiểm tra mã này là bằng chứng đã kiểm thử trực quan hoặc thao tác đầy đủ trên mọi thiết bị. Checklist cần đối chiếu khi chạy nằm trong `HUONG_DAN.md`.

Chi tiết prompt, kết quả và phần giải thích mã nguồn: xem `AI_USAGE.md`.
