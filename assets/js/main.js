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
	if (searchInput.value.length == 0) 
		return false;
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

//######################### 
// ######################## Slider #############################

