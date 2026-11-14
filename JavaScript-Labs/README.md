# JavaScript-Labs

Bài thực hành cá nhân Chương 4 (JavaScript), học phần **Phát triển ứng dụng TMĐT**, giảng viên TS Nguyễn Mạnh Tuấn.

## Thông tin sinh viên

| | |
|---|---|
| Họ và tên | Nguyễn Trần Bảo Nhi |
| Mã số sinh viên | 31241021234 |
| Lớp học phần | 26C1INF50902701 |
| GitHub | <https://github.com/chloenguynnn> |

## Mục tiêu

Hoàn thành 29 Exercise của ba bài Lab trong giáo trình *Fundamentals of Web Development* (Randy Connolly, Ricardo Hoar):

- nắm cú pháp nền tảng của JavaScript và cách đưa script vào trang HTML;
- dùng DOM và sự kiện để trang web phản hồi thao tác của người dùng;
- dùng jQuery để chọn phần tử, xử lý sự kiện, tạo hiệu ứng và gửi GET request;
- tổ chức mã nguồn trên GitHub và triển khai bằng GitHub Pages.

## Đường dẫn GitHub Pages

| Trang | Đường dẫn |
|---|---|
| Trang chủ | <https://chloenguynnn.github.io/ecommerce-ui-improvement/JavaScript-Labs/> |
| Lab 08 | <https://chloenguynnn.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab08/> |
| Lab 09 | <https://chloenguynnn.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab09/> |
| Lab 10 | <https://chloenguynnn.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab10/> |

## Cấu trúc thư mục

```text
JavaScript-Labs/
├── index.html            Trang chủ: thông tin cá nhân, giới thiệu, liên kết 3 Lab, kiến thức, tự đánh giá
├── README.md
├── css/
│   ├── style.css         Giao diện trang chủ và trang danh sách Exercise
│   └── fonts.css         Khai báo font chữ
├── js/
│   ├── main.js           Tương tác của trang chủ (menu, tab, tô sáng mục đang xem)
│   └── labnav.js         Nút quay lại dùng chung cho các trang Exercise
├── fonts/                Font Big Shoulders Display và Be Vietnam Pro
├── images/               Ảnh đại diện, favicon
├── vendor/               Bootstrap 3.3.5 và Font Awesome 4.4.0 (các trang mẫu của Lab dùng)
├── Lab08/
│   ├── index.html        Danh sách Exercise 8.1 đến 8.11
│   ├── exercise01.html … exercise11.html
│   ├── hello.js          File ngoài của Exercise 8.3 và 8.4
│   ├── js/               hello.js (8.5), exercise06.js … exercise11.js
│   ├── css/  flags/
├── Lab09/
│   ├── index.html        Danh sách Exercise 9.1 đến 9.8
│   ├── exercise01.html … exercise08.html
│   ├── js/               exercise01.js … exercise08.js
│   ├── css/  images/
└── Lab10/
    ├── index.html        Danh sách Exercise 10.1 đến 10.10
    ├── exercise01.html … exercise10.html
    ├── js/               exercise01.js … exercise10.js, jquery-3.1.1.min.js
    ├── data/cities.json  Dữ liệu cho Exercise 10.9 và 10.10
    ├── css/  images/
```

Mỗi Exercise gồm một trang `exerciseNN.html` và file `js/exerciseNN.js` cùng số. Các bước trung gian của từng bài được giữ lại dưới dạng chú thích trong file JavaScript.

## Nội dung từng Lab

### Lab 08 – JavaScript 1: Language Foundations

| Exercise | Nội dung | Trang |
|---|---|---|
| 8.1 | Enabling/Disabling JavaScript | `Lab08/exercise01.html` |
| 8.2 | Embedded JavaScript | `Lab08/exercise02.html` |
| 8.3 | External JavaScript | `Lab08/exercise03.html` |
| 8.4 | Using NoScript | `Lab08/exercise04.html` |
| 8.5 | Using the Browser Console | `Lab08/exercise05.html` |
| 8.6 | Using Built-in JavaScript Objects | `Lab08/exercise06.html` |
| 8.7 | Arrays | `Lab08/exercise07.html` |
| 8.8 | JavaScript Functions | `Lab08/exercise08.html` |
| 8.9 | Functions as Objects | `Lab08/exercise09.html` |
| 8.10 | Creating JavaScript Objects | `Lab08/exercise10.html` |
| 8.11 | Arrays of Objects | `Lab08/exercise11.html` |

### Lab 09 – JavaScript 2: DOM and Events

| Exercise | Nội dung | Trang |
|---|---|---|
| 9.1 | Basic DOM Selection | `Lab09/exercise01.html` |
| 9.2 | DOM Family Relations | `Lab09/exercise02.html` |
| 9.3 | Modifying the DOM | `Lab09/exercise03.html` |
| 9.4 | Simple Event Handling | `Lab09/exercise04.html` |
| 9.5 | Responding to Load Events | `Lab09/exercise05.html` |
| 9.6 | Debugging Events | `Lab09/exercise06.html` |
| 9.7 | Working with Forms | `Lab09/exercise07.html` |
| 9.8 | Form Validation | `Lab09/exercise08.html` |

### Lab 10 – JavaScript 3: jQuery

| Exercise | Nội dung | Trang |
|---|---|---|
| 10.1 | Set Up jQuery | `Lab10/exercise01.html` |
| 10.2 | Basic Selectors | `Lab10/exercise02.html` |
| 10.3 | Advanced Selectors | `Lab10/exercise03.html` |
| 10.4 | jQuery Listeners | `Lab10/exercise04.html` |
| 10.5 | Inserting DOM Elements | `Lab10/exercise05.html` |
| 10.6 | Simple jQuery Animation | `Lab10/exercise06.html` |
| 10.7 | More jQuery Animation | `Lab10/exercise07.html` |
| 10.8 | Complex Animations | `Lab10/exercise08.html` |
| 10.9 | GET Requests | `Lab10/exercise09.html` |
| 10.10 | jqXHR Handling | `Lab10/exercise10.html` |

## Hướng dẫn truy cập

1. Mở trang chủ GitHub Pages ở bảng trên.
2. Ở mục **Ba bài Lab**, bấm vào Lab muốn xem để mở danh sách Exercise.
3. Bấm vào từng ô Exercise để chạy bài. Góc dưới bên phải mỗi bài có nút quay lại danh sách và về trang chủ.
4. Một số bài cần mở DevTools (F12) để xem kết quả: 8.5, 8.8, 9.1, 9.2 (tab Console) và 9.6 (tab Sources).

Chạy trên máy: mở thư mục `JavaScript-Labs` bằng VS Code rồi dùng Live Server. Exercise 10.9 và 10.10 gửi GET request nên cần chạy qua máy chủ (Live Server hoặc GitHub Pages), mở trực tiếp bằng `file://` sẽ bị trình duyệt chặn.

## Ghi chú kỹ thuật

- **jQuery**: nạp từ CDN `https://code.jquery.com/jquery-3.1.1.min.js`; nếu CDN không tải được, trang tự nạp bản `Lab10/js/jquery-3.1.1.min.js`.
- **Exercise 10.9 và 10.10**: dịch vụ mẫu của giáo trình (`http://www.randyconnolly.com/funwebdev/services/travel/cities.php`) chỉ chạy HTTP nên bị trình duyệt chặn trên GitHub Pages (HTTPS). Bài dùng file `Lab10/data/cities.json` cùng cấu trúc; lời gọi vẫn là GET request bất đồng bộ bằng `$.get()`.
- **Bootstrap và Font Awesome**: lưu trong `vendor/` thay cho CDN của giáo trình để các trang mẫu luôn hiển thị đúng.
