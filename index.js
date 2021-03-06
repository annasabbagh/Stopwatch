const refs = {
    startBtn: document.querySelector("#start"),
    stopBtn: document.querySelector("#stop"),
    secondText: document.querySelector(".seconds"),
    minutesText: document.querySelector(".minutes"),
  };
  
  function timer() {
    result = Math.floor((new Date() - startDate) / 1000);
    seconds = result % 60;
    minutes = Math.floor(result / 60);
    refs.secondText.textContent = seconds < 10 ? `0${seconds}` : seconds;
    refs.minutesText.textContent = minutes < 10 ? `0${minutes}` : minutes;
  }
  
  let watchId = null;
  let startDate = null;
  let result = null;
  let seconds = null;
  let minutes = null;
  
  function startWatch() {
    startDate = new Date();
    watchId = setInterval(timer, 1000);
  }
  
  
  function stopWatch() {
    clearInterval(watchId);
  }
  
  refs.startBtn.addEventListener("click", startWatch);
  refs.stopBtn.addEventListener("click", stopWatch);
  
  const time = 126;
  console.log("minutes", Math.floor(126 / 60));
  console.log("seconds", 126 % 60);
  

// function addClasses() {
//   const modal = document.querySelector(".modal");
//   modal.classList.add("animate__bounce", "modal_show");
// }

// function showModal() {
//   setTimeout(addClasses, 2000);
// }
// window.addEventListener("DOMContentLoaded", showModal);



// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// date (new Date() getDate, getMonth, getFullYear, getDay, getTime, getHours, getMinutes, getSeconds, getMileseconds, now)
// const today = new Date()
// console.log(today);
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());
// console.log(Date.now());


  
  // stopwatch
  
  // class Stopwatch {
  //   constructor() {
  //     this.timerId = null;
  //     this.dateStart = null;
  //     this.startBtn = document.querySelector("#start");
  //     this.stopBtn = document.querySelector("#stop");
  //     this.sec = document.querySelector(".seconds");
  //     this.min = document.querySelector(".minutes");
  //     this.hours = document.querySelector('.hours')
  
  //     this.action = this.action.bind(this);
  //     this.start = this.start.bind(this);
  //     this.stop = this.stop.bind(this);
  //   }
  
  //   action() {
  //     const delta = Date.now() - this.dateStart;
  //     //   console.log(delta);
  //     const sec = Math.floor((delta / 1000) % 60);
  //     const minutes = Math.floor((delta / 1000 / 60) % 60);
  //     const hours = Math.floor((delta / 1000 / 60 / 60) % 24);
  
  //     this.sec.textContent = sec < 10 ? `0${sec}` : sec;
  //     this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
  //     this.hours.textContent = hours < 10 ? `0${hours}` : hours
  //   }
  
  //   start() {
  //     this.timerId = setInterval(this.action, 500);
  //     this.dateStart = Date.now();
  //   }
  
  //   stop() {
  //     clearInterval(this.timerId);
  //   }
  
  //   init() {
  //     this.startBtn.addEventListener("click", this.start);
  //     this.stopBtn.addEventListener("click", this.stop);
  //   }
  // }
  
  // const watch = new Stopwatch();
  // watch.init();