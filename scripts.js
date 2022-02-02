/* function changeColor(x:string){
    let y:string = x.style.backgroundColor;
    switch (y){
        case
    }
    if(onmouseover=null){
        x.style.backgroundColor = y;
    }else {
        x.style.backgroundColor = 'orange';
    }
} */
document.getElementsByClassName("btn").onmouseover = function () { mouseOver(); };
document.getElementsByClassName("btn").onclick = function () { }.onmouseout = function () { mouseOut(); };
function mouseOver() {
    document.getElementsByClassName("btn").style.color = "red";
}
function mouseOut() {
    document.getElementsByClassName("btn").style.color = "black";
}
