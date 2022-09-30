function changeLeftLayout() {
    let id = null;
    const elem = document.getElementById("ecomElement");
    const pElem = document.getElementById("l-sidebar-paragraph")
    
    let pWidth = pElem.offsetWidth;
    let pHeight = pElem.offsetHeight;
    pElem.style.width = pWidth + "px";
    pElem.style.height = pHeight + "px";


    let elemWidth = 100;

    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (elemWidth == 0) {
        clearInterval(id);
    } else {
        elemWidth -= 1; 

        elem.style.width = elemWidth + "%"; 

        }
    }
    setTimeout(function(){
        if (document.getElementById("aside").style.display != "none") {
            document.getElementById("ecom").style.display = "none"
            document.getElementById("gridLayout").style.gridTemplateAreas = '"header header header" "nav nav nav" "land land land" "bar bar bar" "content content side" "footer footer footer"';
        } else {
            document.getElementById("ecom").style.display = "none"
            document.getElementById("gridLayout").style.gridTemplateAreas = '"header header header" "nav nav nav" "land land land" "bar bar bar" "content content content" "footer footer footer"';
        }
    }, 400);
}
function changeRightLayout() {
    let id = null;
    const elem = document.getElementById("asideElement");



    let elemOpacity = 1;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (elemOpacity == 0) {
        clearInterval(id);
    } else {
        elemOpacity -= 0.005; 
        elem.style.opacity = elemOpacity; 
        }
    }
    setTimeout(function(){
        if (document.getElementById("ecom").style.display != "none") {
            document.getElementById("aside").style.display = "none"
            document.getElementById("gridLayout").style.gridTemplateAreas = '"header header header" "nav nav nav" "land land land" "bar bar bar" "ecom content content" "footer footer footer"';
        } else {
            document.getElementById("aside").style.display = "none"
            document.getElementById("gridLayout").style.gridTemplateAreas = '"header header header" "nav nav nav" "land land land" "bar bar bar" "content content content" "footer footer footer"';
        }
    }, 400);
}