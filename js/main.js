document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-item a');
    let isScrollingFromClick = false; // Nueva variable para controlar el desplazamiento

    function changeMenuColorOnScroll() {
        if (isScrollingFromClick) return; // Ignora el evento de scroll si se originó por un clic

        const scrollPosition = window.scrollY + window.innerHeight * 0.5;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(navItem => navItem.classList.remove('active'));
                navItems[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeMenuColorOnScroll);

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace

            isScrollingFromClick = true; // Indica que el desplazamiento es iniciado por un clic

            // Mueve la ventana a la sección correspondiente
            const section = sections[index];
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });

            // Actualiza manualmente el color activo
            navItems.forEach(item => item.classList.remove('active'));
            navItem.classList.add('active');

            // Espera hasta que el desplazamiento suave termine para reactivar el cambio de color basado en scroll
            setTimeout(() => {
                isScrollingFromClick = false;
            }, 1000); // Ajusta este tiempo según la duración del desplazamiento suave
        });
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//SLIDERS
const slides = document.querySelectorAll(".slide-card");
console.log(slides);
let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
if(index >= slides.length){
    slideIndex = 0;
}
else if(index < 0){
    slideIndex = slides.length -1;
}
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    console.log(slideIndex);
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
