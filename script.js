document.getElementById("btn").addEventListener("click", fibonacci);
document.getElementById("myInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("btn").click();
    }
});
function fibonacci(){
    const n =document.getElementById("myInput").value;   
    if (isNaN(n)){
        result = "The Fibonacci sequence is a set of numbers that starts with a one or a zero."}
    if(n<=2) {result=1};
 
    if(n==0){result ="Uppsss!!Try again.."}; 

        let pre = 1;
        let cur = 2;
 
    for(let i = 2; i<n; i++){

        const next = pre + cur
                pre = cur;
                cur = next;
                result=cur
}
document.getElementById("test").innerHTML= result;
}


