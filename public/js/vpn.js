let showList = () => {
    document.getElementById('list').classList.toggle('hidden')
}

let slideIndex = 1

/* function plusSlides(n) {
    showSlides(slideIndex += n);
}

function moveCarousel() {
    let x = document.getElementsByClassName('carousel')
    let i 
    let dots = document.getElementsByClassName('dot')
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (let i = 0; i < x.length; i++) {
        
    }
    dots[slideIndex-1].className += " active";
} */

moveCarousel(slideIndex)

function plusSlides(n) {
    moveCarousel(slideIndex += n)
}

function moveCarousel(a) {
    let slides = document.getElementsByClassName('carousel')
    if (a > slides.length) {slideIndex = 1}
    if (a < 1) {slideIndex = slides.length}
    console.log(a)
    document.getElementById(`carousel-${a}`).classList.toggle('border-salmon')
    document.getElementById(`carousel-${a}`).classList.toggle('border-gray-200')

}