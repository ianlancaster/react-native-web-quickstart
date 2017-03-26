# React Native Web Quickstart

This repository serves as a simple hello world example and starter kit for those that would like to develop a codebase that deploys to web, Android, and ios while reusing a significant portion of the codebase. Note, that this repository does not use libraries that compile react native components to web like react-web or react-native-web. It does, however, share the react native view layer for Android and ios entirely, and shares all Redux modules between web and native.

This starter is meant to support a mobile first design approach. I recommend mirroring the mobile web version with your native, then removing the iphone preview container from the web view to develop the desktop version.

The web version (left) pulled heavily from @davezuko's [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit). The react native setup is based on V1 Infinite Red's [ignite starter kit](https://github.com/infinitered/ignite).

![web version](https://media.giphy.com/media/3ohze3CYn17FvlSnK0/giphy.gif)
![ios version](https://media.giphy.com/media/3og0IUziJhTeNEKYJW/giphy.gif)
![android version](https://media.giphy.com/media/xUPGcGqiCIbHnOiN5m/giphy.gif)

## Getting Started

To start using the app:

#### Clone this repo
`git clone https://github.com/ianlancaster/react-native-web-quickstart.git`

#### Install the dependancies
`npm i`

#### Start the server (for the async example)
`npm run start:server`

#### Start a view layer
`npm run start:web` or `npm run start:ios` or `npm run start:android`

###### Note for Android:

Make sure you closely follow the android section of the [getting started guide](https://facebook.github.io/react-native/docs/getting-started.html) for react native. In addition, the first time you build in Android Studio you should get some warnings saying that the build tool version for a few files is too low. For each of these files click on 'open file' and change buildToolsVersion to "25.0.0". You should then be able to build without issues. Make sure that your emulator is running before you run `npm run start:android`.

## Features

This repository includes many helpful features including:
* A comprehensive testing suite (react native too!)
* JS standard code style
* Linting and testing pre-commit hooks
* My own killer abstraction of Redux
* Redux dev tools integration and logger
* Prebuilt navigation drawer
* react-native-router-flux for native and react plain route for web
* Modular SASS architecture

## Caveats
There are a number of open issues I still need to work on. If you run into a problem with the repository that is not already documented please add an issue. Pull requests welcome!

Make sure to use the version of fetch included in the Utilities folder of this repository if you want your requests to work across all platforms!
