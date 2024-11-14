(() => {
  // IIFE start
  console.info("Hello JS");
  const myNode = document.createElement("div");
  const digitalClock = document.getElementById("digitalClock");
  const secondHand = document.getElementById("secondHand");
  const minHand = document.getElementById("minHand");
  const hrHand = document.getElementById("hrHand");

  digitalClock.appendChild(myNode);

  const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", {
      timeStyle: "medium",
    });
    // analogue clock
    const seconds = myDate.getSeconds();
    const minutes = myDate.getMinutes();
    const hours = myDate.getHours() + minutes / 60;

    const rotSeconds = seconds * 6 - 90;
    const rotMins = minutes * 6 - 90;
    const rotHours = hours * 30 - 90;

    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    minHand.style.transform = `rotate(${rotMins}deg)`;
    hrHand.style.transform = `rotate(${rotHours}deg)`;
  };

  setInterval(updateTime, 1000);
  updateTime();

  // END
})();
