const db = require('../models');
const pictures = require('./pictures.json');

// This file empties the Books collection and inserts the books below

const dbSeed = [
    {
        name: 'Chrysanthemum',
        description: 'A pretty flower. *This is some Markdown* **** #This is too',
        pictures: pictures[0],
    },
    {
        name: 'Desert',
        description:
            "Cool desert. I think this is in Utah actually, I've seen it. *This is some Markdown* **** #This is too",
        pictures: pictures[1],
    },
    {
        name: 'Hydrangeas',
        description: 'A pretty flower. *This is some Markdown* **** #This is too',
        pictures: pictures[2],
    },
    {
        name: 'Jellyfish',
        description:
            'These are so cool! No brain, just nervous system. Really basic one too. *This is some Markdown* **** #This is too',
        pictures: pictures[3],
    },
    {
        name: 'Koala',
        description:
            "These things might as well have no brain, apparently. They're really dumb! *This is some Markdown* **** #This is too",
        pictures: pictures[4],
    },
    {
        name: 'Lighthouse',
        description:
            '"Don\'t ever let anyone put out your light because they are blinded by it." -- Shannon L. Adler. *This is some Markdown* **** #This is too',
        pictures: pictures[5],
    },
    {
        name: 'Penguins',
        description: '"Dr. Ainley... can penguins go mad?" -- Werner Herzog *This is some Markdown* **** #This is too',
        pictures: pictures[6],
    },
    {
        name: 'Tulips',
        description:
            'A pretty flower. There was some kind of wacky stock market weirdness with Tulips, in Denmark... if I remember right! Look it up. *This is some Markdown* **** #This is too',
        pictures: pictures[7],
    },
];

seed = async function() {
    console.log(`Destroying all current listing items...\n`);
    count = await db.Listing.count({
        where: {},
    });
    await db.Listing.destroy({
        where: {},
        // truncate: true,
    });
    console.log(`${count} records destroyed.\n\nInserting new listings, with pictures...`);
    for (let x of dbSeed) {
        let data = {
            Picture: {
                pictures: x.pictures,
            },
            pictureId: '',
            name: x.name,
            description: x.description,
        };
        await db.Listing.create(data, { include: [db.Picture], validate: false });
    }
    console.log(`Done! ${dbSeed.length} records inserted`);
    process.exit();
};

seed();
