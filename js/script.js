document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carrosselInner = document.querySelector(".carrossel-inner");
    const carrosselItem = document.querySelectorAll(".carrossel-item");

    let i = 0;

    function atualizaCarossel() {
        const offset = -i * 100;
        carrosselInner.style.transform = `translateX(${offset}%)`;
    }

    function proximo() {
        i = (i + 1) % carrosselItem.length;
        atualizaCarossel();
    }

    function anterior() {
        i = (i - 1 + carrosselItem.length) % carrosselItem.length;
        atualizaCarossel();
    }

    nextBtn.addEventListener("click", proximo);
    prevBtn.addEventListener("click", anterior);
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navegacao = document.getElementById('navegacao');

    hamburger.addEventListener('click', function () {
        navegacao.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !navegacao.contains(event.target)) {
            navegacao.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    let modal = document.getElementById("myModal");

    let btn = document.getElementById("openModal");

    let span = document.getElementsByClassName("close")[0];

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let toggles = document.getElementsByClassName("toggle-content");
  
    Array.from(toggles).forEach(function(toggle) {
      toggle.addEventListener("click", function() {
        let popup = this.parentElement.nextElementSibling;
        if (popup.classList.contains("show")) {
          popup.classList.remove("show");
          setTimeout(function() {
            popup.style.display = "none";
          }, 0); 
        } else {
          popup.style.display = "block";
          setTimeout(function() {
            popup.classList.add("show");
          }, 10);
        }
      });
    });
  });
  