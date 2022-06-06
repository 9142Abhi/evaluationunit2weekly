
let exper = document.querySelector("exp");
let r= document.addEventListener("submit" ,likeMe(exper));

function likeMe(exper){
     
    if(exper>5){
        console.log("Senior");
    }else if(exper>=2 && exper<=5){
        console.log("Junior");
    }else if(exper<=1){
        console.log("Fresher");
    }
}
// document.querySelector(r).append("tbody");
