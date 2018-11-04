const db = require('../models');
const pictures = require('./pictures.json');

// This file empties the Books collection and inserts the books below

const dbSeed = [
    {
        name: 'Chrysanthemum',
        description: 'A pretty flower.\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[0],
        pictures: [],
    },
    {
        name: 'Desert',
        description:
            "Cool desert. I think this is in Utah actually, I've seen it.\n*This is some Markdown*\n****\n#This is too",
        primary: pictures[1],
        pictures: [],
    },
    {
        name: 'Hydrangeas',
        description: 'A pretty flower.\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[2],
        pictures: [],
    },
    {
        name: 'Jellyfish',
        description:
            'These are so cool! No brain, just nervous system. Really basic one too.\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[3],
        pictures: [],
    },
    {
        name: 'Koala',
        description:
            "These things might as well have no brain, apparently. They're really dumb!\n*This is some Markdown*\n****\n#This is too",
        primary: pictures[4],
        pictures: [],
    },
    {
        name: 'Lighthouse',
        description:
            '"Don\'t ever let anyone put out your light because they are blinded by it." -- Shannon L. Adler.\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[5],
        pictures: [],
    },
    {
        name: 'Penguins',
        description:
            '"Dr. Ainley... can penguins go mad?" -- Werner Herzog\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[6],
        pictures: [],
    },
    {
        name: 'Tulips',
        description:
            'A pretty flower. There was some kind of wacky stock market weirdness with Tulips, in Denmark... if I remember right! Look it up.\n*This is some Markdown*\n****\n#This is too',
        primary: pictures[7],
        pictures: [],
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
                primary: x.primary[0],
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
