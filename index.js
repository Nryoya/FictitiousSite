$(function(){
  $(".toggle").on("click", function(){
    $(".toggle > span").toggleClass("active");
    $(".H_nav").toggleClass("active");
  });

  $(window).scroll(function(){
    $(".fadein, .card1, .card2, .card3, .card4").each(function(){
      let height = $(window).height();
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      if(scroll > target - height + 200){
        $(this).addClass("active");
      }
    })
  })
})
