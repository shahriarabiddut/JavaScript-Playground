const dynamicText = document.querySelector("h1 span");

const words = ["Love","Like Art","The Danger","The Future","The Abomination"];
let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;
const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop_blinking");
    if(!isDeleting && charIndex<currentWord.length){
        //if true, type the next character
        charIndex++;
        setTimeout(typeEffect,150);
    }else if(isDeleting && charIndex>0){
        //if true, remove the previous character
        charIndex--;
        setTimeout(typeEffect,100);
    }else{
        //if word is deleted swicth to next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop_blinking");
        wordIndex = !isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(typeEffect,1200);
    }
}
typeEffect();
