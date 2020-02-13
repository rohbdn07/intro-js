// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");

function run_the_clock() {
  var HOURHAND = document.querySelector("#hour");
  var MINUTEHAND = document.querySelector("#minute");
  var SECONDHAND = document.querySelector("#second");
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  var deltaSec = 6 * sec;
  var deltaMin = 6 * min;
  var deltaHr = 6 * hr;
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  // let hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;
  // let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
  // let secPosition = (sec * 360) / 60;

  setInterval(function() {
    deltaSec += 6;
    deltaMin += 6 / 60;
    deltaHr += 6 / 3600;
    HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
    MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
    SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";
  }, 1000);

  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  // HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  // MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  // SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// var interval = setInterval(run_the_clock, 1000);
run_the_clock();

// function ready(fn) {
//   if (document.readyState != "loading") {
//     fn();
//   } else {
//     document.addEventListener("DOMContentLoaded", fn);
//   }
// }

// ready(run_the_clock);
