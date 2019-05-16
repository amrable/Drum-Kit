var len = document.querySelectorAll(".drum").length;

for ( var i=0 ; i<len ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var sound="sounds/";
    if(this.innerHTML=="w")
    {
      sound+="tom-1.mp3";
    }else if (this.innerHTML=="a") {
      sound+="tom-2.mp3";
    }else if(this.innerHTML=="s"){
      sound+="tom-3.mp3";
    }else if (this.innerHTML=="d") {
      sound+="tom-4.mp3";
    }else if (this.innerHTML=="j") {
      sound+="crash.mp3";
    }else if (this.innerHTML=="k") {
      sound+="snare.mp3";
    }else if (this.innerHTML=="l") {
      sound+="kick-bass.mp3";
    }


    var audio=new Audio ( sound );
    audio.play();
  });
}
