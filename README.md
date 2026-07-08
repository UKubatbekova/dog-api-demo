# Dog API Demo

A lightweight, browser-based app that fetches and displays random dog images using the Dog CEO API. No frameworks, no dependencies — just plain HTML, CSS, and vanilla JavaScript.

## Folder Structure:

- index.html
- styles.css
- main.js
- README.md

## Features:

- Single-image button that fetches and displays one random dog photo
- Multiple-image button that fetches and displays three random dog photos in a grid
- Loading indicator while a request is in flight
- Error message if a request fails
- Buttons disable themselves during a request to prevent duplicate clicks

## How to Run:

- Download the project folder
- Open index.html in any modern web browser
- Click "Get Single Random Dog Image" or "Get Multiple Random Dog Images" to load photos

## Technologies Used:

- HTML
- CSS
- JavaScript
- Dog CEO API — https://dog.ceo/dog-api/

## How It Works:

Clicking a button triggers a fetch request to the Dog CEO API
While the request is in progress, a "Loading..." message is shown
On success, the returned image URL(s) are inserted into the page as <img> elements
On failure, an error message is displayed instead
The button is disabled while the request runs, then re-enabled once it finishes

## API Reference

- Single random image https://dog.ceo/api/breeds/image/random
- Multiple random images (3) https://dog.ceo/api/breeds/image/random/3

## Project Purpose:

This project was created as a learning exercise to practice working with fetch, async/await, and dynamic DOM rendering in vanilla JavaScript.

## Author:

- Designed and built by Umsunai Kubatbekova
- LinkedIn: https://www.linkedin.com/in/ukubatbekova

## License:

This project is for educational use and personal portfolio purposes only.
