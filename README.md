# Wombat Dungeon Master NFT Viewer

The **Wombat Dungeon Master NFT Viewer** is a **React + Vite.js + TypeScript** web application that allows users to enter their EOS account name and view their NFTs grouped by collection. Each NFT is displayed as a card with its name, image, and mint number.

## Features

- Users can search for NFTs by EOS account name.
- NFTs are displayed in a card layout with essential details.
- Cards are grouped by NFT collections.

### Getting Started

#### Prerequisites

Ensure you have the following installed:

Node.js
npm or Yarn
Git (for cloning the repository)

#### Installation

1. Clone the repository:
   `git clone https://github.com/arachne16/nft_viewer_fe_test.git`
2. `cd nft_viewer_fe_test`

3. Install the dependencies:

   `npm install`
   or if you are using Yarn:
   `yarn install`

#### Running the Application

To run the application in the development mode, use:
`npm run dev`
or if you are using Yarn:
`yarn dev`
Open http://localhost:5173 to view it in the browser.

(You can use the following EOS account names to test: `womplayextra`, `wombatmaster`, `wombatpromo1`)

#### Testing the Application

To test the application, use:
`npm test`
or if you are using Yarn:
`yarn test`

### Usage

Upon launching the application, you will see an input field where you can type an EOS account name.
Enter the account name and submit the form to fetch the NFTs.
The NFTs will be displayed below the search bar, grouped by their respective collections.

### Built With

- React.js - The web framework used.
- TypeScript - Used for adding static type definitions to JavaScript.
- Material-UI - Used for the UI components.
- Axios - Used to make API requests.
- React-Query - Used to fetch the data and for caching.
- Jest - Used for testing.
- Vite.js - Used for bundler.

## API Reference

The application queries the AtomicAssets API to fetch the NFT data:

`GET /atomicassets/v1/assets` - Retrieves the NFTs owned by the specified account.

### For Documentation

Please take a look at `Documentation.pdf` for the documentation.
