const db = require('../models');
const pictures = require('./pictures.json');

// This file empties the Books collection and inserts the books below

seed = async function() {
    console.log(`Destroying all current listing items...\n`);
    let count = await db.Listing.count({
        where: {},
    });
    await db.Listing.destroy({
        where: {},
        // truncate: true,
    });
    console.log(`${count} records destroyed.\n\nInserting new listings, with pictures...`);
    for (let x of pictures) {
        await db.Listing.create(x);
    }
    console.log(`Done! ${count} records inserted`);
    process.exit();
};

seed();
