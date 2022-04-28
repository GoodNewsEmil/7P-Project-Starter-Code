$("button").click(function(){
  let variable1 = $(".J").val();  
 let variable2 = $(".E").val();
    let variable3 = $(".M").val();
 console.log(variable1); 
    console.log(variable2);
    console.log(variable3);
    let variable4= variable3 * 52 * 28;
    $(".fortune-display").append(variable1+ " you will work "+ variable4+" hours by 2050.");
});