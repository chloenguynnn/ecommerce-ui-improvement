# E-commerce UI Improvement

**Học phần:** Phát triển ứng dụng WEB/TMĐT  
**Giảng viên:** TS Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn  
**Sinh viên:** Nguyễn Trần Bảo Nhi  
**MSSV:** 31241021234  
**Lớp học phần:** 26C1INF50902701  

## 1. Giới thiệu

Bài tập xây dựng giao diện danh mục nước hoa (Fragrance), lấy cảm hứng từ website Guerlain. Khu vực cải tiến chính trong Buổi 1 là bộ lọc sản phẩm: ưu tiên phong cách hương thơm và đối tượng sử dụng, đồng thời thu gọn các tiêu chí chuyên sâu để khách hàng Việt Nam dễ lựa chọn.

Giao diện có 6 sản phẩm mẫu, thiết kế hướng đến sự sang trọng và bố cục thích ứng với máy tính, máy tính bảng, điện thoại. Đây là bài tập học tập, không phải website chính thức hoặc cửa hàng của Guerlain.

Trong Buổi 2, bài tập tiếp tục sử dụng mã nguồn của Buổi 1 để thực hành HTML5 và CSS3. Nội dung tập trung vào cấu trúc đường dẫn điều hướng, CSS selector, Box Model, Flexbox, CSS Grid, hiệu ứng hover/focus và kiểm tra giao diện trên màn hình nhỏ.

## 2. Website tham khảo

- **Tên website:** Guerlain – phiên bản Hoa Kỳ.
- **URL:** https://www.guerlain.com/us/en-us/
- **Khu vực đã khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- **Khu vực tập trung cải tiến trong Buổi 1:** Bộ lọc danh mục Fragrance.
- **Khu vực thực hành trong Buổi 2:** Đường dẫn điều hướng, thẻ sản phẩm được chọn, tiêu đề danh mục và danh sách sản phẩm.

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

## 4. Công nghệ và cấu trúc dự án

### 4.1. Công nghệ

- **HTML5:** Xây dựng cấu trúc và nội dung trang.
- **CSS3:** Định dạng màu sắc, phông chữ, khoảng cách, bố cục Grid/Flexbox và responsive bằng media queries.
- **JavaScript thuần:** Xử lý lọc, đếm kết quả, sắp xếp và mở/đóng chi tiết sản phẩm.
- Không sử dụng Bootstrap, Tailwind CSS hoặc thư viện JavaScript bên ngoài.
- Ảnh và phông Noto Serif/Manrope được lưu cục bộ; giấy phép phông nằm trong `assets/fonts/`.

### 4.2. Các tệp và thư mục

| Tệp/thư mục | Vai trò |
| --- | --- |
| `index.html` | Cấu trúc giao diện và nội dung 6 sản phẩm |
| `style.css` | Định dạng giao diện bằng CSS tách riêng |
| `script.js` | Xử lý tương tác phía trình duyệt |
| `assets/` | Banner, ảnh sản phẩm và phông chữ |
| `README.md` | Giới thiệu dự án và tổng hợp nội dung thực hành |
| `AI_USAGE.md` | Nhật ký sử dụng AI |
| `HUONG_DAN.md` | Hướng dẫn chạy và checklist kiểm tra |
| `GITHUB_GUIDE.md` | Hướng dẫn tải mã nguồn và bật GitHub Pages |
| `ASSET_NOTES.md` | Nguồn tham khảo và prompt tạo ảnh |

Dự án giữ nguyên cấu trúc thư mục từ Buổi 1. Tệp `style.css` nằm cùng thư mục với `index.html` và được liên kết trong phần `head` bằng thẻ:

<link rel="stylesheet" href="style.css">

### 4.3. Kiến thức HTML5/CSS3 thực hành trong Buổi 2

- **HTML5:** Sử dụng `nav`, `ol`, `li` cho đường dẫn điều hướng; xác định trang hiện tại bằng `aria-current="page"`.
- **Element selector:** Chọn phần tử theo tên thẻ, chẳng hạn `button`.
- **Class selector:** Chọn phần tử theo class, chẳng hạn `.product-card`.
- **Descendant selector:** Chọn phần tử bên trong một phần tử khác, chẳng hạn `.product-card .product-title`.
- **Box Model:** Điều chỉnh `margin`, `padding`, `border`, `border-radius` và sử dụng `box-sizing: border-box`.
- **Flexbox:** Sử dụng `display: flex`, `justify-content`, `align-items` và `gap`.
- **CSS Grid:** Sử dụng `display: grid`, `grid-template-columns`, `repeat()` và `gap`.
- **Hình ảnh:** Sử dụng `object-fit: cover` để ảnh lấp đầy khung mà vẫn giữ tỷ lệ; ảnh có thể bị cắt một phần.
- **Tương tác:** Bổ sung `:hover`, `:focus-visible` và `transition`.
- **Media query:** Điều chỉnh cỡ chữ cho màn hình nhỏ.

## 5. Hướng dẫn chạy website

### 5.1. Chạy trên máy tính

1. Tải và giải nén dự án hoặc clone repository.
2. Mở thư mục dự án bằng Visual Studio Code.
3. Mở `index.html` bằng trình duyệt hoặc sử dụng tiện ích Live Preview/Live Server.
4. Giữ nguyên vị trí của `style.css`, `script.js` và thư mục `assets/`.
5. Sau khi chỉnh sửa, lưu tệp và tải lại trang để kiểm tra.

Bản cục bộ sử dụng ảnh và phông chữ trong dự án nên không cần kết nối Internet để tải các tài nguyên này.

### 5.2. Kiểm tra trên trình duyệt

- Kiểm tra CSS được áp dụng qua font chữ, màu sắc và bố cục.
- Mở DevTools, chọn Network và tải lại trang để kiểm tra việc tải `style.css`.
- Kiểm tra hình ảnh, liên kết và các thao tác trong khu vực đã chỉnh sửa.
- Rê chuột vào nút để kiểm tra hover.
- Dùng phím Tab để kiểm tra focus-visible.
- Sử dụng chế độ mô phỏng thiết bị để kiểm tra giao diện ở các chiều rộng khác nhau.
- Khi thử CSS trong DevTools, thực hiện lại thay đổi trong tệp nguồn ở VS Code để lưu lâu dài.

### 5.3. GitHub Pages

Khi triển khai GitHub Pages, đặt `index.html` ở thư mục gốc repository và chọn nhánh chứa mã nguồn, thư mục `/ (root)`.

## 6. Những thay đổi đã thực hiện

### 6.1. Cải tiến trong Buổi 1

| Vấn đề/nhu cầu | Cải tiến |
| --- | --- |
| Bộ lọc có nhiều thuật ngữ và tiêu chí, có thể gây khó khăn cho người mới | Ưu tiên phong cách hương thơm và đối tượng; chuyển tiêu chí chuyên sâu vào nhóm thu gọn |
| Cần nhận biết kết quả lọc | Hiển thị tiêu chí đang chọn, số sản phẩm và thông báo khi không có kết quả |
| Bản giao diện đầu chưa phù hợp định hướng cao cấp | Điều chỉnh khoảng trắng, màu sắc, kiểu chữ và bố cục sản phẩm |
| Chữ tiếng Việt ở banner hiển thị không đồng nhất | Nhúng phông hỗ trợ tiếng Việt, chuẩn hóa Unicode NFC và bỏ kiểu tiêu đề nghiêng |
| Ảnh chai SVG chưa tạo cảm giác chân thực | Thay bằng 6 ảnh AI mô phỏng chụp studio |
| Nút khám phá riêng làm giao diện thẻ sản phẩm thêm rườm rà | Cho phép nhấn trực tiếp vào ảnh hoặc tên để mở chi tiết |
| Banner ban đầu đơn giản | Thiết kế banner toàn chiều rộng với ảnh nền tối, ánh vàng và tiêu đề ngắn |
| Cần sử dụng trên điện thoại | Chuyển lưới sản phẩm từ 3 xuống 2 cột; thu gọn bộ lọc trên màn hình nhỏ |

Các phong cách, bộ sưu tập, tên sản phẩm, giá và nhãn nổi bật là dữ liệu giả định phục vụ bài tập; không phải danh mục hay giá bán thật của Guerlain. Không sao chép ảnh chiến dịch hoặc mã nguồn của website tham khảo.

### 6.2. Thực hành và cải tiến trong Buổi 2

| Khu vực | Nội dung thực hiện | Kết quả |
| --- | --- | --- |
| Đường dẫn điều hướng | Thay cấu trúc đoạn văn bằng `nav`, `ol`, `li`; bổ sung `aria-current` | Làm rõ ý nghĩa điều hướng và xác định trang hiện tại |
| CSS cơ bản | Kiểm tra liên kết `style.css`, font chữ, màu chữ, màu nền và quy tắc hình ảnh | CSS được áp dụng và hình ảnh nằm trong khung chứa |
| Thẻ sản phẩm được chọn | Bổ sung class `product-card`; điều chỉnh margin, padding, border và border-radius | Thẻ sản phẩm có khoảng cách, đường viền và góc bo rõ ràng |
| Tên và giá sản phẩm | Định dạng nút tên sản phẩm, cỡ chữ và màu giá | Thông tin trên thẻ sản phẩm dễ quan sát hơn |
| Tiêu đề danh mục và số lượng sản phẩm | Sử dụng Flexbox với justify-content, align-items và gap | Hai thành phần được căn chỉnh trên cùng hàng |
| Danh sách sản phẩm | Thực hành CSS Grid, thử bố cục hai và ba cột, điều chỉnh gap | Danh sách hiển thị dạng lưới với khoảng cách giữa các sản phẩm |
| Nút tên sản phẩm | Bổ sung hover, transition và focus-visible | Có phản hồi khi rê chuột và khi điều hướng bằng bàn phím |
| Thông tin loại sản phẩm và dung tích | Tăng font-size từ 8px lên 12px trong media query max-width: 760px | Chữ dễ đọc hơn khi kiểm tra ở chiều rộng 390px |

Các thay đổi tập trung vào những khu vực đã chọn, tiếp tục sử dụng nội dung và danh sách sản phẩm từ Buổi 1.

### 6.3. Vấn đề đã tự điều chỉnh

- **Vấn đề:** Thông tin loại sản phẩm và dung tích khó đọc trên màn hình nhỏ.
- **Nguyên nhân:** Quy tắc `.product-type` trong media query `max-width: 760px` đặt cỡ chữ là `8px`.
- **Cách khắc phục:** Đổi giá trị thành `font-size: 12px;` trong tệp `style.css`.
- **Cách kiểm tra:** Lưu tệp trong VS Code, tải lại trang và kiểm tra tại chiều rộng 390px bằng DevTools.
- **Kết quả:** Quy tắc 12px được áp dụng, chữ rõ hơn và nội dung vẫn nằm trong thẻ sản phẩm.

### 6.4. Bảng kiểm thử

Kết quả dưới đây do sinh viên kiểm tra trên trình duyệt, trong phạm vi các khu vực đã thực hành.

| Nội dung kiểm tra | Kết quả | Ghi chú |
| --- | --- | --- |
| Trang HTML mở được | Đạt | Trang mở và hiển thị nội dung trên trình duyệt |
| CSS được áp dụng | Đạt | Font chữ, màu sắc, khoảng cách và bố cục hiển thị theo CSS |
| Hình ảnh hiển thị đúng | Đạt | Ảnh sản phẩm không bị méo hoặc vượt khung chứa |
| Liên kết hoạt động | Đạt | Các liên kết được kiểm tra dẫn đến đúng nội dung |
| Bố cục không bị tràn nghiêm trọng | Đạt | Khu vực được kiểm tra nằm trong khung màn hình |
| Hover/focus hoạt động | Đạt | Nút đổi màu khi rê chuột và có viền focus khi dùng phím Tab |
| Đã tự sửa ít nhất một vấn đề | Đạt | Tăng cỡ chữ thông tin sản phẩm từ 8px lên 12px, lưu tệp và kiểm tra lại |

Kết quả này không đồng nghĩa với việc đã kiểm thử toàn bộ website trên mọi thiết bị.

## 7. Công cụ AI và cách kiểm tra kết quả

### 7.1. Sử dụng AI trong Buổi 1

ChatGPT (Codex) hỗ trợ phân tích giao diện, đề xuất bộ lọc, xây dựng HTML/CSS/JavaScript, giải thích mã nguồn và chuẩn bị tài liệu. Công cụ Imagegen hỗ trợ tạo banner và hình ảnh sản phẩm.

Sinh viên lựa chọn phương án cải tiến, mở và xem giao diện, cung cấp hình minh chứng và phản hồi về phong cách, tiếng Việt, ảnh sản phẩm, thao tác xem chi tiết và banner. AI chỉnh sửa theo các phản hồi này.

Các kiểm tra mã nguồn được thực hiện với hỗ trợ của AI gồm cú pháp JavaScript, cấu trúc HTML, đường dẫn tài nguyên, ký tự trong phông và logic lọc. Các kiểm tra mã nguồn này không thay thế việc kiểm tra giao diện và thao tác trực tiếp trên trình duyệt.

### 7.2. Sử dụng AI trong Buổi 2

ChatGPT hỗ trợ:

- Giải thích cấu trúc HTML và cách sử dụng các phần tử có ngữ nghĩa.
- Hướng dẫn kiểm tra liên kết CSS.
- Giải thích CSS selector và Box Model.
- Đề xuất đoạn CSS cho khu vực thực hành Flexbox và CSS Grid.
- Hướng dẫn bổ sung hover, focus-visible và transition.
- Hỗ trợ xác định nguyên nhân cỡ chữ nhỏ và lỗi cú pháp CSS.
- Hướng dẫn sử dụng DevTools và tổng hợp nội dung README.

Sinh viên trực tiếp chỉnh sửa mã trong VS Code, thử các giá trị CSS, kiểm tra kết quả bằng chuột và bàn phím, chụp hình minh chứng và lưu các thay đổi vào mã nguồn.

Nhật ký sử dụng AI và các prompt được quản lý trong tệp `AI_USAGE.md`.

## 8. Đường dẫn dự án

- **GitHub repository:** https://github.com/chloenguynnn/ecommerce-ui-improvement
- **GitHub Pages:** https://chloenguynnn.github.io/ecommerce-ui-improvement/