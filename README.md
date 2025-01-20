# Weather Application

This project is a simple weather application built using JavaScript that fetches real-time weather data from the OpenWeatherMap API and displays it on the webpage. It demonstrates key concepts of front-end web development, including DOM manipulation, API integration, and event handling.

## Features

### 1. **DOM Manipulation**
   - Grabs references to HTML elements such as temperature, description, and location input fields using `document.getElementById` and `document.querySelector`.
   - Updates the DOM dynamically based on the data retrieved from the weather API.

### 2. **Event Handling**
   - Listens for the `DOMContentLoaded` event to ensure the DOM is fully loaded before executing the JavaScript code.
   - Handles user interaction by listening for a `click` event on the search button, triggering the weather fetching process.

### 3. **User Input Handling**
   - Validates user input to ensure the user has entered a city name before fetching the weather data.
   - Displays an alert if no city is entered.

### 4. **API Integration**
   - Fetches weather data from the OpenWeatherMap API using the `fetch` method.
   - Processes the API response and dynamically updates the UI based on the retrieved data.

### 5. **JSON Parsing**
   - Uses `.then(response => response.json())` to parse the JSON data returned by the API.

### 6. **Error Handling**
   - Implements error handling using `.catch((err) => console.log(err))` to manage any issues during the `fetch` request.

### 7. **Dynamic Data Display**
   - Dynamically generates HTML content based on the weather data and injects it into the page.
   - Displays the city name, temperature, weather description, and weather icon.

### 8. **Asynchronous Programming**
   - Utilizes Promises with `fetch` to handle asynchronous operations without blocking the main thread.

### 9. **Template Literals**
   - Uses ES6 template literals to dynamically construct the HTML structure, improving readability and maintainability.

### 10. **Mathematical Operations**
   - Converts the temperature from Kelvin to Celsius using `Math.round()`.

### 11. **Image Handling**
   - Dynamically loads weather icons based on the API response.

### 12. **Basic UI/UX Concepts**
   - Provides user feedback, including validation alerts and dynamic updates to the UI based on user input.
