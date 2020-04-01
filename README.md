# SoarEarthChallenge

An Angular Web Application to determine if a value is a Fizz, Buzz or FizzBuzz.

### Installation

```
$ git clone https://github.com/nicoitorres/SoarEarthFizzBuzz
$ cd SoarEarthFizzBuzz
```

### Install dependencies

```
$ npm install
```

### Run

Run `npm run dev` development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

See services/fizzbuzz-checker-service.spec.ts for valid input tests

## Information

A user inputs either a single number, or multiple numbers seperated by a comma, into the input box. The "Check" button calls the fizzbuzz-checker service to return a value, either fizz, buzz, fizzbuzz, or the number if none.

The fizzbuzz rules are set in the app/fizzBuzzRules.ts file.

