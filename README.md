# Sigma Challenge

This repository contains three scripts and their respective HTML files for execution. The following instructions will guide you on how to set up, build, and run these scripts.

## Prerequisites

Make sure you have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/).

## Setup

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd sigmachallenge
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Building the Project

Before running the scripts, you need to compile the TypeScript files to JavaScript:

```bash
npm run build
```

This will compile the TypeScript files and place the resulting JavaScript files in the `build` directory.

## Running the Scripts

### Script Number One

This script extends the `NodeList` prototype to include a `map` method. To run this script, open the `htmlScriptNumberOne.html` file in a browser.

1. Ensure you've run `npm run build` to compile the TypeScript files.
2. Open the `htmlScriptNumberOne.html` file in your browser. You should see the class names of all `div` elements logged to the console.

### Script Number Two

This script creates an immutable object. To run this script, use the npm script defined in `package.json`:

1. Run the script:
    ```bash
    npm run scriptTwo
    ```
2. You should see the immutable object logged to the console.

### Script Number Three

This script returns a reference to the current script being executed. To run this script, open the `htmlScriptNumberThree.html` file in a browser.

1. Ensure you've run `npm run build` to compile the TypeScript files.
2. Open the `htmlScriptNumberThree.html` file in your browser. You should see the current script element logged to the console.

## Files Overview

- **scriptNumberOne.ts**: Extends the `NodeList` prototype with a `map` method.
- **scriptNumberTwo.ts**: Creates an immutable object.
- **scriptNumberThree.ts**: Returns a reference to the current script.
- **htmlScriptNumberOne.html**: HTML file to run `scriptNumberOne.js`.
- **htmlScriptNumberThree.html**: HTML file to run `scriptNumberThree.js`.

## Author

Matheus Bittencourt Azevedo

## License

This project is licensed under the ISC License.