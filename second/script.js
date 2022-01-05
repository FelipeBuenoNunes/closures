const sizePrint = document.getElementById("sizePrint");
function sizeText(){
    let sizeCurrent = 16;
    function resize(x){
        sizeCurrent += x;
        sizeCurrent = sizeCurrent > 40 ? 40 : sizeCurrent < 6 ? 6 : sizeCurrent;
        sizePrint.innerText = sizeCurrent + 'px';
        document.documentElement.style.setProperty('--font-size-history', sizeCurrent + 'px');
    }
    return resize;
}

const myTest = sizeText();