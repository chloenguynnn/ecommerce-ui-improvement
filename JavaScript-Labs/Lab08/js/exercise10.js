/* Exercise 8.10 – Creating JavaScript objects: 4 cách tạo đối tượng đơn hàng */

/* Cách 1 (bước 1-4): tạo object rỗng rồi thêm thuộc tính bằng dấu chấm
var order = new Object();      // hoặc: var order = {};
order.product = "Self Portrait in a Straw Hat";
order.price = 15.0;
order.quantity = 2;
order.total = function() { return this.price * this.quantity; };

document.write("Product=" + order.product);
document.write("<br>Price=" + order.price);
document.write("<br>Quantity=" + order.quantity);
document.write("<br>Total=" + order.total());
// Bước 3: order.total (không có ngoặc) sẽ in ra nội dung hàm chứ không chạy hàm
*/

/* Cách 2 (bước 5): thêm thuộc tính bằng dấu ngoặc vuông
order["product"] = "Self Portrait in a Straw Hat";
order["price"] = 15.0;
order["quantity"] = 2;
order["total"] = function() { return this.price * this.quantity; };
*/

/* Cách 3 (bước 6): object literal notation
var order = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function() { return this.price * this.quantity; }
};
*/

// Cách 4 (bước 7-10): constructor function – tạo được nhiều đối tượng cùng kiểu
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() { return this.price * this.quantity; },

    // phương thức tự in thông tin của chính đối tượng
    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    }
}

// Bước 8 và 11: tạo hai đối tượng từ constructor rồi in ra
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

/* Bước 9: in từng thuộc tính (đã thay bằng phương thức output ở bước 10)
document.write("<p>Product=" + example1.product);
document.write("<br>Price=" + example1.price);
document.write("<br>Quantity=" + example1.quantity);
document.write("<br>Total=" + example1.total());
*/

example1.output();
example2.output();
