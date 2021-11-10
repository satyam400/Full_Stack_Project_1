state = 1
function fun(){
    let x = document.getElementById('slideBar')
    state = state === 1 ? 0 : 1;
    prop = state === 1 ? '-100vw' : '0vw';
    x.style.left = prop
}