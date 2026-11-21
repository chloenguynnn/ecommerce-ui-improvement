# CSS-NangCao – Lab 07: Advanced CSS – Layout

Bài thực hành cá nhân Chương 5 (Advanced CSS – Layout), học phần **Phát triển ứng dụng TMĐT**, giảng viên TS Nguyễn Mạnh Tuấn.

## Thông tin sinh viên

| | |
|---|---|
| Họ và tên | Nguyễn Trần Bảo Nhi |
| Mã số sinh viên | 31241021234 |
| Lớp học phần | 26C1INF50902701 |
| GitHub | <https://github.com/chloenguynnn> |

## Mục tiêu

Hoàn thành 19 Exercise của Lab 07 trong giáo trình *Fundamentals of Web Development* (Randy Connolly, Ricardo Hoar):

- điều khiển document flow và đổi cách hiển thị bằng `display`;
- định vị phần tử bằng `position: relative` / `absolute` và xếp lớp bằng `z-index`;
- bố trí phần tử bằng `float`, `clear`; dựng bố cục hai cột, ba cột;
- thiết kế responsive bằng media queries và viewport;
- tạo hiệu ứng bằng transforms, transitions, filters, animations;
- dùng Bootstrap grid system và các thành phần giao diện có sẵn.

## Đường dẫn GitHub Pages

| Trang | Đường dẫn |
|---|---|
| Trang chủ CSS-NangCao | <https://chloenguynnn.github.io/ecommerce-ui-improvement/CSS-NangCao/> |
| Danh sách Exercise Lab 07 | <https://chloenguynnn.github.io/ecommerce-ui-improvement/CSS-NangCao/Lab07/> |

## Cấu trúc thư mục

```text
CSS-NangCao/
├── index.html                 Trang chủ: thông tin cá nhân, giới thiệu, liên kết Exercise, kiến thức, tự đánh giá
├── README.md
├── css/                       style.css, fonts.css – giao diện trang chủ và trang danh sách
├── fonts/                     Font chữ lưu cục bộ (SIL Open Font License)
├── images/                    avatar.jpg, favicon.svg
├── js/
│   ├── main.js                Menu điện thoại, tab "Kiến thức đã học"
│   └── labnav.js              Nút nổi quay lại danh sách / trang chủ trên mỗi Exercise
└── Lab07/
    ├── index.html             Danh sách 19 Exercise theo 5 nhóm
    ├── lab07-exercise01.html … lab07-exercise19.html   (7.13 dùng chung file với 7.12)
    ├── css/
    │   ├── lab07.css          Định dạng chung cho các trang Exercise
    │   ├── lab07-exercise01.css … lab07-exercise19.css
    │   ├── lab07-exercise12-desktop.css   (media="screen and (min-width: 481px)")
    │   └── lab07-exercise12-mobile.css    (media="screen and (max-width: 480px)")
    ├── bootstrap/             Bootstrap 3.4.1 (css, js, fonts) + jQuery cho Exercise 7.19
    └── images/                Ảnh dùng trong các Exercise
```

## Nội dung các nhóm Exercise

| Nhóm | Exercise | Nội dung |
|---|---|---|
| 1 | 7.1 – 7.4 | Document flow, `display`, relative/absolute positioning, `z-index` |
| 2 | 7.5 – 7.9 | `float`, float trong container, nhiều phần tử float, `clear`, caption chồng lên ảnh |
| 3 | 7.10 – 7.13 | Bố cục hai cột (float), ba cột (positioning), media queries desktop/mobile, viewport và menu dropdown |
| 4 | 7.14 – 7.18 | `transform`, `transition`, `filter`, `@keyframes` animation |
| 5 | 7.19 | Bootstrap: navbar, jumbotron, grid, nested columns, panel, list-group, button |

Exercise 7.13 không có file HTML riêng: theo đề, viewport và menu dropdown được bổ sung trực tiếp vào bộ file của Exercise 7.12.

## Cách xem bài

1. Mở trang chủ CSS-NangCao trên GitHub Pages (đường dẫn ở trên), hoặc mở `CSS-NangCao/index.html` trên máy.
2. Bấm **Mở Lab 07** hoặc một nhóm Exercise để vào trang danh sách.
3. Bấm vào ô Exercise để mở bài. Mỗi trang có một ô ghi chú giải thích nội dung và nút nổi ở góc phải dưới để quay lại.
4. Với 7.7, 7.12, 7.13 và 7.19: thu nhỏ/kéo rộng cửa sổ (hoặc bật chế độ điện thoại trong DevTools) để xem bố cục thay đổi.
5. Với 7.4, 7.15, 7.16, 7.17: rê chuột lên phần tử để xem hiệu ứng.
