 ## Grid Sketch Pad

This is a simple grid sketch pad that allows you to draw using a variety of colors. The grid size can be changed by entering a number between 1 and 100 in the prompt that appears when you click the "Reset Grid" button.

### How to use

To use the sketch pad, simply move your mouse over the grid. The squares that you hover over will be filled with a random color. The darkness of the color will increase as you continue to hover over the square.

You can reset the grid at any time by clicking the "Reset Grid" button.

### Code

The code for the sketch pad is divided into three files:

* `app.js`
* `index.html`
* `style.css`

#### `app.js`

The `app.js` file contains the JavaScript code for the sketch pad. The main function in this file is `createGrid()`, which creates the grid of squares. The function takes a single argument, which is the size of the grid.

The `createGrid()` function first clears the container element of any existing squares. Then, it creates a new square element for each square in the grid. The square elements are added to the container element using the `appendChild()` method.

The `createGrid()` function also sets the grid template columns property of the container element. This property determines the number of columns in the grid.

The `randomColor()` function generates a random color. The function returns a string containing the RGB values of the color.

The `interactionCount` variable is used to keep track of the number of times the user has interacted with the grid. The variable is incremented each time the user hovers over a square.

The `container` element has a `mouseover` event listener that listens for mouseover events on the squares. When a mouseover event occurs, the `interactionCount` variable is incremented and the `square` element that triggered the event is filled with a random color.

The `resetButton` element has a `click` event listener that listens for click events on the button. When a click event occurs, the user is prompted to enter a new grid size. If the user enters a valid number, the `createGrid()` function is called with the new grid size.

#### `index.html`

The `index.html` file contains the HTML code for the sketch pad. The file includes the `app.js
