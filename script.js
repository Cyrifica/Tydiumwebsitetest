document.getElementById("color-button").onclick = function() {
    document.getElementById("color-button").style = "background-color: #" + Math.floor(Math.random()*16777215).toString(16)
}