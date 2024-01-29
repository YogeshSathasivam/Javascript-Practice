function add1(){
    var num1=document.getElementById("num1").value;
    console.log("num1: "+num1);
    var num2=document.getElementById("num2").value;
    console.log("num2: "+num2);
    var sum=parseInt(num1)+parseInt(num2);
    console.log("sum: "+sum);

    document.getElementById("sum").innerHTML=sum;
}