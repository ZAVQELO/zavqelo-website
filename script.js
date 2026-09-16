/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking */

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   ANIMATED COUNTERS
========================= */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    const statsSection =
        document.querySelector(".hero-stats");

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect().top;

    if (
        position <
        window.innerHeight &&
        !counterStarted
    ) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                target / 50;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* =========================
   MOUSE GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const project =
            document.getElementById("project").value;

        const message =
            document.getElementById("message").value;


        if (
            name === "" ||
            email === "" ||
            project === "" ||
            message === ""
        ) {

            alert(
                "Please fill all the fields."
            );

            return;

        }


        alert(
            "Thank you " +
            name +
            "! Your project request has been received."
        );


        contactForm.reset();

    }
);


/* =========================
   SERVICE CARD TILT
========================= */

const cards =
    document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        }
    );

});