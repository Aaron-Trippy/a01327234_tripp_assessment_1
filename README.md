# Assessment 1
## Created by
Aaron Tripp A01327234

## Description 
This website was made for the Advanced Dynamic Content Design course (MDIA-3109) at BCIT.
The purpose of this assessment is to practice using NextJS, Tailwind, TypeScript, and Cypress.

As per the assessment, I did some unit testing to test for:
- an image on the page
- two buttons on the page
- a link going to kaggle (data source)
- an h1 tag on the page
- a header on the page
- a footer on the page

I also did two custom tests:
- the word "Canada" appearing anywhere
- a number (population) larger than one billion

## Methods Used
Below are a list of some Cypress methods I used as well as a short description (to the best of my ability)
- cy.visit: takes a url input. I used this at the start of all my tests to set the website to "localhost:3000"
- cy.get: locates an element in the DOM
- cy.contains: similar to cy.get but it locates text within an element
- cy.origin: I don't fully understand this one, but the Cypress error logs said to use it. From what I've found online, it "allows your tests to bypass the limitation of running commands in a single origin"
- console.log: outputs information to the console

## Links
Title: Best Country to Live in 2024
Creator: Rafsun Ahmad
URL: [Kaggle - Best Country to Live in 2024](https://www.kaggle.com/datasets/rafsunahmad/best-country-to-live-in-2024)
