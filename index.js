let number_of_drum=document.querySelectorAll(".drum").length;
for(let i=0;i<number_of_drum;++i){
document.querySelectorAll("button")[i].addEventListener("click",function(){
        let buttonsound=this.innerHTML;
        play_music(buttonsound);
        animation_fun(buttonsound);
});
}

document.addEventListener("keypress",(event)=>{
    play_music(event.key);
    animation_fun(event.key);
});


function play_music(sound){
    switch(sound){
                
        case "w":
            var audio=new Audio("sounds/tom-0.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-5.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-6.mp3");
            audio.play();
            break;
        default:
            console.log(sound);
    }
}


function animation_fun(ele){
      let show=document.querySelector("."+ele);
      show.classList.add("pressed");
      setTimeout(()=>{
         show.classList.remove("pressed");
      },100);
}