/*
Of course always with the help of Google :)

*/
const upperCase = document.querySelector('.uncheck1')
const upperCaseGreen = document.querySelector('#checked1')
const lowercase = document.querySelector('.uncheck2')
const lowercaseGreen = document.querySelector('#checked2')
const nums = document.querySelector('.uncheck3')
const numsGreen = document.querySelector('#checked3')
const symbols = document.querySelector('.uncheck4')
const symbolsGreen = document.querySelector('#checked4')
const sliderEl = document.querySelector('#range')
const charlength = document.querySelector('#char-len')
const pwdStrength = document.querySelector('.strength-text')
const tooWeak = document.querySelector('.img1')
const weak = document.querySelector('.img2')
const medium = document.querySelector('.img3')
const strong = document.querySelector('.img4')
const generatePass = document.querySelector('#generate-btn')
const failedState = document.querySelector('.fail-state')
const pwd = document.querySelector('#generated-pass')
const copyBtn = document.querySelector('.icon')
const copiedPass = document.querySelector('.copied')






function showProgress() {
    const sliderValue = sliderEl.value
    sliderEl.style.background = `linear-gradient(to right, rgb(164, 255, 175) ${sliderValue}%, black ${sliderValue}%)`;
}

showProgress();

sliderEl.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    charlength.textContent = sliderValue;

    const count = (sliderValue / sliderEl.max) * 100
    sliderEl.style.background = `linear-gradient(to right, rgb(164, 255, 175) ${count}%, black ${count}%)`;
})

let count = 0;
let upper = 0;
let lower = 0;
let number = 0;
let symbol = 0;


upperCase.addEventListener('click', () => {
    count++;
    upperCaseGreen.classList.remove('hidden')
    upperCase.classList.add('hidden')
    trackCount();
    upper++;


})
upperCaseGreen.addEventListener('click', () => {
    count--;
    upperCaseGreen.classList.add('hidden')
    upperCase.classList.remove('hidden')
    trackCount();
    upper--;

})

lowercase.addEventListener('click', () => {
    count++;
    lowercaseGreen.classList.remove('hidden')
    lowercase.classList.add('hidden')
    trackCount();
    lower++;

})
lowercaseGreen.addEventListener('click', () => {
    count--;
    lowercaseGreen.classList.add('hidden')
    lowercase.classList.remove('hidden')
    trackCount();
    lower--;
})

nums.addEventListener('click', () => {
    count++;
    numsGreen.classList.remove('hidden')
    nums.classList.add('hidden')
    trackCount();
    number++;
})


numsGreen.addEventListener('click', () => {
    count--;
    numsGreen.classList.add('hidden')
    nums.classList.remove('hidden')
    trackCount();
    number--;
})

symbols.addEventListener('click', () => {
    count++;
    symbolsGreen.classList.remove('hidden')
    symbols.classList.add('hidden')
    trackCount();
    symbol++;
})

symbolsGreen.addEventListener('click', () => {
    count--;
    symbolsGreen.classList.add('hidden')
    symbols.classList.remove('hidden')
    trackCount();
    symbol--;
})


function trackCount() {
    if (count === 0) {
        pwdStrength.textContent = '';
        weak.style.filter = 'none'
        medium.style.filter = 'none'
        strong.style.filter = 'none'
        tooWeak.style.filter = 'none'

    }

    else if (count === 1) {
        tooWeak.style.filter = 'invert(49%) sepia(68%) saturate(5146%) hue-rotate(335deg) brightness(109%) contrast(97%)';
        pwdStrength.textContent = 'TOO WEAK!'
        weak.style.filter = 'none'
        medium.style.filter = 'none'
        strong.style.filter = 'none'

    }
    else if (count === 2) {

        pwdStrength.textContent = 'WEAK'
        tooWeak.style.filter = 'brightness(0) saturate(100%) invert(63%) sepia(90%) saturate(2070%) hue-rotate(323deg) brightness(101%) contrast(97%)'
        weak.style.filter = 'brightness(0) saturate(100%) invert(63%) sepia(90%) saturate(2070%) hue-rotate(323deg) brightness(101%) contrast(97%)'
        medium.style.filter = 'none'
        strong.style.filter = 'none'
    }
    else if (count === 3) {
        pwdStrength.textContent = 'MEDIUM'
        tooWeak.style.filter = 'brightness(0) saturate(100%) invert(90%) sepia(57%) saturate(4660%) hue-rotate(312deg) brightness(107%) contrast(94%)'
        weak.style.filter = 'brightness(0) saturate(100%) invert(90%) sepia(57%) saturate(4660%) hue-rotate(312deg) brightness(107%) contrast(94%)'
        medium.style.filter = 'brightness(0) saturate(100%) invert(90%) sepia(57%) saturate(4660%) hue-rotate(312deg) brightness(107%) contrast(94%)'
        strong.style.filter = 'none'

    }
    else if (count === 4) {

        pwdStrength.textContent = 'STRONG'
        tooWeak.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(1192%) hue-rotate(68deg) brightness(103%) contrast(101%)'
        weak.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(1192%) hue-rotate(68deg) brightness(103%) contrast(101%)'
        medium.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(1192%) hue-rotate(68deg) brightness(103%) contrast(101%)'
        strong.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(1192%) hue-rotate(68deg) brightness(103%) contrast(101%)'
    }
}
/*
let upper = 0;
let lower = 0;
let numbers = 0;
let symbol = 0;*/

const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
};


generatePass.addEventListener('click', () => {
    generateIt();

})





function generateIt() {
    let chars = '';
    let lenPass = sliderEl.value
    /* if (lenPass < 6) {
         failedState.classList.remove('hidden')
        
     } */
    if (lenPass < 6) {
        failedState.classList.remove('hidden')

    } else {
        if (upper) {
            chars += characters.uppercase

        }

        if (lower) {
            chars += characters.lowercase

        }

        if (number) {
            chars += characters.numbers
            
        }

        if (symbol) {
            chars += characters.symbols
        }

        if (chars.length === 0) {
            failedState.classList.remove('hidden')
            failedState.textContent = 'Select at least one checkbox'

        }


        let password = '';
        for (let i = 0; i < lenPass; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));

        }
        // console.log(password)
        pwd.textContent = password
        /*return password;*/
    }
};


copyBtn.addEventListener('click', () => {
    const passWrd = pwd.textContent;
    if (passWrd) {
        toClipoard(passWrd)
        .then(res => console.log("copied", res));
        const span = document.createElement('span')
        span.textContent='COPIED'
        span.classList.add('copied')
        span.style.color="rgb(164, 255, 175)"
        pwd.appendChild(span)
    }
});


function toClipoard(text) {
    if ("clipboard" in navigator && typeof navigator.clipboard.writeText === "function") {
      // Chrome
      return navigator.clipboard.writeText(text)
        .then(() => true)
        .catch(() => false);
    } else {
      // Firefox
      const input = document.createElement("input");
      input.value = text;
      input.style.position = "fixed";
      input.style.top = "-2000px";
      document.body.appendChild(input);
      input.select();
      try {
        return Promise.resolve(document.execCommand("copy"))
          .then(res => {
            document.body.removeChild(input);
            return res;
          });
      } catch (err) {
        return Promise.resolve(false);
      }
    }
  }

