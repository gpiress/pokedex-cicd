# pokedex-cicd

This is a sample repository to showcase some CI/CD concepts.

## Development

### Running it locally

1. Clone the repo -- `git clone https://github.com/gpiress/pokedex-cicd.git`
1. Install dependencies -- `npm install`
1. Run tests -- `npm test`
1. Run locally -- `npm start`
1. Try out a request -- `curl http://localhost:3000/pokemon`

### Existing endpoints

#### `GET /pokemon`

Fetch all existing pokemon.

#### `GET /pokemon/:type`

Fetch all existing pokemon with the type specified by `:type`.

## CI/CD concepts

### Testing

Testing is done using [Jest](https://jestjs.io/docs/getting-started).

You can run tests locally by running `npm test` locally.

All config can be found at `jest.config.js`.

In order to use ESModules and have everything working nicely together,
there is a couple of extra dependencies: `babel` and similar. There is
some config for it at `babel.config.json`.

### Linting

Uses [ESLint](https://eslint.org/) for linting and statyc analysis.

You can run linting using `npm run lint`.

Check out `.eslintrc.json` for the whole configuration.

In order for it to work nicely together with `prettier` and `jest`, there are
two extra dependencies: `eslint-plugin-jest`, `eslint-config-prettier`.

### Code formatting

Uses [prettier](https://prettier.io/) for code style.

Configuration is at `.prettierrc.json` and `.prettierignore`.

You can run prettier to format your code by running `npm run format`.
