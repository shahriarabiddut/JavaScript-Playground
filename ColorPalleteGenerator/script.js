const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 32;

function generatePalette () {
    container.innerHTML = "";
    for(let i=0;i< maxPaletteBoxes;i++){
    // generating random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6,"0")}`;
    //console.log(randomHex);
    // Creating a new 'li element and inserting to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background-color:${randomHex}"></div>
                       <span class="hex-value">${randomHex}</span>`;
    //adding click event to current li element to copy the color
    color.addEventListener("click",()=> copyColor(color,randomHex));
    //Inserting li to ul container
    container.appendChild(color);
    }
};

const copyColor = (elem,hexVal) => {
    //  console.log(elem,hexVal);
    const colorElement = elem.querySelector(".hex-value");
    //Copying the he value , updating the text to copied,
    // and changing text back to hex value after 1 sec 1000ms
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal , 1000)
    }).catch(() => alert('Failed to copy the color code'));
}

refreshBtn.addEventListener("click", generatePalette);