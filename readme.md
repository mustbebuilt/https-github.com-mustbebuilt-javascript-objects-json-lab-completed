**Tutorial: Creating Digital and Analogue Clocks with JavaScript**

In this tutorial, you will learn how to create both a digital and analogue clock using HTML, CSS, and JavaScript. We'll start by setting up the basic HTML structure and attaching the JavaScript code using an Immediately Invoked Function Expression (IIFE).

**Step 1: Setting up the HTML Structure**

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, title, and CSS links -->
  </head>
  <body>
    <div class="container">
      <header>
        <!-- Navigation and site title -->
      </header>
      <div class="main">
        <div class="contentLeft">
          <h2>Digital</h2>
          <div id="digitalClock"></div>
        </div>
        <div class="contentLeft">
          <h2>Analogue</h2>
          <div id="clockFace">
            <!-- Clock hands and pin -->
          </div>
        </div>
      </div>
      <footer>&copy; 2022 mustbebuilt</footer>
    </div>
  </body>
</html>
```

**Step 2: Creating the IIFE and Digital Clock**

```javascript
(() => {
  // IIFE start
  console.info("Hello JS");
  const myNode = document.createElement("div");
  const digitalClock = document.getElementById("digitalClock");

  digitalClock.appendChild(myNode);

  const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { timeStyle: "medium" });
  };

  setInterval(updateTime, 1000);
  updateTime();

  // IIFE end
})();
```

In this step, we've created an IIFE to encapsulate our JavaScript code. The `console.info("Hello JS");` line is just to confirm that our script is being executed. We've also selected the `digitalClock` element and added a new `div` element (`myNode`) inside it to display the current time.

The `updateTime` function fetches the current time using the `Date` object and updates the `myNode` element with the formatted time. We use `setInterval` to call `updateTime` every second, ensuring that the clock is updated in real-time.

**Step 3: Building the Analogue Clock**

To create the analogue clock, we need to adjust our HTML structure and add CSS for styling the clock hands and pin. We'll also update the JavaScript code to rotate the clock hands based on the current time.

```css
/* Add this to your CSS file */
#clockFace {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0 auto;
}

#secondHand,
#minHand,
#hrHand,
#pin {
  position: absolute;
  transform-origin: center bottom;
}

#secondHand {
  background-color: #f00;
  width: 2px;
  height: 90px;
  top: 5px;
  left: 99px;
  transform: rotate(0deg);
  transition: transform 0.5s cubic-bezier(0.4, 2.25, 0.25, 1);
}

#minHand {
  background-color: #000;
  width: 4px;
  height: 70px;
  top: 15px;
  left: 98px;
  transform: rotate(0deg);
  transition: transform 0.5s cubic-bezier(0.4, 2.25, 0.25, 1);
}

#hrHand {
  background-color: #000;
  width: 4px;
  height: 50px;
  top: 35px;
  left: 98px;
  transform: rotate(0deg);
  transition: transform 0.5s cubic-bezier(0.4, 2.25, 0.25, 1);
}

#pin {
  background-color: #000;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 97px;
  left: 97px;
}
```

```javascript
// Update the existing JavaScript code
const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");

const updateClockHands = (myDate) => {
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

const updateTime = () => {
  console.info("tick tock");
  const myDate = new Date();
  myNode.innerHTML = myDate.toLocaleTimeString([], { timeStyle: "medium" });
  updateClockHands(myDate);
};

// Rest of the code remains the same
```

In this step, we've added CSS styles to create the analogue clock hands and pin. We've also updated the JavaScript code to include the `updateClockHands` function, which calculates the rotation angles for the clock hands based on the current time.

By combining the HTML, CSS, and JavaScript, you've successfully created both a digital and analogue clock that updates in real-time.

Congratulations! You've learned how to build digital and analogue clocks using HTML, CSS, and JavaScript. You can further customize the styling and animations to create a unique clock display.