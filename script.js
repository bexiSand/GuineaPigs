/*navbar*/

const openMenu = document.getElementById('openMenu')
const menu = document.getElementById('menu')

openMenu.onclick = function(){
    if(menu.classList.contains('activeMenu') == true ){
        menu.classList.remove('activeMenu')
    }else{
        menu.classList.add('activeMenu')
    }
}

/*end navbar*/

/* Slide Show*/

const slides = document.querySelectorAll('.slide')

let index = 0

const nextSlide = () => {
    slides.forEach(slide => {
        slide.style.display = "none"
    })

    if(index >= slides.length - 1){
        index = 0
    }else{
        index++
    }

    slides[index].style.display = 'block'
}

setInterval(() => {
    nextSlide()
},5000)

/* end Slide Show */

/* name generator */
function getName() {
    var x = document.getElementById("mySelect").value;
    if (x == "1")  {
        x = "Peanut";
    } else if (x == "2") {
        x = "Popcorn";
      } else if (x == "3") {
        x = "Cookie";
      } else if (x == "4") {
        x = "Piff";
      } else if (x == "5") {
        x = "Puff";
      } else if (x == "6") {
        x = "Maggio";
      } else if (x == "7") {
        x = "Muffin";
      } else if (x == "8") {
        x = "Ginger";
      } else if (x == "9") {
        x = "Tofu";
      } else if (x == "10") {
        x = "Bicuit";
      } else if (x == "11") {
        x = "Sunny";
      } else if (x == "12") {
        x = "Poppy";
    }
    document.getElementById("name").innerHTML = "Namnförslag: " + x;
  }
  /* end name*/