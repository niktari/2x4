let wordElement = document.getElementById("word");
let containerElement = document.getElementById("container");
let myInterval;

function colorizeOriginal() {
    let originalStrings = document.querySelectorAll(".original-string");

    for(let string of originalStrings) {
        string.style.color = `hsl(${Math.random() * 360}, 80%, 50%)`;
    }
}


function generateStrings() {

    colorizeOriginal();

    let newString = "×2×4";
    let colorString = "";

    // Wrap each character in the string in a span
    for (let i = 0; i < newString.length; i++) {
        colorString += `<span style="color: hsl(${Math.random() * 360}, 80%, 50%);">${newString[i]}</span>`;
    }

    wordElement.innerHTML += colorString;
    
}



function appendStrings() {

    colorizeOriginal();
    
    // If the interval isn't running, then proceed to start it
    if (myInterval == null) {
        myInterval = setInterval(generateStrings, 100);
    }
}

containerElement.addEventListener("mouseover", appendStrings);

function removeStrings() {
    // Clear the interval
    clearInterval(myInterval);

    // Reset the interval so it definitely isn't running anymore
    myInterval = null;
    wordElement.innerHTML = "<span class='original-string'>2</span><span class='original-string'>×</span><span class='original-string'>4</span>";
    
}

containerElement.addEventListener("mouseleave", removeStrings);