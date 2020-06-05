// • On loading of the page it should display height and width of a screen in h2 tag

function Display() {
    let width = document.getElementById("width");
    width.innerText = "Width is " + window.innerWidth;
    let height = document.getElementById("height");
    height.innerText = "Height is " + window.innerHeight;
}