function makeColor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
    
}

//console.log(makeColor())
let colors=[]
let squareArr=document.querySelectorAll(".square")

function init(){
    colors=[]
    document.querySelector("h1").style.backgroundColor="white"
    for(let obj of squareArr){
        //console.log(obj)
        let color=makeColor()
        obj.style.backgroundColor=color
        colors.push(color)
    }
    let index=Math.floor(Math.random()*6)
    document.getElementById("color").innerHTML=colors[index]
}
init()

function verify(e){
    console.log(e.target.style.backgroundColor)
    let clickedColor=e.target.style.backgroundColor
    let c=document.getElementById('color').textContent
    if(clickedColor==document.getElementById("color").innerHTML){
        document.querySelector("h1").style.backgroundColor=clickedColor
    }
}

function yes(a){
    colors=[]
    document.querySelector("h1").style.backgroundColor="white"
    for(let obj of squareArr){
        //console.log(obj)
        let color=makeColor()
        obj.style.backgroundColor=color
        colors.push(color)
    }
    let index=Math.floor(Math.random()*6)
    document.getElementById("color").innerHTML=colors[index]
}