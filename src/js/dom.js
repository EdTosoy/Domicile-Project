const showCaseBtn = document.querySelector(".showcase-btn");
const rightRoom = document.querySelector(".right-room");
const leftRoom = document.querySelector(".left-room");

showCaseBtn.addEventListener("click", () => {
  leftRoom.innerHTML = `
    <div class="information">
        <h2>Standard Room</h2>
        <ul>
            <li>20 <span>Sqm.</span></li>
            <li>Bed Type: <span>Single</span> / <span>twin</span></li>
        </ul>
        <div class="room-detail">
            <p>Room Detail:</p>
            <p>
            Suitable for solo travelers, Superior Rooms can also handle double occupancy.
            </p>
        </div>
    </div>
    <div class="over-lay">
    <a href="href="https://www.paypal.com/signin" target="_blank"" class="btn-primary">Book now</a>
    <h2>Standard Room</h2>
    </div>`;
  leftRoom.classList.toggle("next-room-left");
  rightRoom.innerHTML = `
    <div class="information">
        <h2>Classic Suite</h2>
        <ul>
            <li>40 <span>Sqm.</span></li>
            <li>Bed Type: <span>Large</span> / <sp
            an>Single</span></li>
        </ul>
        <div class="room-detail">
            <p>Room Detail:</p>
            <p>
            the Classic Suite is a good choice for families, it can accommodate 6 people.
            </p>
        </div>
    </div>
    <div class="over-lay">
    <a href="href="https://www.paypal.com/signin" target="_blank"" class="btn-primary">Book now</a>
    <h2>Classic Suite</h2>
    </div>`;
  rightRoom.classList.toggle("next-room-right");
});

const landingPage = document.querySelector(".landing-page");
const nextBtnCtrl = document.querySelector(".right");
const prevBtnCtrl = document.querySelector(".left");
const facility = document.querySelector(".facility");

import chef from "../img/chef.jpg";
import domicile from "../img/DOMICILE.jpg";
import leaders from "../img/Leaders.jpg";
import service from "../img/service.jpg";

const backgrounds = [
  {
    name: "Out Door Pool",
    bg: domicile,
    size: "200",
    staffs: 20,
  },
  {
    name: "Kitchen",
    bg: chef,
    size: "30",
    staffs: 30,
  },
  {
    name: "Leaders",
    bg: leaders,
    size: "400",
    staffs: 12,
  },
  {
    name: "Maintainance",
    bg: service,
    size: "400",
    staffs: 50,
  },
];

let bgCounter = 0;

nextBtnCtrl.addEventListener("click", () => {
  next();
});
prevBtnCtrl.addEventListener("click", () => {
  prev();
});

const next = () => {
  bgCounter++;
  if (bgCounter > 3) {
    bgCounter = 0;
  }
  landingPage.style.backgroundImage = `url(${backgrounds[bgCounter].bg})`;
  facility.innerHTML = `
  <h1>${backgrounds[bgCounter].name}</h1>
  <div class="details">
    <span>${backgrounds[bgCounter].size}sq metters</span>
    <span>${backgrounds[bgCounter].staffs}+ Staffs</span>
  </div>`;
};
const prev = () => {
  bgCounter--;
  if (bgCounter < 0) {
    bgCounter = 3;
  }
  landingPage.style.backgroundImage = `url(${backgrounds[bgCounter].bg})`;
  facility.innerHTML = `
  <h1>${backgrounds[bgCounter].name}</h1>
  <div class="details">
    <span>${backgrounds[bgCounter].size}sq metters</span>
    <span>${backgrounds[bgCounter].staffs}+ Staffs</span>
  </div>`;
};

const slide = () => {
  next();
};

setInterval(() => {
  slide();
}, 10000);

console.log(facility);
