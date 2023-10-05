const container = document.querySelector('.container');
const text = document.querySelector('#text');
const totalTime = 9000;
const breatheTime = (totalTime / 9) * 3;
const holdTime = (totalTime / 3);

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = 'Breathe in !';
    container.className = 'container grow';
    
    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe out !';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);