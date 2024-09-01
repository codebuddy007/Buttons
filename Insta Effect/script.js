var btn = document.querySelector("#btn")
var check = 0

var frnd = document.querySelector(".status")
btn.addEventListener("click",function(){

    if (check == 0){
        frnd.style.color="green"
        frnd.innerHTML="Friends"
        btn.style.backgroundColor=" #b1adad"
        btn.style.color="black"
        btn.innerHTML="Remove"

        check=1
    }
    else{
        frnd.style.color="red"
        frnd.innerHTML="Stranger"
        btn.style.backgroundColor=" rgb(12, 91, 218)"
        btn.style.color="white"
 btn.innerHTML="Add Friend"
        check=0
    }
   
})