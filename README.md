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
[Jest](https://jestjs.io/) was used for the unit-testing. 

Test suites are: 
- test the input from the task example 
- highload test (1000 x 182 x 182)

To run all tests simply:
```bash
npm t
```

## Author's comments about #2 revision
A huge sorry I didn't implement any algorithm for the first time. I really thought it's just code-style test :) Really sorry.

So. Now I've implemented it. First half an hour I was thinking of usage Spiral Matrix Walk algorithm from Further Maths I had for 2 years in University, but then I got, that it's easier/faster to store White pixels (1) corrdinates "indexes" into an array map. And then just walk thru them (instead of walking even spirally over a ton of zero's). Now it should work really faster. The ETA of thinking of this algo and it's implementing was about 40 mins.