var array = document.querySelectorAll(".btn");

//click activity -- anonymous function
for(var i=0;i<array.length;i++) {
    console.log(i);
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        makeSound(text);
        addingAnimation(text);
    });
    /*
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var path = "assets/" + i++ + ".mp3";
        console.log(this);
        console.log(path);
        var audiofile = new Audio(path);
        audiofile.play();
    });
    */
}

//keyboard activity -- normal function
document.addEventListener("keypress",pressedKey);
function pressedKey(event) {
    makeSound(event.key);
    addingAnimation(event.key);
}

function makeSound(key) {

    for(var j=0;j<array.length;j++) {
        if(array[j].innerHTML === key) {
            var audioPath = new Audio((j+1) + ".mp3");
            audioPath.play();
        }
    }

    /*switch(key) {

        case "q":
            var audiofile = new Audio("assets/8.mp3");
            audiofile.play();
             
            break;
        case "w":
            var audiofile = new Audio("assets/9.mp3");
            audiofile.play();
             
            break;
        case "e":
            var audiofile = new Audio("assets/10.mp3");
            audiofile.play();
             
            break;
        case "r":
            var audiofile = new Audio("assets/11.mp3");
            audiofile.play();
             
            break;
        case "t":
            var audiofile = new Audio("assets/12.mp3");
            audiofile.play();
             
            break;
        case "y":
            var audiofile = new Audio("assets/13.mp3");
            audiofile.play();
             
            break;
        case "u":
            var audiofile = new Audio("assets/14.mp3");
            audiofile.play();
             
            break;
        case "i":
            var audiofile = new Audio("assets/15.mp3");
            audiofile.play();
             
            break;
        case "o":
            var audiofile = new Audio("assets/16.mp3");
            audiofile.play();
             
            break;
        case "p":
            var audiofile = new Audio("assets/17.mp3");
            audiofile.play();
             
            break;
        
            //-----------------------------------------------------------------------------

        case "a":
            var audiofile = new Audio("assets/1.mp3");
            audiofile.play();
             
            break;
        case "s":
            var audiofile = new Audio("assets/2.mp3");
            audiofile.play();
             
            break;
        case "d":
            var audiofile = new Audio("assets/3.mp3");
            audiofile.play();
             
            break; 
        case "f":
            var audiofile = new Audio("assets/4.mp3");
            audiofile.play();
             
            break; 
        case "g":
            var audiofile = new Audio("assets/5.mp3");
            audiofile.play();
             
            break; 
        case "h":
            var audiofile = new Audio("assets/6.mp3");
            audiofile.play();
             
            break; 
        case "j":
            var audiofile = new Audio("assets/7.mp3");
            audiofile.play();
             
            break; 
        case "k":
            var audiofile = new Audio("assets/18.mp3");
            audiofile.play();
             
            break;
            
            //----------------------------------------------------------------------------

        case "x":
            var audiofile = new Audio("assets/19.mp3");
            audiofile.play();
             
            break;
        case "c":
            var audiofile = new Audio("assets/20.mp3");
            audiofile.play();
             
            break;
        case "v":
            var audiofile = new Audio("assets/21.mp3");
            audiofile.play();
             
            break;
        case "b":
            var audiofile = new Audio("assets/22.mp3");
            audiofile.play();
             
            break;
        case "n":
            var audiofile = new Audio("assets/23.mp3");
            audiofile.play();
             
            break;
        case "m":
            var audiofile = new Audio("assets/24.mp3");
            audiofile.play();
             
            break;

        default:
            alert(key + " is not here...")
            break;
    }*/
}

// adding animation after pressed a key...

function addingAnimation(key) {
    var pressedKey = document.querySelector("." + key);
    pressedKey.classList.add("animation");

    setTimeout(function() {
        pressedKey.classList.remove("animation");
    }, 300);
}
