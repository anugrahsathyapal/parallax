let text = document.getElementById("text");
let rock1 = document.getElementById("Rock1");
let rock2 = document.getElementById("Rock2");
let rock3 = document.getElementById("Rock3");
let rock4 = document.getElementById("Rock4");
let moon = document.getElementById("Moon");
let wplanet = document.getElementById("Wplanet");
let yplanet = document.getElementById("Yplanet");


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    moon.style.marginTop = value * 1.5 + 'px';
    rock3.style.transform = `translateX(${-value * .5}px)`
    rock4.style.transform = `translateX(${value * .5}px)`
    wplanet.style.transform = `translate(${value * .5}px, ${-value * .5}px)`; 
    yplanet.style.transform = `translate(${value * .5}px, ${value * .5}px)`; 

});

