![Project Logo][logopath "gaming library"]

[logopath]: ./public/images/logo/logo.jpg?raw=true

<hr>

# Gaming Library

## React Personal Project No: 1

![Home Page][homeexample "home page"]
[homeExample]: ./public/images/example/homePage.jpg?raw=true

# Table of Contents

1. Project Summary
2. Purpose of the Project
3. Coding
   - Language
   - Libraries
   - Styling
   - Database
4. Files & Functions
   1. public
      - images
      - index.html
   2. src
      - assets/imgs
        - games
        - header
        - links
      - CSS
        - game/table.css
        - main
          1. game.css
          2. games.css
          3. home.css
        - navbar
          1. searchForm
             - inputDiv.css
             - searchResultsDiv.css
             - typeDiv.css
             - typesDiv.css
          2. headerDiv.css
        - index.css
        - load.css
      - hooks
        - useDispatch.js
        - useFilter.js
        - useLength.js
        - useScroll.js
        - useTypes.js
        - useURL.js
        - useWidth.js
      - links
      - navbar
      - pages
      - utilities
      - App.js
      - gamesList.json
      - index.js
      - Load.js
   3. .gitignore
5. Videos
6. Live Page
7. Credits
8. Licence

<hr>

# Project Summary

Gaming library categorizes games by their genres, platforms, years etc. This way we can easily find the games we are searching for either by manually finding via homepage links or with the search bar on top. We can also save our favorite games by clicking an icon to reach them easily in the future.

I do not upload all the images to decrease repo size therefore you would not be able to download and run it. You can check the live page from section 6.

<hr>

# Purpose of the Project

I wanted to test my react skills to create a more complex project than I have ever created. This is a personal project which I created in my free times in my first semester of IT.

<hr>

# Coding

## Language

- [x] JavaScript

## Libraries

- [x] React
- [x] Jquery

## Styling

- [x] CSS

## Database

- [x] JSON
- [x] Local Storage

<hr>

# Files & Functions

## public

### images

This is a folder which contains the logo of the page to be able to use in html file. It is used to show the logo in browsers.

This folder also contains an example folder to upload an example screenshot of the page to this article.

### index.html

Contains the root div for react and logo links.

## src

### assets/imgs

Contains 3 folders which keeps all the imgs for the app. All images are resized to 500px width to decrease size of the app.

#### games

This folder keeps all the imgs of games by their name. Each game has its own folder and those folder have 3 images named "1.jpg", "2.jpg", "3.jpg".

#### header

Contains the home page link image

#### links

This folder has several folders seperated by the main page link names. Each of them contain their own company, genre, service etc. images to be used inside related pages.

## CSS

All of styling css folders and files are located here. Each of them seperated by related pages.

### game

This folder contains the styling of individual game page information table styling.

Example path: http://localhost:3000/game/Hades

### main

#### game.css

This file contains the styling of individual game page styling of game name, youtube video and images.

Example path: http://localhost:3000/game/Hades

#### games.css

This file contains the styling of related page styling for the games.

Example path: http://localhost:3000/platforms/microsoft_windows

#### home.css

This file contains the styling of the home page main div. It includes the image links' styling.

### navbar

All navigation bar styling is created here.

#### searchForm

Contains the styling of the search type and search bar.

##### inputDiv.css

Styling of search bar.

##### searchResultsDiv.css

Styling of found results via search bar.

##### typeDiv.css

Styling of the arrow entity, selected option for search bar and seperator line on right.

##### typesDiv.css

Styling of the option types of search bar.

#### headerDiv.css

Styling of the image link.

### index.css

Contains the main styling of tags such as div, a, form etc.

### load.css

Contains the load more button styling.

## hooks

Parameters used by hooks are: state, dispatch, length, paths.

- state: Gets information from reducer.js
- dispatch: Sets the information to reducer.js
- length: DOM length
- paths: URL paths which comes from useURL

### useDispatch.js

Parameters: state, dispatch, length.

1. Sets ID to 10 in the start.
2. Checks the URL.
3. Depending on URL path, gets the information about the games from the state,state.list, state.favorites, state.platforms and for all other links, and creates an array. This array contains all the games.

Example path: http://localhost:3000/platforms/xbox_one

In this example filteredTypeList array contains xbox one games and sets it to state.filteredTypeList 4. When state.filtered information changes in another file, useDispatch sets state.domLength by length parameter.

Note: state.filtered contains the information of 10 games filtered from filteredTypeList, if possible.

### useFilter.js

Parameters: state, dispatch, paths.

1. Gets state.filteredTypeListand state.id from useDispatch. Uses this information to create state.filtered.
2. Uses paths parameter to check URL paths and depends on it sets state.show. This displays load more button or not.

### useLength.js

Parameters: state

1. Gets state.filteredTypeList and state.domLength. Depends on their lenghts are equal or not, it displays the load more button or not.

### useScroll.js

1. This hook uses the hook useEffect to add and remove event listeners for scrolling in window. If page is on top then navigation bar's color will be same with the body. If page is not on top then the color of navbar changes.

### useTypes.js

Parameters: state, dispatch, paths

1. Gets state.list. Uses this information to set states such as state.platforms, state.services etc.
2. Also saves the information to localstorage.

### useURL.js

Parameters: paths

1. Gets the document URL as parameter. Uses this array to create various combinations.

### useWidth.js

Parameters: dispatch

1. Uses the hook useEffect to add and remove event listener depends on window.innerWidth. This hook is used to check width and set some DOM width in different components.

## links

Contains the components for pages such as platform links, game pages, home page.

### Game.js

Components which are used: GameName, GameImgs, Error.

1. Gets the informations from gamesList.json for the individual game and sets all the links, images, iframe youtube video for the game's individual page.

### Home.js

Component which is used: Links

1. This is the component which is used for the Home path.

Example: http://localhost:3000

### Platforms.js

Component which is used: Links

1. This component is used for all main page links.

Examples: http://localhost:3000/platforms, http://localhost:3000/genres

## navbar

Contains the components for the navigation bar parts.

### InputDiv.js

1. This is a component for the search bar.
2. Checks the value of type div to be able to check the proper object key. 

Example: If the type div value is engines than you can search your games by the game engine.

Type div value: "ENGINES"
Search bar value: "UNREAL ENGINE 3"
Result div values: "Batman Arkham Knight", "Mortal Kombat 11".
3. On value change of input, it searches the game state.list to find the proper games and creates the game links to search result div.
4. On focus and focus out it creates the animation for search bar underline div. It also displays and hides the search result div.

### Navbar.js

Contains all navbar components and logo.

### SearchResultsDiv.js

1. This is the component which shows the game results depending on type div and search bar values.
2. It filters the regex results to 5 most related results only to not load all the data to page.
3. On mouse enter it increases the height of the related game and zooms. Also filters the other games to be less visible.
4. On mouse out it reverses the mouse enter function.
5. On click it navigates you to related game page.

### TypeDiv.js

1. This is the component to choose the proper key to search for.
2. On mouse enter it changes the colors of the div. Moves the text shadow further. Rotates the arrow.
3. On mouse down it displays the other types as a dropdown. They come to screen with an animation by sliding from left to right.
4. On second mouse down to type div or any other DOM element, it will hide the types div.

### TypesDiv.js



# Videos

# Live Page

# Credits

This project created by Emre Kunduraci. All the information and pictures are taken from open sources. The informations are collected in December 2022 therefore they may be changes over time.

# Licence
