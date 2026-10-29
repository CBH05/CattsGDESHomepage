 $("button").click(
    function(){
  $(".container").toggleClass("dark");
  $(".box").toggleClass("dark");
});

$(".draggable").draggable({
  containment: ".container",
  scroll: false,
  snap: true,
  grid : [40, 40],
  stack: ".draggable"
});