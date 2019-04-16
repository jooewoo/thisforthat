# Minerva Technical Assessment

## Goal

Task is to create a clone of http://itsthisforthat.com.
Use same set of options of `this + that` pairings.
Build a single page application.
Allowed to use any 3rd party libraries other than jQuery.
Submit your application as a `.zip` file.
Open ended requirements to allow for creative implementations.

## Checklist

1. Same functionality
   - React (No jQuery)
   - API Call from http://itsthisforthat.com/api.php?json
   - Refresh button
   - Twitter button
2. `README.md`
3. Original given md file

## Set Up Process

Instructions on how to set up and run your project in a `*nix` environment.

1. Install dependencies with `npm install`.
2. Create and checkout to a new branch, `training`, for your work.
3. Run the development server with `npm start`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Replication Process

1 paragraph or a short bulleted list describing your process
These are the following steps I took to recreating this website.

1. Installed `axios`, and tried to get the API call working so that I had a payload / data to work with.
2. Created the different components
3. Created functions for click events for the refresh button, and twitter button.
4. Refactored any code that was repeating
5. Installed and implemented `Segment-ui-react`
6. Styled the code

**NOTE** Any issues or bugs I ran into, I would either google or log the code to evaluate what the issue was.
**NOTE** Ran into one issue with the API call, but provided the stack overflow link that helped me solve the error.

## Technologies Used

Semantic-ui-react
axios
proptypes
