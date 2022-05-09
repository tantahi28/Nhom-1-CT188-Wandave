var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
//######################## Navigation mobile########################
var menuAction = $('.menu-action');
var navMobile = $('.header__nav--mobile');
menuAction.onclick = function() {
  navMobile.classList.toggle('show');
}


// ####################### Search #############################
var searchBlock = $('.header__search-dropdown');
var actionSearch = $('.action-search');
actionSearch.onclick = function() {
  searchBlock.classList.toggle('show');
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

