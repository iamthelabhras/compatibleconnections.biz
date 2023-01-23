// Confirm this JavaScript file was successfully imported.
console.log("😊 HEARTS_COACH_BERNADETTE.JS: SUCCESSFULLY IMPORTED!");

(function () {
  // Get random number between 2 ranges
  function randomNum(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }

  function heartsCoachBernadetteAnimate () {
    let hearts = document.getElementById("hearts_coach_bernadette");
    let heartCount =
      (parseFloat(getComputedStyle(hearts, null).width.replace("px", "")) /
        50) *
      5;
    for (let i = 0; i < heartCount; i++) {
      console.log("➰ HEARTS_COACH_BERNADETTE.JS: IN THE HEART LOOP!");
      let heartSize = randomNum(60, 120) / 10;
      const spanEl = document.createElement('span');
      console.log("--- hcb loop iteration: " + "#" + i);
      console.log("--- hcb loop heart size: " + heartSize);
      console.log("--- hcb loop heart position: " + randomNum(40, 80));
      spanEl.style.top = randomNum(40, 80) + "%";
      spanEl.style.left = randomNum(0, 100) + "%";
      spanEl.style.width = heartSize + "px";
      spanEl.style.height = heartSize + "px";
      spanEl.style.animationDelay = randomNum(0,3) + "s";
      spanEl.style.animationDuration = randomNum(2.5) + "s";
      spanEl.classList.add('hearts_coach_bernadette__heart');
      hearts.appendChild(
        spanEl
      );
    }
  }
  heartsCoachBernadetteAnimate();
})();