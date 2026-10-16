# Đưa bài lên GitHub bằng trình duyệt

## 1. Chuẩn bị

Giải nén bộ bài mới. Mở thư mục có `index.html`, `style.css`, `script.js`, `README.md`, `AI_USAGE.md` và `assets/`.

Cấu trúc trong đề là gợi ý. Không cần đổi `assets` thành `images` hoặc chuyển CSS sang thư mục khác; làm vậy phải sửa các đường dẫn tương ứng.

## 2. Tạo repository công khai

- Đăng nhập https://github.com/ rồi mở https://github.com/new.
- Repository name: `ecommerce-ui-improvement`.
- Description: `Cải tiến giao diện bộ lọc nước hoa – bài tập HTML5/CSS3.`
- Chọn **Public**. Không cần tạo sẵn README vì bộ bài đã có.
- Nhấn **Create repository**.

## 3. Tải mã nguồn

- Trong repository trống, chọn **uploading an existing file**; nếu đã có file, chọn **Add file → Upload files**.
- Mở thư mục đã giải nén, chọn toàn bộ nội dung bên trong rồi kéo vào vùng upload, bao gồm thư mục `assets`.
- Đặt thông điệp commit: `Add fragrance UI, assets and assignment documentation`.
- Lưu bằng **Commit changes**; nếu có lựa chọn nhánh, chọn nhánh `main` cho repository bài tập mới.

**Không tải mỗi file ZIP lên. Không kéo cả thư mục cha `guerlain-fragrance` vào repository:** `index.html` phải nằm ngay trang đầu repository, cùng cấp với README và thư mục assets.

Đối chiếu tài liệu chính thức: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## 4. Bật GitHub Pages

Trong repository: **Settings → Pages**.

| Thiết lập | Chọn |
| --- | --- |
| Source | Deploy from a branch |
| Branch | main |
| Folder | / (root) |

Nhấn **Save**, chờ triển khai rồi mở đường dẫn được GitHub hiển thị tại trang Pages. Nếu repository dùng tên nhánh khác, chọn nhánh thực tế chứa `index.html`.

Đối chiếu tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 5. Trước khi nộp

- Repository có nhãn **Public**.
- Các file và thư mục ảnh/phông đã được tải đủ.
- README hiển thị ở trang chính; AI_USAGE.md mở đọc được.
- Mở website Pages, kiểm tra ảnh, phông, bộ lọc và bấm ảnh xem chi tiết.
- Lưu hai đường dẫn: **repository để xem code** và **Pages để xem giao diện**.

GitHub Pages là phần triển khai thêm theo đề; repository Public là yêu cầu bắt buộc. Có thể nộp cả hai link để giảng viên xem thuận tiện.
