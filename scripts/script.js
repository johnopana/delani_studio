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
 $(".portfolio1").mouseenter(function() {
    $(".one").show(500);
  });
  $(".portfolio1").mouseleave(function() {
    $(".one").hide(1000);
  });
  // **Portfolio2
  $(".portfolio2").mouseenter(function() {
    $(".two").show(500);
  });
  $(".portfolio2").mouseleave(function() {
    $(".two").hide(1000);
  });
  // **Portfolio3
  $(".portfolio3").mouseenter(function() {
    $(".tree").show(500);
  });
  $(".portfolio3").mouseleave(function() {
    $(".tree").hide(1000);
  });
  // **Portfolio4
  $(".portfolio4").mouseenter(function() {
    $(".four").show(500);
  });
  $(".portfolio4").mouseleave(function() {
    $(".four").hide(1000);
  });
  // **Portfolio5
  $(".portfolio5").mouseenter(function() {
    $(".five").show(500);
  });
  $(".portfolio5").mouseleave(function() {
    $(".five").hide(1000);
  });
  // **Portfolio6
  $(".portfolio6").mouseenter(function() {
    $(".six").show(500);
  });
  $(".portfolio6").mouseleave(function() {
    $(".six").hide(1000);
  });
  // **Portfolio7
  $(".portfolio7").mouseenter(function() {
    $(".seven").show(500);
  });
  $(".portfolio7").mouseleave(function() {
    $(".seven").hide(1000);
  });
  // **Portfolio8
  $(".portfolio8").mouseenter(function() {
    $(".eight").show(500);
  });
  $(".portfolio8").mouseleave(function() {
    $(".eight").hide(1000);
  });
  // Form validation
  $("form").submit(function(event) {
    event.preventDefault();
    let name = $("#inputName").val();
    let email = $("#inputEmail").val();
    let message = $("#inputMessage").val();
    if (name == "") {
      $(".result")
        .html("Please enter your name")
        .addClass("alert alert-danger");
    } else if (email == "") {
      $(".result")
        .html("Please enter your email")
        .addClass("alert alert-danger");
    } else if (message == "") {
      $(".result")
        .html("Please enter a message")
        .addClass("alert alert-danger");
    } else {
      $(".result")
        .html(
          `Hi, ${name}. We've recieved your message. Thanks for reaching out.`
        )
        .addClass("alert alert-success");
    }
  });




 