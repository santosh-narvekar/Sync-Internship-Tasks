let box = document.getElementById("box");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const header = document.getElementById("header");
let proof = document.getElementById("waterProof");
let heading = document.getElementById("heading-tertiary");
let features = document.querySelectorAll(".features1");
let img = document.getElementById("grid-img");
let desc = document.getElementById("hero-description");
let sectionHero = document.getElementById("section-hero");
const imageGroup = document.querySelectorAll(".select-img");
const imageBox = document.querySelector(".img-box");
const heroImg = document.getElementById("hero-img-box");
const IMAGE = document.getElementById("hero-img");
const card = document.querySelectorAll(".card-img");
const allLinks = document.querySelectorAll("a:link");
let card1 = document.getElementById("card-img1");
let card2 = document.getElementById("card-img2");
let card3 = document.getElementById("card-img3");
let card4 = document.getElementById("card-img4");
const button = document.querySelectorAll(".buy-now");
const sectionHeroEl = document.querySelector(".section-hero");

let images = [
  "img/detailed-noise.webp",
  "img/detailed-noise-4.webp",
  "img/detailed-noise-2.webp",
  "img/detailed-noise-3.webp",
  "img/detailed-noise-1.webp",
  "img/detailed-noise.webp",
];
const slides = document.querySelectorAll(".slide");
let curSlide = 0;
const maxSlide = slides.length - 1;
let z = 1;
let t = -1;
let v = 0;
let i = 0;
let colors = ["black", "black", "blue", "darkwhite"];
let colors1 = ["black", "white", "blue", "darkwhite"];

btnNavEl.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

function goToSlide(curSlide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
}

const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide + 1;
  } else {
    curSlide--;
    goToSlide(curSlide);
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

setInterval(prevSlide, 3000);

img.classList.add("visibility");
function automate(s, i) {
  img.classList.remove("visibility");
  t += 1;

  setTimeout(function () {
    console.log(t);
    if (!features[t].classList.contains("colorChange")) {
      features[t].classList.add("colorChange");
      if (t + 1) {
        if (t == 0) {
          features[features.length - 1].classList.remove("colorChange");
        }
        features[t - 1].classList.remove("colorChange");
      }
    }
  }, 0);

  img.src = images[t];
  if (t == features.length) {
    t = 0;

    img.src = images[t];
  }

  img.style.height = "30rem";
  img.style.width = "50rem";
  img.style.margin = "0rem 0rem 1rem 3.5rem";

  if (t === features.length) {
    t = 0;
  }
}

setInterval(automate, 5000);


function auto() {
  v += 1;
  IMAGE.src = `img/noise-headphones-${v}.webp`;

  setTimeout(function () {
    if (v >= 1) {
      imageGroup[v - 1].classList.add(`select_img_${v - 1}`);
      if (v === 2) {
        imageGroup[imageGroup.length - v - 2].classList.remove(
          `select_img_${imageGroup.length - v - 2}`
        );
      }

      if (v === 3) {
        imageGroup[imageGroup.length - v].classList.remove(
          `select_img_${imageGroup.length - v}`
        );
      }
      if (v == 1) {
        imageGroup[imageGroup.length - 1].classList.remove(
          `select_img_${imageGroup.length - 1}`
        );
      }
    } else {
      imageGroup[v + imageGroup.length - 1].classList.add(
        `select_img_${v + imageGroup.length - 1}`
      );

      if (v === 0) {
        imageGroup[imageGroup.length - 2].classList.remove(
          `select_img_${imageGroup.length - v - 2}`
        );
      }
    }
  }, 0);

  if (v == imageGroup.length) {
    v = 0;
  }
}

setInterval(auto, 2500);

// scrolling animatiton

console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to Top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: smooth,
      });

    // Scroll back to Down
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function changeImage() {
  i += 1;

  console.log(i);
  card.forEach(function (_, i) {
    card[i].src = `img/noise-headphones-${i + 1}-rotated-${colors[i]}-one.webp`;
  });

  if (i === card.length - 1) {
    card.forEach(function (_, i) {
      card[i].src = `img/noise-headphones-${i + 1}-anothercurved-${
        colors1[i]
      }-one.webp`;
    });
  }

  if (i === card.length - 2) {
    card.forEach(function (_, i) {
      card[i].src = `img/noise-headphones-${i + 1}-anotherrotated-${
        colors1[i]
      }-one.webp`;
    });
  }
  if (i === card.length) {
    i = 0;
    card.forEach(function (s, i) {
      card[i].src = `
      img/noise-headphones-${i + 1}.webp`;
    });
  }
}

setInterval(changeImage, 5000);

// Reveal Section

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
