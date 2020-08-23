function toggleMenu(){
  var menu = document.getElementById('menu-list');
  menu.classList.toggle('menu-open');
}

function shrinkMenu(){
  var distanceY	= window.pageYOffset;
  var shrinkOn 	= 70;
  var nav 	= document.getElementById('nav');
  if (distanceY > shrinkOn) {
    nav.classList.add('smaller');
  } else {
    nav.classList.remove('smaller');
  }
}
window.addEventListener("scroll", shrinkMenu);


function parallax(){
  var lp = document.getElementById('landing-page');
  if (lp == null) {
    // console.log("lalala");
  }else{
    lp.style.top = + (window.pageYOffset / 2) + "px";
  }
}
window.addEventListener("scroll", parallax);

function parallax2(){
  var ha = document.getElementById('header-about');
  if (ha == null) {
    // console.log("lalala");
  }else{
    ha.style.top = + (window.pageYOffset / 2) + "px";
  }
}
window.addEventListener("scroll", parallax2);

function parallaxImg(){
  var lp = document.getElementById('intro-img');
  if (lp == null) {
    // console.log("lalala");
  }else{
    lp.style.cssText = "transform: translateY(-50%) rotate(" + (window.pageYOffset / 10) + "deg)";
  }
}
window.addEventListener("scroll", parallaxImg);

function search(){
  var form = document.getElementById("search-input");
  form.style.cssText = "width: 200px; padding: 7px;";
  form.focus();

  // $("#form").css({
  //   "width" : "200px",
  //   "padding" : "7px"
  // });

  var form = document.getElementById("search-button");
  form.style.cssText = "width: 40px; height: 40px;";
  form.setAttribute("onclick", "defaultSearch()");
}

function defaultSearch(){
  var form = document.getElementById("search-input");
  form.style.cssText = "width: 0; padding: 0;";

  var form = document.getElementById("search-button");
  form.style.cssText = "width: 50px; height: 50px;";
  form.setAttribute("onclick", "search()");
}

function listActive(){
  var listTab = document.getElementsByClassName("list-tab");
  listTab(this)

  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
  }
}
function category(){
  var menu = document.getElementById('category-list');
  menu.classList.toggle('category-open');
}

var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

  var rect = this.getBoundingClientRect();
  circle.style.left = e.clientX - rect.left -d/2 + 'px';
  circle.style.top = e.clientY - rect.top - d/2 + 'px';

    circle.classList.add('ripple');
}

$('.image-file').on('click', function() {
    $('.imagepreview').attr('src', $(this).attr('src'));
    // alert($(this).attr('src'));
    $('.imagemodal').show();
});