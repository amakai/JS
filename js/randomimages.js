const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpg", "img2.webp", "img3.webp", "img4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomImage = Math.floor(Math.random() * images.length);
    image.src = "images/" + images[randomImage];
}