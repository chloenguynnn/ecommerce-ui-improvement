# AI Usage Log

## 1. Công cụ AI

- **ChatGPT (Codex):** Phân tích, đề xuất giao diện, hỗ trợ viết và giải thích mã nguồn, chỉnh sửa theo phản hồi và soạn tài liệu.
- **Imagegen tích hợp:** Tạo banner và hình ảnh nước hoa mô phỏng chụp studio.

## 2. Mục đích sử dụng

- Hỗ trợ cải tiến bộ lọc danh mục Fragrance theo nhu cầu của khách hàng Việt Nam.
- Xây dựng trang thương mại điện tử mẫu bằng HTML5/CSS3 và JavaScript thuần.
- Điều chỉnh phong cách cao cấp, hiển thị tiếng Việt và bố cục responsive.
- Giải thích vai trò của các thành phần HTML/CSS và hướng dẫn đưa bài lên GitHub.

## 3. Prompt đã sử dụng

Các prompt chính có trong quá trình trao đổi:

### Prompt xây dựng giao diện

> Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
>
> Yêu cầu:
> - Giao diện có tiêu đề và khu vực sản phẩm.
> - Có tối thiểu 4 sản phẩm mẫu.
> - Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
> - Bố cục phù hợp với màn hình máy tính và điện thoại.
> - Mã HTML có cấu trúc rõ ràng.
> - CSS được tách thành file riêng.
> - Không sử dụng backend hoặc cơ sở dữ liệu.
> - Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
>
> Giải thích cách chạy trang web và những phần tôi cần kiểm tra.

### Prompt yêu cầu chỉnh sửa

> 1. Giao diện này kh phù hợp với định hướng sang trọng, luxury của brand
> 2. Như trên hình t gửi thì ngay từ trang chủ đã bị lỗi tiếng Việt
> 3. Hình ảnh các chai nước hoa mẫu cũng không luxury, nhìn như vẽ lên
> 4. Bấm vào hình ảnh sản phẩm thì ra chi tiết sản phẩm chứ không cần làm 1 nút Khám phá sản phẩm riêng được kh
> 5. Banner ngay trang chủ quá bình thường, tham khảo trang chủ Guerlain để thiết kế lại cho đúng định hướng đi
>
> Sửa lại theo các feedback của t đi

### Prompt yêu cầu giải thích mã nguồn

> ê ok rồi á mày
> - Giải thích được vai trò của các thành phần HTML/CSS đã sửa.
> mà cái này giải thích sao t ko hỉu gì hết

Sinh viên tiếp tục hỏi cách tìm các phần trong mã nguồn, vị trí file `style.css` và sự khác nhau giữa tên class, thẻ HTML và thuộc tính CSS.

Prompt tạo từng ảnh được lưu đầy đủ trong `ASSET_NOTES.md`.

## 4. Kết quả AI đề xuất

- Trang danh mục với 6 sản phẩm, bộ lọc bên trái trên máy tính và bộ lọc thu gọn trên điện thoại.
- Bộ lọc nhanh theo phong cách và đối tượng; tiêu chí nâng cao đặt trong nhóm mở/đóng.
- Tương tác lọc, xóa tiêu chí, đếm kết quả và sắp xếp bằng JavaScript thuần.
- Bản sửa dùng banner ảnh lớn, phông chữ tiếng Việt cục bộ và ảnh AI thay cho SVG.
- Ảnh và tên sản phẩm mở cửa sổ chi tiết, không cần nút khám phá riêng.
- Bộ mã nguồn gồm HTML, CSS, JavaScript và tài nguyên cục bộ; không có backend hoặc database.

## 5. Kiểm tra và điều chỉnh

### Phần sinh viên đã thực hiện trong quá trình trao đổi

- Chọn hướng cải tiến bộ lọc và thống nhất phương án.
- Mở, xem giao diện mẫu; gửi hình minh chứng và nhận xét về lỗi hiển thị tiếng Việt, hình ảnh và phong cách thiết kế.
- Yêu cầu sửa 5 nội dung nêu trong prompt; không giữ nguyên bản đầu do chưa phù hợp định hướng cao cấp.
- Phản hồi đồng ý với bản sửa và yêu cầu AI giải thích vai trò, vị trí của mã HTML/CSS.

### Phần AI đã điều chỉnh và kiểm tra

- Thay banner và 6 ảnh sản phẩm; bỏ nút khám phá riêng.
- Nhúng phông có hỗ trợ tiếng Việt và chuẩn hóa văn bản Unicode NFC.
- Điều chỉnh bố cục máy tính/điện thoại, kích thước chữ và khoảng cách.
- Kiểm tra cú pháp JavaScript, cấu trúc HTML, đường dẫn tài nguyên và ký tự tiếng Việt trong phông.
- Kiểm tra logic lọc OR trong cùng một nhóm, AND giữa các nhóm, trường hợp không có kết quả và dữ liệu sắp xếp giá.
- Kiểm tra ảnh/tên của 6 sản phẩm liên kết đến đúng template chi tiết.

### Giới hạn và nội dung cần kiểm tra tiếp

- AI chưa chạy kiểm thử trực quan hoặc thao tác bằng trình duyệt trong môi trường thực hiện; không khẳng định đã kiểm thử đầy đủ trên mọi thiết bị.
- Sinh viên cần đối chiếu checklist trong `HUONG_DAN.md`, nhất là mobile 390/320 px, mở/đóng chi tiết, lọc và bàn phím.
- Sau khi tải lên GitHub, cần kiểm tra file, README, trạng thái Public và website GitHub Pages nếu triển khai.
- Chưa ghi nhận repository hoặc GitHub Pages đã được tạo tại thời điểm chuẩn bị bộ tài liệu này.

## 6. Phần tôi hiểu và có thể giải thích

Bảng dưới đây là nội dung giải thích đã được AI hướng dẫn. Sinh viên cần đối chiếu với code và tự trình bày lại để xác nhận mức độ hiểu trước khi nộp.

| Nội dung | Tìm ở đâu | Vai trò cần giải thích |
| --- | --- | --- |
| Cấu trúc trang | `index.html`: `<header>`, `<main>`, `<aside>`, `<section>`, `<footer>` | Chia trang thành đầu trang, nội dung chính, bộ lọc, các khu vực và chân trang |
| Banner | `index.html`: `class="hero"` | `<section>` tạo khu vực, `<img>` hiển thị ảnh, `<h1>` chứa tiêu đề chính |
| Class và bộ chọn CSS | `class="hero"` trong HTML; `.hero` trong CSS | Class đặt tên nhóm phần tử; bộ chọn CSS dùng tên đó để áp dụng định dạng |
| Phông tiếng Việt | `style.css`: `@font-face`, `font-family` | Nhúng và chọn phông chữ có hỗ trợ tiếng Việt |
| Màu sắc, khoảng cách | `style.css`: `:root`, `color`, `background`, `padding`, `gap` | Khai báo màu dùng chung, định dạng màu và khoảng cách giữa các phần |
| Ảnh sản phẩm | `index.html`: `class="product-image"`; CSS `aspect-ratio`, `object-fit` | Tạo vùng ảnh có thể bấm, giữ tỉ lệ khung và cách ảnh lấp đầy khung |
| Nhóm tiêu chí lọc | `index.html`: `id="filter-form"`, `<fieldset>`, `<legend>`, `<input>`, `<label>` | Tạo biểu mẫu, nhóm và đặt tên các tiêu chí, tạo checkbox cùng nhãn |
| Thu gọn bộ lọc | `<details>`, `<summary>` | Tạo vùng có thể mở/đóng mà không cần thư viện giao diện |
| Responsive | `style.css`: `.product-grid`, `@media` | Dùng Grid chia cột; thay đổi bố cục, chữ và khoảng cách theo độ rộng màn hình |
| Xem chi tiết | HTML `<button>`, `<dialog>`; `script.js` | HTML tạo vùng bấm/cửa sổ; JavaScript nhận sự kiện và mở/đóng cửa sổ |

**Phân biệt:** HTML tạo cấu trúc và nội dung; CSS định dạng; JavaScript xử lý các tương tác như lọc thực tế, sắp xếp và mở chi tiết.
