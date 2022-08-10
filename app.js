
// Modal Which Appear On Search icon
var modal = document.querySelector(".search-modal");
modal.style.display="none";
var searchIcon=document.querySelector(".search-icon");


function search() {
    modal.style.display="block"
}

function closeModal() {
    modal.style.display="none"

}


//For Languages And Languages Selection 

var languages = document.querySelector(".languages");
var dropdown= document.getElementById("dropdowna")


function p () {
    if (dropdown.style.display=="none"){

        dropdown.style.display="block"          
    }

    else{
        dropdown.style.display="none"
    }

}

function language1() {
    languages.innerText="en"
    dropdown.style.display="none"
}

function language2() {
    languages.innerText="fr"
    dropdown.style.display="none"
}

function language3() {
    languages.innerText="es"
    dropdown.style.display="none"
}


// For Changing background image 
window.onload = function () {
    var main = document.getElementById("main")

    // Array of Images
     var backgroundImg=["https://img.freepik.com/free-photo/ocean-pollution-campaign-with-whale-swimming-with-plastic-bags-floating_53876-124604.jpg?w=740&t=st=1660053533~exp=1660054133~hmac=22f9d83d28472b798ac37a4ffb19151c790daded0049fcc82d520dec78aa9744",
     "https://img.freepik.com/free-photo/underwater-scuba-diving-selfie-shot-with-selfie-stick_1253-1485.jpg?w=740&t=st=1660053474~exp=1660054074~hmac=1e7f0590c2a782b985b33e44962a418fa94609a5745a194c416a029c947f9d2b",
     "https://img.freepik.com/premium-photo/cenote-angelita-mexico-cave-diving-extreme-adventure-underwater-landscape-water-fog_548821-4924.jpg?w=740"
     
     ]
     

      function changeImage() {   
       var i = Math.floor((Math.random() * backgroundImg.length));
        main.style.backgroundImage = "url('"+backgroundImg[i]+"')";
        main.style.backgroundImage.backgroundSize="cover"
        main.style.transition="1s"
      }
      setInterval(changeImage,10000)

    }


// For Nav Bar DropDown==========================================================

var dropdown1=document.querySelector(".dropdown-1");
var pageTab=document.querySelector(".pages");
var homeTab=document.querySelector(".home");
dropdown1.style.display="none";

function pagesDrop() {
    

    if (dropdown1.style.display=="none"){

        dropdown1.style.display="block"  
        pageTab.style.color="yellow"
        homeTab.style.color="white"
        
    }

    else{
        dropdown1.style.display="none"
        pageTab.style.color="white"
        homeTab.style.color="yellow"


    }

}

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar').classList.add('fixed-top');
          document.getElementById('navbar').style.backgroundColor="white"
          document.getElementById('navbar').style.color="black"
          document.getElementById('navbar').style.marginTop="0"
          document.getElementById('navbar').style.padding="30px 0 "
          document.querySelector(".home").style.color="dodgerblue"






          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';

        } else {
          document.getElementById('navbar').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';

          document.getElementById('navbar').style.backgroundColor="transparent"
          document.getElementById('navbar').style.color="white"
          document.getElementById('navbar').style.marginTop="50px"
          document.querySelector(".home").style.color="yellow"



        } 
    });
  }); 



//   For Hide and Show Text====================================================


var text1=document.getElementById("hide-text");
text1.style.display="block"

function hide1 () {
    if (text1.style.display=="block"){

        text1.style.display="none"   
    }

    else{
        text1.style.display="block"
    }

}




