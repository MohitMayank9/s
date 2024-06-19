var elements=document.querySelectorAll(".drum");

for(var i=0;i<elements.length;i++){
    elements[i].addEventListener("click",function (){
        var key=this.innerText;
        makeSound(key);
    });
}

document.addEventListener("keydown",function(event){//callback function
        makeSound(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var obj= new Audio('sounds/tom-1.mp3');
            obj.play();
            break;

        case "a":
            var obj= new Audio('sounds/tom-2.mp3');
            obj.play();
            break;

        case "s":
                var obj= new Audio('sounds/tom-3.mp3');
                obj.play();
                break;

        case "d":
                var obj= new Audio('sounds/tom-4.mp3');
                obj.play();
                break;
        case "j":
                    var obj= new Audio('sounds/snare.mp3');
                    obj.play();
                    break;
    
        case "k":
                        var obj= new Audio('sounds/crash.mp3');
                        obj.play();
                        break;
        
        case "l":
                        var obj= new Audio('sounds/kick-bass.mp3');
                        obj.play();
                        break;
        default:
            break;
        

    }
}


// var obj= new Audio('sounds/tom-1.mp3');
//         obj.play();
