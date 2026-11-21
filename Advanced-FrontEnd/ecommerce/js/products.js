/* products.js – dữ liệu mẫu của cửa hàng nước hoa L'Atelier Parfum
   discount: phần trăm giảm giá (0 = không giảm)
   tag: "new" | "best" | "" – hiển thị ở góc phải trên ảnh
   stock: số lượng còn trong kho, capacity: số lượng nhập về (để tính % thanh trạng thái kho) */
var PRODUCTS = [
  {
    id: "rose", name: "Rose de Minuit", collection: "Signature", category: "nu",
    type: "Eau de parfum", size: "50 ml", notes: "Hoa hồng · Xạ hương", style: "Lãng mạn & quyến rũ",
    price: 3450000, discount: 15, tag: "best", rating: 4.5, reviews: 128, stock: 12, capacity: 80,
    desc: "Hoa hồng Damask nở về đêm, quyện cùng xạ hương trắng và chút hạt tiêu hồng. Mùi hương ấm, mềm và lưu lại lâu trên da, hợp cho buổi tối hoặc những dịp đặc biệt."
  },
  {
    id: "ambre", name: "Ambre Impérial", collection: "Signature", category: "unisex",
    type: "Eau de parfum", size: "50 ml", notes: "Hổ phách · Vanilla", style: "Sang trọng & nổi bật",
    price: 4250000, discount: 0, tag: "new", rating: 4, reviews: 36, stock: 54, capacity: 60,
    desc: "Hổ phách và vanilla Madagascar làm nền cho nhựa benzoin và gỗ đàn hương. Một mùi hương đậm, ấm, để lại dấu ấn rõ ràng trong những ngày se lạnh."
  },
  {
    id: "bois", name: "Bois Serein", collection: "Signature", category: "nam",
    type: "Eau de parfum", size: "50 ml", notes: "Đàn hương · Cỏ hương bài", style: "Thanh lịch & tinh tế",
    price: 3150000, discount: 10, tag: "", rating: 4.5, reviews: 74, stock: 33, capacity: 70,
    desc: "Gỗ đàn hương, cỏ hương bài và chút cam bergamot mở đầu. Mùi gỗ khô, sạch và điềm tĩnh, dễ dùng cho môi trường công sở."
  },
  {
    id: "fleur", name: "Fleur de Soie", collection: "Les Jardins", category: "nu",
    type: "Eau de toilette", size: "50 ml", notes: "Hoa trắng · Quả lê", style: "Nhẹ nhàng & tự nhiên",
    price: 2450000, discount: 20, tag: "best", rating: 5, reviews: 212, stock: 6, capacity: 100,
    desc: "Hoa nhài, hoa cam và quả lê chín tạo cảm giác mềm mại như lụa. Nồng độ eau de toilette nhẹ, thích hợp dùng hằng ngày."
  },
  {
    id: "iris", name: "Éclat d’Iris", collection: "Signature", category: "nu",
    type: "Eau de parfum", size: "50 ml", notes: "Hoa diên vĩ · Gỗ tuyết tùng", style: "Thanh lịch & tinh tế",
    price: 2950000, discount: 0, tag: "new", rating: 4, reviews: 19, stock: 40, capacity: 50,
    desc: "Rễ diên vĩ phấn mịn trên nền gỗ tuyết tùng và xạ hương. Mùi hương tinh tế, kín đáo, hợp với phong cách tối giản."
  },
  {
    id: "tea", name: "Jardin de Thé", collection: "Les Jardins", category: "unisex",
    type: "Eau de toilette", size: "50 ml", notes: "Trà xanh · Cam bergamot", style: "Nhẹ nhàng & tự nhiên",
    price: 2250000, discount: 25, tag: "", rating: 3.5, reviews: 51, stock: 21, capacity: 60,
    desc: "Trà xanh, lá bạc hà và cam bergamot tươi mát. Một mùi hương sảng khoái cho ngày hè và những buổi dã ngoại."
  }
];

var CATEGORIES = [
  { id: "all", name: "Tất cả sản phẩm" },
  { id: "nu", name: "Nước hoa nữ" },
  { id: "nam", name: "Nước hoa nam" },
  { id: "unisex", name: "Unisex" }
];
