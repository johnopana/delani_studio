document.getElementById('image1').addEventListener('click', function(){
    document.querySelector('#image1').style.display = 'none';
    document.querySelector('#design').style.display = 'block';  
});
document.querySelector('#design').addEventListener('click', function(){
    document.querySelector('#design').style.display = 'none';
    document.querySelector('#image1').style.display = 'block';
})
document.getElementById('image2').addEventListener('click', function(){
    document.querySelector('#image2').style.display = 'none';
    document.querySelector('#development').style.display = 'block';  
});
document.querySelector('#development').addEventListener('click', function(){
    document.querySelector('#development').style.display = 'none';
    document.querySelector('#image2').style.display = 'block';
})
document.getElementById('image3').addEventListener('click', function(){
    document.querySelector('#image3').style.display = 'none';
    document.querySelector('#product').style.display = 'block';  
});
document.querySelector('#product').addEventListener('click', function(){
    document.querySelector('#product').style.display = 'none';
    document.querySelector('#image3').style.display = 'block';
})
 // **Portfolio1
 $(".portfolio-box-1").mouseenter(function() {
    $(".description-1").show(500);
  });
  $(".portfolio-box-1").mouseleave(function() {
    $(".description-1").hide(1000);
  });