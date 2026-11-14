/* Exercise 8.9 – Functions as objects: tính tiền giỏ hàng có thuế */

var isCanadian = true;

/* Bước 1: ba hàm riêng biệt
function taxRate() {
  // remember : variables defined outside of a function have global scope
  if (isCanadian) {
      return 0.05;
  } else {
      return 0.0;
  }
}
function calculateTax(amount) {
  return amount * taxRate();
}
function calculateTotal(price, quantity) {
  return (price * quantity) + calculateTax(price * quantity);
}
*/

/* Bước 3: lồng hàm taxRate() vào trong calculateTax()
function calculateTax(amount) {
    return amount * taxRate();

    function taxRate() {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    }
}
*/

/* Bước 4-5: gán hàm (ẩn danh) cho một biến rồi gọi qua biến đó
function calculateTax(amount) {
    // define an anonymous function as an object
    var tax = function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    };
    // now invoke the function using the object
    return amount * tax();
}
*/

// Bước 6: hàm là đối tượng nên có thể truyền làm THAM SỐ cho hàm khác
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    // tham số thứ hai là một hàm ẩn danh trả về thuế suất
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
