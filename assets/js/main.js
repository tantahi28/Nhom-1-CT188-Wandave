//Nguyen Minh Tan 
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
//######################## Navigation mobile########################
var menuAction = $('.menu-action');
var navMobile = $('.header__nav--mobile');
var buttonClose = $('#btn-close');
var overlaySite = $('#overlay-site');
menuAction.onclick = function() {
  navMobile.classList.add('show');
  overlaySite.classList.add('show');
}
buttonClose.onclick = function() {
  navMobile.classList.remove('show');
  overlaySite.classList.remove('show');
}


// ####################### Search #############################
var searchBlock = $('.header__search-dropdown');
var actionSearch = $('.action-search');
actionSearch.onclick = function() {
  searchBlock.classList.toggle('show');
}
var searchForm = $('.header__search-form');
var searchInput = $('.header__search-input');

searchForm.onsubmit = function(){
	if (searchInput.value.length == 0){
    alert("Hãy nhập từ khóa!!");
		return false;
  }
}


//############################ Back to top ################################

var backtoTop = $('#wd-up');

window.addEventListener('scroll' , function(){
  if(this.window.pageYOffset > 300) {
    backtoTop.classList.add('show')
  } else {
    backtoTop.classList.remove('show')
  }
})

backtoTop.onclick = function() {
  window.scrollTo(0, 0); 
};

//########################## Form validation ####################################
// var formRegister = $('.main__register-form');
// formRegister.onsubmit = function() {
//   return frmValidate5(this);
// }
function frmValidate5(form) {
	let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (form.querySelector('input[name="email"]') &&
		emailReg.test(form.querySelector('input[name="email"]').value) == false){ 
			alert("Hãy thông tin đúng");
      return false;
    }

	if (form.querySelector('input[name="password"]') && 
		form.querySelector('input[name="password"]').value.length < 8){
      alert("Hãy thông tin đúng");
			return false;
    } 

	if (form.querySelector('input[name="password2"]') && 
		form.querySelector('input[name="password2"]').value.length < 8){
      alert("Hãy thông tin đúng");
			return false;
    } 

	if (form.querySelector('input[name="name"]') && 
		form.querySelector('input[name="name"]').value.length < 4) {
      alert("Hãy thông tin đúng");
			return false;
    } 

	if (form.querySelector('input[name="content"]') && 
		form.querySelector('input[name="content"]').value.length < 10){
      alert("Hãy thông tin đúng");
			return false;
    } 

	return true;
}
//##################### Cart #######################


var itemList = {
  "sp001":{ 
      "name":"Dưa lưới",
      "price":100000,
      "photo":"../assets/img/dua-luoi.webp"
  },
  "sp002":{ 
      "name":"Dâu tây",
      "price":150000,
      "photo":"../assets/img/dau_tay_da_lat.webp"
  },
  "sp003":{ 
      "name":"Bắp",
      "price":10000,
      "photo":"../assets/img/bap.webp"
  },
  "sp004":{ 
      "name":"Bí đỏ",
      "price":25000,
      "photo":"../assets/img/bi_do.webp"
  },
  "sp005":{ 
      "name":"Đậu bắp",
      "price":25000,
      "photo":"../assets/img/dau_bap.webp"
  },
  "sp006":{ 
      "name":"Cà chua",
      "price":30000,
      "photo":"../assets/img/ca_chua.webp"
  },
  "sp007":{ 
      "name":"Ổi xanh",
      "price":15000,
      "photo":"../assets/img/oi_xanh.webp"
  },
  "sp008":{ 
      "name":"Bí xanh",
      "price":25000,
      "photo":"../assets/img/bi_xanh.webp"
  },
  "sp009":{ 
      "name":"Cà rốt",
      "price":25000,
      "photo":"../assets/img/ca_rot.webp"
  },
  "sp010":{ 
    "name":"Thịt lợn",
    "price":150000,
    "photo":"../assets/img/thit-than-lon-que1_d59f721b11bc4d2ba607a9c8f3dcf47f_large.webp"
  },
  "sp011":{ 
    "name":"Thịt bò",
    "price":250000,
    "photo":"../assets/img/thit_bo_21d0d4649bfc452cb082396ebd603711_2d31ac695be843f9b8f9252b14cae463_large.webp"
  }
}; 

function addCart(productCode) {//console.log('addCart');  
  let quantity = parseInt($('input[id='+productCode+']').value);

  if(typeof localStorage[productCode] === "undefined"){
      window.localStorage.setItem(productCode,quantity)
  } else {
      let currentQuantity = parseInt(window.localStorage[productCode]);
      let newQuantity = quantity + currentQuantity > 100 ? 100 : quantity + currentQuantity;
      window.localStorage.setItem(productCode, newQuantity);
  }

}

var cartCount = $('.main__cart-count');



