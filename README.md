# React Image Slider Component

This React component implements a simple image slider that fetches images from an API and displays them in a rotating carousel.

## Features

-   Fetches images from an external API using `axios`.
-   Displays images in a slider with auto-rotation.
-   Pauses auto-rotation on mouse hover.
-   Resumes auto-rotation when the mouse leaves.
-   Provides navigation using left and right arrow icons.
-   Displays a loading message while images are being fetched.

## Installation

1.  **Clone the repository (or copy the component file into your React project):**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install axios react-icons
    ```

    or

    ```bash
    yarn add axios react-icons
    ```

    Note: `react-icons` is assumed to be used for the arrow icons. If you're using a different icon library, adjust the import accordingly.

## Usage

1.  **Import the component:**

    ```jsx
    import Slider from "./Slider"; // Adjust the path as needed
    ```

2.  **Use the component in your React application:**

    ```jsx
    function App() {
      return (
        <div>
          <Slider />
        </div>
      );
    }

    export default App;
    ```

3.  **Set your API URL in `constant.js`:**

    Create a `constant.js` file in the same directory (or adjust the import path) with the following content:

    ```javascript
    export const API_URL = "YOUR_API_URL"; // Replace with your API URL
    ```

    Replace `YOUR_API_URL` with the actual API endpoint that returns an array of image objects. The API response should have a `hits` property containing an array of objects, where each object has a `webformatURL` property for the image URL.

## Component Structure

-   **State Variables:**
    -   `slideImg`: An array to store the fetched image data.
    -   `currentIndex`: Tracks the index of the currently displayed image.
    -   `autoSlide`: Controls the auto-rotation of the slider.

-   **`useEffect` Hooks:**
    -   Fetches image data from the API on component mount.
    -   Sets up an interval for auto-rotation, which is cleared on component unmount or when `autoSlide` or `slideImg` changes.

-   **Event Handlers:**
    -   `nextSlide`: Increments `currentIndex` to display the next image.
    -   `handleMouseEnter`: Pauses auto-rotation when the mouse hovers over the image container.
    -   `handleMouseLeave`: Resumes auto-rotation when the mouse leaves the image container.

-   **Rendering:**
    -   Displays the current image using an `<img>` tag.
    -   Shows a "Loading..." message while images are being fetched.
    -   Provides left and right arrow icons for manual navigation.

## Styling

-   The component uses inline styles and assumes that you have an icon library (like `react-icons`) installed.
-   You can customize the styling by modifying the `className` attributes and adding your own CSS.
-   The component is designed to be placed inside a container with `h-screen` to take the full height of the viewport, but can be modified.

## API Requirements

-   The API should return a JSON response with a `hits` property.
-   The `hits` property should be an array of objects.
-   Each object in the `hits` array should have a `webformatURL` property containing the URL of the image.

## Example API Response

```json
{
  "hits": [
    {
      "webformatURL": "[https://example.com/image1.jpg](https://www.google.com/search?q=https://example.com/image1.jpg)"
    },
    {
      "webformatURL": "[https://example.com/image2.jpg](https://www.google.com/search?q=https://example.com/image2.jpg)"
    },
    {
      "webformatURL": "[https://example.com/image3.jpg](https://www.google.com/search?q=https://example.com/image3.jpg)"
    }
  ]
}
