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

## Buổi 2 – Thực hành HTML5 và CSS3

### Công cụ sử dụng
ChatGPT.

### Các prompt đã sử dụng
Các prompt dưới đây được biên tập lại từ nội dung trao đổi thực tế với ChatGPT, giữ nguyên mục đích và yêu cầu chính.

### Prompt 1 – Khảo sát mã nguồn và xác định hướng cải thiện

Tôi đang thực hiện bài tập cá nhân môn Phát triển ứng dụng WEB/TMĐT. Trong Buổi 1, tôi đã xây dựng giao diện danh mục nước hoa dựa trên khảo sát website Guerlain.

Dựa trên mã nguồn hiện có, hãy:
1. Xác định các thành phần HTML đã được sử dụng.
2. Chỉ ra các thành phần còn thiếu hoặc chưa hợp lý.
3. Nêu ba vấn đề về cấu trúc HTML hoặc trình bày.
4. Đề xuất cách cải thiện bằng kiến thức HTML5 và CSS3 cơ bản.
5. Giải thích thứ tự nên thực hiện các cải tiến.

Chưa viết lại toàn bộ mã nguồn hoặc tạo website mới. Hãy giúp tôi hiểu mã hiện tại trước khi chỉnh sửa.

### Prompt 2 – Cải thiện cấu trúc HTML5

Tôi muốn cải thiện cấu trúc HTML của website từ Buổi 1.

Hãy kiểm tra:
1. Các phần tử HTML đang được sử dụng.
2. Cách sử dụng header, nav, main, section, article và footer.
3. Thứ bậc tiêu đề h1, h2, h3.
4. Cách sử dụng img, thuộc tính alt và liên kết a.
5. Các thẻ chưa đóng hoặc lồng nhau chưa hợp lý.
6. Những thay đổi phù hợp với nội dung hiện có.

Phân biệt lỗi cần sửa với đề xuất cải thiện. Không thêm phần tử chỉ để kéo dài mã nguồn và không viết lại toàn bộ website. Giải thích lý do của từng thay đổi và vai trò của ít nhất ba phần tử HTML.

### Prompt 3 – Kiểm tra liên kết CSS và định dạng cơ bản

Website của tôi đã có tệp index.html và style.css. Tôi cung cấp cấu trúc thư mục và mã HTML hiện tại.

Hãy hướng dẫn:
1. Kiểm tra cách liên kết tệp CSS với HTML.
2. Định dạng font chữ, màu chữ và màu nền.
3. Thiết lập margin và các quy tắc cơ bản cho body.
4. Đảm bảo hình ảnh không vượt quá chiều rộng phần tử chứa.
5. Kiểm tra đường dẫn CSS bằng trình duyệt.

Giữ nguyên các tệp đang có nếu phù hợp. Chỉ đề xuất CSS cần thiết, không sử dụng Bootstrap hoặc Tailwind CSS. Giải thích từng nhóm thuộc tính và cách xác nhận CSS đã được áp dụng.

### Prompt 4 – Thực hành CSS selector và Box Model

Tôi muốn thực hành CSS selector và Box Model trên một thẻ sản phẩm hiện có.

Hãy hướng dẫn:
1. Sử dụng element selector và class selector.
2. Sử dụng descendant selector khi phù hợp.
3. Điều chỉnh margin, padding và border.
4. Sử dụng border-radius để bo góc.
5. Định dạng tên và giá sản phẩm.
6. Định dạng phần tử thao tác hiện có thành nút đơn giản.

Giải thích sự khác nhau giữa margin và padding, cùng tác dụng của box-sizing: border-box. Chỉ đưa ra phần CSS cần thiết, giữ nguyên nội dung sản phẩm và không tạo lại toàn bộ HTML.

### Prompt 5 – Thực hành Flexbox

Tôi muốn thực hành Flexbox trên một khu vực nhỏ của website thương mại điện tử.

Dựa trên HTML hiện có, hãy:
1. Xác định phần tử cha cần sử dụng display: flex.
2. Căn chỉnh các phần tử bằng justify-content.
3. Căn chỉnh theo trục còn lại bằng align-items.
4. Tạo khoảng cách bằng gap.
5. Giải thích kết quả khi thay đổi các giá trị của justify-content.

Đưa ra đoạn CSS ngắn phù hợp với khu vực được chọn. Giải thích từng thuộc tính và kết quả mong đợi. Không sử dụng framework hoặc thiết kế lại toàn bộ giao diện.

### Prompt 6 – Thực hành CSS Grid

Tôi đã có danh sách sản phẩm bằng HTML và muốn thực hành CSS Grid.

Hãy hướng dẫn:
1. Bố trí danh sách thành hai cột.
2. Điều chỉnh khoảng cách giữa các sản phẩm.
3. Giữ hình ảnh hiển thị đúng tỷ lệ.
4. Thay đổi thành ba cột để quan sát sự khác biệt.
5. Giải thích display: grid, grid-template-columns, repeat và gap.
6. Giải thích tác dụng của object-fit: cover.

Chỉ viết CSS cần thiết cho danh sách hiện có. Không sử dụng Bootstrap hoặc Tailwind CSS. Hướng dẫn cách kiểm tra kết quả trên trình duyệt.

### Prompt 7 – Bổ sung hiệu ứng hover và focus

Tôi muốn bổ sung phản hồi trực quan cho một nút hoặc liên kết trên website.

Hãy hướng dẫn:
1. Tạo hiệu ứng hover nhẹ.
2. Sử dụng transition để chuyển đổi mượt.
3. Bổ sung focus-visible để hỗ trợ điều hướng bằng bàn phím.
4. Giữ màu chữ và màu nền dễ nhìn.
5. Tránh làm thay đổi bố cục khi tương tác.

Chỉ đưa ra phần CSS cần thêm hoặc sửa. Giải thích sự khác nhau giữa hover và focus, đồng thời hướng dẫn kiểm tra bằng chuột và phím Tab.

### Prompt 8 – Kiểm tra và sửa vấn đề trên màn hình nhỏ

Tôi đang kiểm tra giao diện ở chiều rộng 390px bằng DevTools. Phần thông tin loại sản phẩm và dung tích hiển thị khá nhỏ.

Dựa trên ảnh chụp và quy tắc CSS đang áp dụng, hãy:
1. Xác định nguyên nhân có thể khiến chữ nhỏ.
2. Chỉ ra selector và thuộc tính cần kiểm tra.
3. Hướng dẫn thử tăng cỡ chữ từ 8px lên 12px.
4. Giải thích trường hợp thuộc tính bị gạch ngang hoặc có cảnh báo.
5. Hướng dẫn lưu thay đổi vào tệp style.css trong VS Code.
6. Hướng dẫn tải lại trang để kiểm tra kết quả.

Phân biệt nguyên nhân đã xác định với giả thuyết cần kiểm tra. Chỉ sửa khu vực liên quan, không viết lại toàn bộ mã nguồn.

### Prompt 9 – Cập nhật README và đưa bài lên GitHub

Tôi đã có README.md và repository từ Buổi 1. Tôi muốn cập nhật tài liệu để bổ sung nội dung thực hành Buổi 2.

Dựa trên README hiện tại và những thay đổi đã thực hiện, hãy viết lại README gồm:
1. Giới thiệu bài tập và thông tin sinh viên.
2. Website tham khảo và khu vực cải tiến.
3. Chức năng, công nghệ và cấu trúc thư mục.
4. Hướng dẫn chạy website.
5. Những cải tiến của Buổi 1 và nội dung thực hành Buổi 2.
6. Bảng kiểm thử theo kết quả tôi đã xác nhận.
7. Công cụ AI đã sử dụng và cách kiểm tra kết quả.
8. Đường dẫn repository và GitHub Pages.

Giữ lại thông tin Buổi 1 còn phù hợp, không tự bịa chức năng hoặc kết quả kiểm thử. Hướng dẫn tôi lưu tệp, commit, push và kiểm tra bản cập nhật trên GitHub.

### Các yêu cầu hỗ trợ bổ sung

Trong quá trình thực hiện, tôi còn yêu cầu ChatGPT:
- Giải thích yêu cầu của từng bước bằng cách diễn đạt dễ hiểu.
- Hướng dẫn chọn khu vực cần chụp để làm minh chứng.
- Hướng dẫn mở và sử dụng DevTools khi phím F12 không hoạt động.
- Giải thích cách chọn đúng phần tử để xem CSS.
- Phân biệt việc thử CSS trong DevTools với việc lưu mã nguồn trong VS Code.
- Hỗ trợ phát hiện và sửa lỗi cú pháp font-size.
- Hỗ trợ trình bày bảng kiểm thử và chú thích hình cho báo cáo.

### Cách sử dụng kết quả
Đọc giải thích, đối chiếu với mã nguồn hiện có và chỉnh sửa
từng khu vực trong VS Code.

### Kiểm tra và điều chỉnh
Kiểm tra giao diện trên trình duyệt và DevTools.
Điều chỉnh cỡ chữ thông tin loại sản phẩm và dung tích
từ 8px lên 12px trên màn hình nhỏ, lưu tệp và tải lại để xác nhận.
---

## Chương 5–6: CSS nâng cao (Lab 07) và Advance Front-end Nhóm 2

### Công cụ AI
- **Claude (Anthropic):** đọc đề bài từ Google Drive, viết mã nguồn 19 Exercise Lab 07, trang chủ `CSS-NangCao/index.html`, ba bài Nhóm 2 (e-commerce, jQuery LMS, Flappy Bird), README và khung file Word báo cáo.

### Prompt đã sử dụng
> làm btvn này thì t nên làm bài nào, làm nhóm 1 nhóm 2 nha
>
> ok nhóm 1 nhóm 2, giờ m làm vào github này đi https://github.com/chloenguynnn/ecommerce-ui-improvement
>
> nè thầy chỉ cho z thôi đâu có file zip gì đâu. m làm đi, rồi làm word cho t luôn

### Lưu ý về kết quả
- Không có file ZIP mã nguồn gốc của Lab 07, nên các Exercise được viết lại theo nội dung từng Exercise trong đề (`BaiTap_CaNhan_CSS_NangCao.pdf`); 7.13 làm tiếp trên file 7.12 theo đúng hướng dẫn.
- Không có file hướng dẫn gốc của Flappy Bird, nên game được viết mới theo các yêu cầu trong `BaiThucHanh_Responsive_JQuery.pdf`.
- Bài jQuery LMS cần chạy trên trang LMS thật (đã đăng nhập) để có kết quả thật; trang `jquery-lms/index.html` chỉ là bản mô phỏng.
- Ảnh minh chứng trong file Word do sinh viên tự chụp khi kiểm tra bài.
