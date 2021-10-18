# messages-manager

Web application that manages messages coming from Twitter hashtags.

## Technologies

- [Node.js](https://nodejs.org/en/)
- [React.js](https://www.react.org/)
- [TwitterApi](https://developer.twitter.com/)

## Getting started

In order to run the project you will need have installed before-hand:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)
- [TwitterDeveloprAccount](https://developer.twitter.com/)

After cloning the project you will need to create an .env file in the root of the
project this file should contains the following structure, and you will need to place
you twitter api token inside it.

```
SERVER_PORT = 3001
CLIENT = http://localhost:3000
TWITTER_TOKEN = {REPLACE ME}
TWITTER_RULE = https://api.twitter.com/2/tweets/search/stream/rules
TWITTER_STREAM = https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id
```

## Running the project

open a terminal in the projects root and use the following commands

```bash
# install the back-end dependencies
yarn
# install the front-end dependencies
install-front
# runs the back-end
yarn server
# runs the front-end
yarn clint
# runs the tests
yarn jest
```

## troubleshooting

if you have some babel dependencies tree error try:

- Inside the client folder create a .env with the following content

  ```
  SKIP_PREFLIGHT_CHECK=true
  ```
