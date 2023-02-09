const box = document.querySelector('.ovni__box')
box.addEventListener("mouseover", moveHover)

function moveHover(){
    const w=Math.floor(Math.random()*85)+1;
    const h=Math.floor(Math.random()*35)+1;

    box.style.marginLeft=w+"%"
    box.style.marginTop=h+"%"
}

/*
b.addEventListener("click", onclick)

function onclick(){
    const i=Math.floor(Math.random()*90)+1;
    const j=Math.floor(Math.random()*35)+1;

    b.style.marginLeft=i+"%"
    b.style.marginTop=j+"%"
}
*/
