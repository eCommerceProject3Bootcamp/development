const db = require('../models');
const pictures = require('./pictures.json');

// This file empties the Books collection and inserts the books below

const dbSeed = [
    {
        name: 'Chrysanthemum',
        description: 'A pretty flower.\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[0],
        primary: 0,
    },
    {
        name: 'Desert',
        description:
            "Cool desert. I think this is in Utah actually, I've seen it.\n*This is some Markdown*\n****\n#This is too",
        pictures: pictures[1],
        primary: 0,
    },
    {
        name: 'Hydrangeas',
        description: 'A pretty flower.\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[2],
        primary: 0,
    },
    {
        name: 'Jellyfish',
        description:
            'These are so cool! No brain, just nervous system. Really basic one too.\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[3],
        primary: 0,
    },
    {
        name: 'Koala',
        description:
            "These things might as well have no brain, apparently. They're really dumb!\n*This is some Markdown*\n****\n#This is too",
        pictures: pictures[4],
        primary: 0,
    },
    {
        name: 'Lighthouse',
        description:
            '"Don\'t ever let anyone put out your light because they are blinded by it." -- Shannon L. Adler.\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[5],
        primary: 0,
    },
    {
        name: 'Penguins',
        description:
            '"Dr. Ainley... can penguins go mad?" -- Werner Herzog\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[6],
        primary: 0,
    },
    {
        name: 'Tulips',
        description:
            'A pretty flower. There was some kind of wacky stock market weirdness with Tulips, in Denmark... if I remember right! Look it up.\n*This is some Markdown*\n****\n#This is too',
        pictures: pictures[7],
        primary: 0,
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
            name: x.name,
            description: x.description,
            primary: x.primary,
            pictures: x.pictures,
            price: Math.round(Math.random() * 10) + Math.random().toFixed(2),
        };
        await db.Listing.create(data);
    }
    console.log(`Done! ${dbSeed.length} records inserted`);
    process.exit();
};

seed();
