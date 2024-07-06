
# Project Title

A simple Frontend Application for restaurant manangement system


## Problem Statement:
"FOODIEDELIGHT" is a food delivery application. As part of this app, you need to build functionalities that help manage different restaurants and their menus.

    1. Add a new restaurant to the platform.
    2. Modify a restaurant's details on the platform.
    3. Delete a restaurant from the platform.
    4. Lists the restaurants on the platform.

## Solution
Created a web app to cater the above requirements. The app consists of the following modules

    • A screen where user can see all the restaurants with the necessary details like name, description, timings and location. The user can edit and delete the records.
    • To Add/Update restaurant have created a form to save the data and this data will be further used to display in the screen which displays all the restaurant
    • A search functionality has been added so that user can easily navigate to restaurants with searching and scrolling infinitely

## Techstack Used:
    Angular 18, PrimeNg

## Screenshots of the Application: 
    • Restaurants Screen: Screen to display all the restaurants
 
    Normal View

 
    Mobile View
    • Add/Update Screen

 
    Normal View
 
    Mobile View

## Technical Aspects of Application: 
    •	Have used a common service to store the data and have created methods to fetch the data, save the data and updating the same. Have used Rxjs to mimic asynchronous nature of API’s. 
    •	Implemented search functionality with using Rxjs operators like debounceTime, distinctUntillChanged and Switchmap, have made it such that there would be no repeated call if the user changes the search string and goes back to the orginal search string within the time limit of debounceTime and then even if the api call have started but not yet resolved then if new call is made then previous calls will be cancelled.
    •	Have made the design responsive 

## Time Distribution:
    •	Frontend Functionality:  3hrs
        o	Restaurants List Screen: 1hr
        o	Search functionality: 1hr
        o	Add/Update : 1hr
    •	Frontend presentational aspects: 2hrs
        o	Add/Update:  0.5hr
        o	Restaurants List Screen: 1hr
        o	Overall Aplication : 0.5hr
    •	Required Validations: 0.5hrs
    •	Unit Test Coverage: 0.5hrs(Manual Testing)
    •	Project Setup: 0.5hrs
    •	Documentation: 1hr

## Steps to Run the Application: 
    •	Clone the repo : git clone https://github.com/Dhruvil0208/ngRestaurantApp.git
    •	Run the code: ng serve –open
    •	By default the list of restaurants screen will open you can update and delete the restaurants by clicking on the buttons present
    •	Restaurants can be added by clicking the “Add Restaurant” button in header.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
