const openMenu = document.getElementById('openMenu')
const menu = document.getElementById('menu')

openMenu.onclick = function(){
    if(menu.classList.contains('activeMenu') == true ){
        menu.classList.remove('activeMenu')
    }else{
        menu.classList.add('activeMenu')
    }
}
