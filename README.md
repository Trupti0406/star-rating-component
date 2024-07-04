# Star Rating Component

## Problem Statement

Create a React component that implements a star rating functionality. The component should display a specified number of stars and allow the user to select a rating by clicking on the stars. The selected rating should be visually indicated, and the component should also display the current rating value.

## Key Points of the Solution

1. **State Management:**
   - `starValue`: A state variable to keep track of the selected rating.
   - `hoverValue`: A state variable to keep track of the rating value when hovering over the stars.

2. **Rendering Stars:**
   - Use the `Array` constructor and `fill` method to create an array representing the stars.
   - Map over the array to render each star.

3. **Star Interaction:**
   - Update `starValue` when a star is clicked to set the selected rating.
   - Update `hoverValue` when a star is hovered over to visually indicate the hovered rating.
   - Reset `hoverValue` when the mouse leaves a star.

4. **Styling:**
   - Conditionally apply a class to visually indicate selected and hovered stars.