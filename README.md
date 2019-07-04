# Bitmap Positive Distance Calculator
Test NodeJS task for the [ExactGroup](http://exactgroup.pl/)

## Task description
Could be found [here](TASK.md)

## Requirements
`npm`, `node ^8`

## Dev-dependencies [used](package.json):
`eslint`, `jest`

## Usage
Just forward input file to the app:
```bash
node bitmap.js < input
```

In case you want output to be forwarded into the file just do:
```bash
node bitmap.js < input > output
```

[input](input) and [output](output) file examples are located in the project root folder. Input example file contains first test from the task and two bigger ones more.

## Testing the application
For the unit-testing [jest](https://jestjs.io/) used. 

Test suites are: 
- test the input from the task example 
- highload test (1000 x 182 x 182)

To run the test simply:
```bash
npm t
```