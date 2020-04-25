# logfish React client

This is the code for the frontend side of [logfish.dev](logfish.dev). The easiest way to use logfish is to download the logfish npm package and then use an API key from logfish.dev to log to either the browser or your phone. However, if you wish to run the project locally, follow the instructions below.

## Clone this repository and install dependencies

SSH:
```
$ git clone git@github.com:bandrewfisher/logfish_client.git && cd logfish_client
$ yarn install
```

HTTPS:
```
$ git clone https://github.com/bandrewfisher/logfish_client.git && cd logfish_client
$ yarn install
```

## Run the project

If you have a local Logfish server running, you will need to set an environment variable called `LOGFISH_SERVER_URL` that points to it. For example, if your server is running locally on port 5000, then start the client like so:

```
$ LOGFISH_SERVER_URL=http://localhost:5000 && yarn start
```

Or if you don't specify the server url, the client will by default point to the Elastic Beanstalk server.

```
$ yarn start
```

Now you can log like usual with the logfish npm package, just copy the API key from your browser! Note that if your server is running locally, the API key will always be DEV_KEY for convenience.

