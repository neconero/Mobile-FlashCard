# Mobile Flash Cards

The mobile app enables user to select a deck from the list of decks. User can add Card to a deck, create a new deck, complete a quiz from a selected deck. App was built with react-native

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode(expo CLI).
Open expo app on phone device to view snack.


### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## Project Folder Structure

```
.
|-- App.js
|-- README.md
|-- actions
|   `-- index.js
|-- app.json
|-- assets
|   |-- adaptive-icon.png
|   |-- favicon.png
|   |-- icon.png
|   `-- splash.png
|-- babel.config.js
|-- components
|   |-- AddCard.js
|   |-- Deck.js
|   |-- DeckList.js
|   |-- DeckView.js
|   |-- NewDeck.js
|   |-- QuizCard.js
|   |-- QuizView.js
|   `-- Reset.js
|-- middleware
|   |-- index.js
|   `-- logger.js
|-- navigation
|   |-- BottomTab.js
|   `-- ScreenStack.js
|-- package.json
|-- reducers
|   |-- decks.js
|   `-- index.js
|-- utils
|   |-- _DATA.js
|   |-- api.js
|   |-- colours.js
|   `-- helpers.js
|-- yarn-error.log
`-- yarn.lock

```