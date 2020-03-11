const pressed = [];
const codeWord = "dennis";

window.addEventListener('keyup', (e) => {
    console.log(event.key);
    pressed.push(e.key);
    pressed.splice(-codeWord.length - 1, pressed.length - codeWord.length);

    if (pressed.join('').includes(codeWord)){
        alert("Ding Ding");
    }

    console.log(pressed);
})