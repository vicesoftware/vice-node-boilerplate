# vice-node-boilerplate

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/vice-node-boilerplate
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

# Notes
Feathers Call
- For redirects we can follow instructions here: https://docs.feathersjs.com/api/authentication/oauth.html#redirects

TLDR: `/oauth/github?redirect=dashboar`

JWKS docs: https://auth0.com/docs/tokens/concepts/jwks
SPA docs: https://auth0.com/docs/libraries/auth0-spa-js

JWKS Flow
1. User visits and clicks signin
1. get redirected directly to auth0
1. auth0 back to UI with token