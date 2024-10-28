const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Agrega un evento de clic a cada checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    // Si el checkbox está seleccionado
    if (checkbox.checked) {
      // Desmarca todos los demás checkbox
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

//Instagram
console.clear(); // Limpia la consola al cargar

// Selección del contenedor del slider
const slider = document.querySelector(".slider-I");
const items = gsap.utils.toArray(".item-I");
const offset = 30;

function moveCard() {
  const lastItem = slider.querySelector(".item-I:last-child");

  if (slider && lastItem) {
    // Mueve el último elemento al principio del slider sin clonarlo
    slider.insertBefore(lastItem, slider.firstChild);
  }
}

// Escucha los clics en las cartas (elementos con clase `.item-I`)
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Obtiene el estado inicial de los elementos con Flip
    let state = Flip.getState(".item-I");

    // Mueve la tarjeta
    moveCard();

    // Aplica la animación con Flip
    Flip.from(state, {
      targets: ".item-I",
      ease: "sine.inOut",
      absolute: true,
      onEnter: (elements) => {
        // Anima la entrada de los nuevos elementos
        return gsap.from(elements, {
          yPercent: 20,
          opacity: 0,
          ease: "sine.out"
        });
      },
      onLeave: (element) => {
        // Anima la salida de los elementos anteriores
        return gsap.to(element, {
          yPercent: 20,
          xPercent: -20,
          transformOrigin: "bottom left",
          opacity: 0,
          ease: "sine.out"
        });
      }
    });
  });
});

//header
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbarCelular = document.getElementById('navbar-celular');
  
  // Estado inicial del menú cerrado
  let menuVisible = false;

  // Agregar evento click al ícono del menú
  menuIcon.addEventListener('click', function() {
      menuVisible = !menuVisible; // Cambiar el estado
      if (menuVisible) {
          navbarCelular.style.display = 'block'; // Mostrar menú
      } else {
          navbarCelular.style.display = 'none'; // Ocultar menú
      }
  });
});
const cards = document.querySelectorAll('.cardT');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Alternamos la clase 'flipped' cada vez que se hace clic en la tarjeta
            card.classList.toggle('flipped');
        });
    });