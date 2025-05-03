//1.Event handling for the form submission
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  console.log('Button clicked!');
  // Add your action here, like changing text or color
});



//hover effects
const myElement = document.getElementById('hoverElement');

myElement.addEventListener('mouseover', () => {
  myElement.style.backgroundColor = 'lightblue';
});

myElement.addEventListener('mouseout', () => {
  myElement.style.backgroundColor = ''; // Revert to original
});

//key press detection
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    // You can check for specific keys here, e.g., if (event.key === 'Enter') { ... }
  });

  //double click detection
  const secretElement = document.getElementById('secretAction');
secretElement.addEventListener('dblclick', () => {
  alert('Double-click secret activated!');
});

//long press detection
const longPressElement = document.getElementById('longPress');
let pressTimer;

longPressElement.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press detected!');
  }, 1500); // Adjust the time (in milliseconds) for the long press
});

longPressElement.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

