# eCommerce React Development (Project 3)

A boilerplate eCommerce site, designed for ease of use for the customer, and streamlined administrator // owner tools

****

**Installation Instructions**

1. Get neccessary files / dependencies
    * git clone this repository.
    * Navigate to this code's location in terminal, and type `yarn`.
2. Generate neccessary environment files -- "**config.json**, **.env**"
    * Navigate to the base folder (This is the folder *outside* of `/client`)
    * Type `sequelize init:config` in the terminal (Note, if this fails, you need to type `npm i -g sequelize-cli`, then retry)
    * You will now see a `/config` folder, and its contents will be a single file, `config.json`, change the contents of this file to match the development MySQL Database you are using.
    * **[.env](#.env)**
    *  **[Config](#config.json)**
****
`The info in these formats, can be found on the shared Google Sheets, refer to slack channel pinned items.`

## What these will look like:
# config.json
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  ...etc...
}
```

# .env
```
REACT_APP_EXAMPLE_API_KEY=<...key goes here>
```
