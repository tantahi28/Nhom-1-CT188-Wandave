var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Search
var searchBlock = $('.header__search-dropdown');

function displaySearch() {
  searchBlock.classList.add('show');
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

function toTop() {  
  window.scrollTo(0, 0);  
}

// ######################## Slider #############################

