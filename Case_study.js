class ProductList {
    name;
    image;

    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image
    }
    setName(name){
        this.name = name
    }
    setImage(image){
        this.image= image;
    }
}
let product1 = new ProductList("Bốt đính đá","botdinhda.jpg")
let product2 = new ProductList("Dép pha lê","phale.jpg")
let product3 = new ProductList("Dép kim tuyến hồng  ","kimtuyenhong.jpg")
let arrProduct = [product1,product2,product3]

function display (data) {
    let content = ""
    for (let i = 0; i < data.length; i++) {
        content += "<div class=' text-center'>"
        content += "<a href='#'><img src=" + data[i].image + "    ></a>"
        content += "<p >" + data[i].name + "</p>" + "<br>"
        content += "<button type='button' class='btn btn-secondary' onclick='viewProduct(" + i + ")'>View</button>"
        content +=  '<button class="btn btn-success" onclick="deleteProduct('+ i +')">Xóa</button><button class="btn btn-success" onclick="editProduct('+ i +')">Sửa</button></div>'
    }
    console.log(content)
    document.getElementById("display").innerHTML = content;
}
window.onload = init
function init() {
    display(arrProduct)
}
function deleteProduct(i) {
    let warring = confirm("Bạn có muốn xóa sản phẩm " +arrProduct[i].name+ " ra khỏi danh sách của bạn không?")
    if (warring==true) {
        arrProduct.splice(i,1)
    }
    display(arrProduct)
}

function editProduct(i) {
    let editName = prompt("Thay đổi tên sản phẩm " + arrProduct[i].name + " thành")
    let editJmg = prompt("Thay link ảnh sản phẩm " + arrProduct[i].image + " thành")
    if (editName!=="" ) {
        arrProduct[i].name = editName;
    }
    if (editJmg!=="" ) {
        arrProduct[i].image = editJmg;
    }
    display(arrProduct);
}

function viewProduct(i) {
    document.getElementById("display").innerHTML =
        "<br><h3>Sản phẩm thứ " + (parseInt(i) + 1) + " là: " +arrProduct[i].name + "</h3>" +
        "<br><button style='width: 100px' class='btn btn-primary' onclick='display(arrProduct)'>Trở lại</button>"

}
function add1(){
  let name1 =   document.getElementById("addname").value  ;
   let jpg1 =   document.getElementById("addjpg").value ;
  let product123 = new ProductList (name1,jpg1);
  arrProduct.push(product123);
    display (arrProduct)
}
function login(){
    let a = document.getElementById("loginid").value;
    let b = document.getElementById("pass").value;
    if(a=== "admin" && b== 12345){
      window.location.href ="Case_study.html"
    }
    else { alert("Thông báo: Bạn đã thử quá nhiều lần xuất hiện khi FBI nghi ngờ rằng bạn không phải là chủ nhận của tài khoản và có thể thực hiện hành vi bất chính đối với tài khoản này sau nhiều lần đăng nhập sai.")
    }
}