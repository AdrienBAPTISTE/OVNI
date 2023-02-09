const b = document.querySelector('.ovni__box')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*85)+1;
    const j=Math.floor(Math.random()*35)+1;

    b.style.marginLeft=i+"%"
    b.style.marginTop=j+"%"
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