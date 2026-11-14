/* Exercise 9.2 – DOM family relations

   Bước 2-5: gõ lần lượt trong Console để di chuyển trong cây DOM
       document.getElementById("first")
       document.getElementById("first").firstChild              -> #text (khoảng trắng)
       document.getElementById("first").firstChild.nextSibling  -> <h1 id="pageTitle">
       document.getElementById("first").parentNode              -> <div class="container"> */

// Bước 6: duyệt các nút con của <div id="stories"> và ghi ra Console
var stories = document.getElementById("stories");
var i;
for (i = 0; i < stories.childNodes.length; i++)
{
    var node = stories.childNodes[i];
    console.log("child " + i + " =" + node + " nodeType=" + node.nodeType);

    // Bước 7: chỉ tô nền cho nút KHÔNG phải text.
    // nodeType = 1 là phần tử HTML, nodeType = 3 là text (khoảng trắng giữa các thẻ)
    if (node.nodeType == 1) {
        node.style.backgroundColor = "#FFE393";
    }
}
