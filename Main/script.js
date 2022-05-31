let index1 = 0
const imageNumber1 = document.querySelectorAll('.image-top1 img')

function changeImage1(){
    index1 = index1 + 1
    if(index1 > imageNumber1.length - 1)
        index1 = 0
    document.querySelector('.image-top1').style.right = index1 * 100 + "%"
}
setInterval(changeImage1,2000)

let index2 = 0
const imageNumber2 = document.querySelectorAll('.image-top2 img')

function changeImage2(){
    index2 = index2 + 1
    if(index2 > imageNumber2.length - 1)
        index2 = 0
    document.querySelector('.image-top2').style.right = index2 * 100 + "%"
}
setInterval(changeImage2,2000)

$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
