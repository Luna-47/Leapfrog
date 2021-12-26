const wrapper = document.getElementById("wrapper");
const images = document.getElementById("images");

const imageWidth =  200;
const imageCount = images.children.length;

images.style.idth =`${imageCount * imageWidth}px`;

for (let i=0; i<imageCount; i++){
    const image = images.children[i];

    image.style.left = `${i * imageWidth}px`;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let interval;


nextBtn.onclick =function() {
    let dx=0;
    currentIndex++;
    interval = setInterval(()=>{
        dx++;
        images.style.left = `-${currentIndex * dx }px`;

        if(dx>=200) {
            clearInterval(interval);
            pos+=200;
        }
    }, 10);
};

prevBtn.onclick =function() {
    let dx=200;
    currentIndex--;
    interval = setInterval(()=>{
        dx--;
        images.style.left = `-${currentIndex * dx }px`;

        if(dx<=0) {
            clearInterval(interval);
            pos++;
        }
    }, 10);
};
















// HERE
// const mySLider = new Slider('#images', {
//     transition: '500ms',
//     hold: '500ms'
// });

// const mySLider2 = new Slider('#images2', {
//     transition: '500ms',
//     hold: '500ms'
// });