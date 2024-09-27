
const mortgageAmount = document.querySelector("#principal").value;
const mortgageTerm = document.querySelector("#term").value;
const mortageYear = document.querySelector("#rate").value;
function calculate(){ 
for(var i=0;i<2;i++){
     choice = document.querySelectorAll(".option")[i].value;
        switch(choice){
            case "A":
            alert("hi");
            break;
            case "B":
            alert("Hello");
            break;
        }
    break;
    }

}




$(".button1").click(function(){
    $(".emptyresult").css("display", "none");
    $("#finalresults").css("display", "block");
    calculate();
})

$(".button2").click(function(){
    $("#finalresults").css("display", "none");
    $(".emptyresult").css("display", "block");
    window.location.reload();
})



