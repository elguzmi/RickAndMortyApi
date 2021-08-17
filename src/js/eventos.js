window.addEventListener('load', ()=>{
    const menuButton = document.querySelector('.icon_barra');
    const menu = document.querySelector('.nav__elementos');
    console.log(menuButton);
    let state = false;

    menuButton.addEventListener('click',()=>{
        console.log(state);
        if (state == false) {
            menu.style.display = 'block';
            state=true;
        }else{
            menu.style.display = 'none';
            state=false;
        }
    });
});