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

