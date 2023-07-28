let imageBox = document.getElementById("img-box");
let items = document.getElementById("list-item");
let image = document.getElementById("img");
let text = document.getElementById("text");
let registerForm = document.getElementById("register");
let registerLink = document.getElementById("register-link");
let buttonRegister = document.getElementById("btn-register");
let registerInput = document.getElementById("inp-name");
let registerPassword = document.getElementById("inp-password");
let loginForm = document.getElementById("login");
let loginRegister = document.getElementById("btn-login");
let loginInput = document.getElementById("inp-login-name");
let loginPassword = document.getElementById("inp-login-password");
let modalmsg = document.getElementById("msg");
let loginButton = document.getElementById("btn-log-in");
let logoutButton = document.getElementById("btn-log-out");
let buttonCourse = document.querySelectorAll(".btn-course");
let userWelcome = document.getElementById("userWelcome");
let admin = document.getElementById("admin");
let Loginmsg = document.getElementById("login-msg");
let welcomeUser = document.getElementById("userName");
let mainInput;
let mainPassword;
let check1;
let check2;
let adminUsername = document.getElementById("adminUsername");
let examButton1 = document.getElementById("btn-start-quiz-1");
let examButton2 = document.getElementById("btn-start-quiz-2");
let examButton3 = document.getElementById("btn-start-quiz-3");
let examButton4 = document.getElementById("btn-start-quiz-4");
let closeRegButton = document.getElementById("close-register");
let closeLogButton = document.getElementById("close-login");
let coursesSection = document.getElementById("courses");
let card = document.getElementById("card");

closeRegButton.addEventListener("click", function () {
  registerForm.classList.add("hidden");
});

closeLogButton.addEventListener("click", function () {
  loginForm.classList.add("hidden");
});

let adminDetails = {
  registeredUsername: "Rakesh",
  registerPassword: "123",
};

localStorage.setItem("admin", JSON.stringify(adminDetails));

admin.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.classList.remove("hidden");
  loginRegister.addEventListener("click", function () {
    if (
      loginInput.value === adminDetails["registeredUsername"] &&
      loginPassword.value === adminDetails["registerPassword"]
    ) {
      admin.classList.add("hidden");
      // admin.textContent = localStorage.getItem("admin");
      window.open("admin.html");
    } else {
      modalmsg.textContent = `INVALID ADMIN CREDENTIALS`;
    }
  });
});
let currentAccount;
let accounts = [];
let userObj = {};
let account;

window.onload = () => {
  let data = JSON.parse(localStorage.getItem("account"));
  account = localStorage.getItem("currentAccount");
  console.log(account);

  if (account) {
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");
    Loginmsg.classList.remove("hidden");
    Loginmsg.textContent = "succesfully logged in";
    Loginmsg.classList.remove("logout-msg");
    Loginmsg.classList.add("login-msg");
    modalmsg.classList.add("hidden");
    userWelcome.classList.remove("hidden");
    let value = Object.values(account).join("").toString().split('"')[3];
    console.log(value);
    welcomeUser.textContent = value;
  }

  function check(item) {
    return item != null || undefined;
  }

  data = data.filter(check);
  console.log(data);
  if (!data) return;

  accounts.push(...data);
  accounts.push(currentAccount);

  accounts = accounts.filter(check);
  console.log(accounts);
};

examButton1.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginButton.classList.contains("hidden")) {
    window.open("quiz1.html");
  } else {
    alert("pls login to continue");
  }
});

examButton2.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginButton.classList.contains("hidden")) {
    window.open("quiz2.html");
  } else {
    alert("pls login to continue");
  }
});

examButton3.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginButton.classList.contains("hidden")) {
    window.open("quiz3.html");
  } else {
    alert("pls login to continue");
  }
});
examButton4.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginButton.classList.contains("hidden")) {
    window.open("quiz4.html");
  } else {
    alert("pls login to continue");
  }
});

for (i = 0; i < buttonCourse.length; i++) {
  buttonCourse[i].addEventListener("click", function () {
    if (loginButton.classList.contains("hidden")) {
      window.open("checkout.html");
    } else {
      alert("pls login to continue");
    }
  });
}

buttonRegister.addEventListener("click", function (e) {
  mainInput = registerInput.value;
  mainPassword = registerPassword.value;

  userObj = {
    registeredUsername: mainInput,
    registerPassword: mainPassword,
  };

  accounts.push(userObj);
  console.log(accounts);

  Loginmsg.classList.remove("hidden");
  registerForm.classList.add("hidden");
  Loginmsg.classList.add("login-msg");
  Loginmsg.classList.remove("logout-msg");
  Loginmsg.textContent = "succesfully registered";
  localStorage.setItem("account", JSON.stringify(accounts));
});

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.classList.remove("hidden");
});

loginRegister.addEventListener("click", function (e) {
  e.preventDefault();
  mainInput = loginInput.value;
  mainPassword = loginPassword.value;

  currentAccount = accounts.find(
    (acc) =>
      acc.registeredUsername === mainInput &&
      acc.registerPassword === mainPassword
  );

  loginForm.classList.add("hidden");
  console.log(currentAccount);
  if (
    currentAccount?.registeredUsername === mainInput &&
    currentAccount?.registerPassword === mainPassword
  ) {
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");
    Loginmsg.classList.remove("hidden");
    Loginmsg.textContent = "succesfully logged in";
    Loginmsg.classList.remove("logout-msg");
    Loginmsg.classList.add("login-msg");
    modalmsg.classList.add("hidden");
    userWelcome.classList.remove("hidden");
    welcomeUser.textContent = mainInput;
    localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
  }
});

logoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("currentAccount");
  loginButton.classList.remove("hidden");
  logoutButton.classList.add("hidden");
  userWelcome.classList.add("hidden");
  welcomeUser.textContent = "";
  Loginmsg.classList.remove("login-msg");
  Loginmsg.classList.add("logout-msg");
  Loginmsg.textContent = "succesfully logged out";
  modalmsg.classList.remove("hidden");
});

registerLink.addEventListener("click", function () {
  registerForm.classList.remove("hidden");
});

let textArr = [
  "Budget Friendly Courses",
  "Industry Recognized Certificates",
  "Online Tests",
  "One-to-One Mentoring",
  "And Many More",
];

i = -1;

function changeImage() {
  i += 1;
  image.src = `images/weTeach${i + 1}.jpg`;
  items.children[i].style.cssText = "color:green";
  if ((items.children[i].style.cssText = "color:green")) {
    if (i !== 0) {
      items.children[i - 1].style.cssText = "color:none";
    }
  }

  if (i == 3) {
    items.children[3].style.cssText = "color:green";
  } else {
    items.children[3].style.cssText = "color:none";
  }

  if (i == items.children.length - 1) {
    i = -1;
  }
}

setInterval(changeImage, 2000);

const slides = document.querySelectorAll(".img-slider-images");
let curSlide = -1;
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const maxSlide = slides.length;
const slider = document.querySelector(".img-slider");

a = -1;

function moveSlide() {
  a += 1;
  text.textContent = textArr[a];
  if (curSlide === maxSlide - 2) {
    curSlide = -1;
    text.textContent = "High Quality Content";
    a -= 1;
  } else {
    curSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );

  if (a == textArr.length - 1) {
    a = -1;
  }
}

setInterval(moveSlide, 2000);
