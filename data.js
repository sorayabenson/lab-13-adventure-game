const bedroom = {
    id: 'bedroom',
    title: 'The Bedroom',
    /*map: {
        top: ,
        left: ,
    },*/
    image: 'bedroom.png',
    description: `You seek rest but only find insomnia, who do you ask for help?`,
    choices: [{
        id: 'opossum',
        title: 'Opossum Ghost',
        image: 'opossum-ghost.png',
        resultImage: 'opossum-ghost.png',
        finalImage: 'float-opossum-ghost.png',
        description: `Find deep sleep after they teach you how to play dead!`,
        result: `Your eyes can finally stay shut until morning.`,
        light: 10,
        friendlyGhosts: 1,
    }, {
        id: 'blanket',
        title: 'Blanket Ghost',
        image: 'blanket-ghost.png',
        resultImage: 'blanket-ghost.png',
        finalImage: 'opossum-ghost.png',
        description: `Get wrapped up in a weighted blanket like no other.`,
        result: `You fall into a deep slumber that you haven’t known in years.`,
        light: 30,
        friendlyGhosts: 5,
    }, {
        id: 'screen',
        title: 'Screen Ghost',
        image: 'screen-ghost.png',
        resultImage: 'endless-scroll-shapeshifter.png',
        finalImage: 'float-endless-scroll-shapeshifter.png',
        description: `Turn off your brain and turn on that screen.`,
        result: `Oh no, it’s the Endless Scroll Shapeshifter! They’ve trapped you in an endless loop of doom scrolling and steal the little peace you had!`,
        light: -20,
        friendlyGhosts: -3,
    }]
};

const kitchen = {
    id: 'kitchen',
    title: 'The Kitchen',
    /*map: {
        top: ,
        left: ,
    },*/
    image: 'kitchen.png',
    description: `You seek nourishment but find the kitchen in utter disarray, who do you ask for help?`,
    choices: [{
        id: 'coffee',
        title: 'Coffee Ghost',
        image: 'coffee-ghost.png',
        resultImage: 'nerve-fraying-shapeshifter.png',
        finalImage: 'float-nerve-fraying-shapeshifter.png',
        description: `Enjoy the hot cup of energy and get out of the kitchen fast.`,
        result: `Oh no, it’s the Nerve Fraying Shapeshifter! They betray you and your nerves, you can’t stop shaking!`,
        light: -15,
        friendlyGhosts: -2,
    }, {
        id: `dishes`,
        title: 'Dishes Ghost',
        image: 'dishes-ghost.png',
        resultImage: 'dishes-ghost.png',
        finalImage: 'float-dishes-ghost.png',
        description: `Watch the dishes do themselves.`,
        result: `The kitchen sparkles and you dance in the sheer joy that you didn’t clean it yourself.`,
        light: 30,
        friendlyGhosts: 3,
    }, {
        id: 'pizza',
        title: 'Pizza Ghost',
        image: 'pizza-ghost.png',
        resultImage: 'pizza-ghost.png',
        finalImage: 'float-pizza-ghost.png',
        description: ` They get you and your turtle your favorite snack.`,
        result: `You enjoy food you didn’t have to make yourself.`,
        light: 15,
        friendlyGhosts: 2,
    }]
};

const shower = {
    id: 'shower',
    title: 'The Shower',
    /*map: {
        top: ,
        left: ,
    },*/
    image: 'shower.png',
    description: `You seek a cleansing reset, but not even the deluge of hot water can wash away the exhaustion, who do you ask for help?`,
    choices: [{
        id: 'plant',
        title: 'Plant Ghost',
        image: 'plant-ghost.png',
        resultImage: 'plant-ghost.png',
        finalImage: 'float-plant-ghost.png',
        description: `Bathe in a lush forest of well cared for plants that you don’t have to remember to water.`,
        result: `Your shower turns into an absolute oasis.`,
        light: 20,
        friendlyGhosts: 3,
    }, {
        id: 'essentialOil',
        title: 'Essential Oil Ghost',
        image: 'essential-oil-ghost.png',
        resultImage: 'slippery-shapeshifter.png',
        finalImage: 'float-slippery-shapeshifter.png',
        description: `Bring the aroma therapy game to the next level.`,
        result: `Oh no, it’s the Slippery Shapeshifter! You’re trapped in the shower with no traction, flailing desperately to escape!`,
        light: -20,
        friendlyGhosts: -2,
    }, {
        id: 'smoke',
        title: 'Smoke Ghost',
        image: 'smoke-ghost.png',
        resultImage: 'smoke-ghost.png',
        finalImage: 'float-smoke-ghost.png',
        description: `Find even more comfort in relaxing billows of smoke.`,
        result: `Your mind finds the stillness it has been longing for.`,
        light: 25,
        friendlyGhosts: 5,
    }]
};

const quests = [
    bedroom,
    kitchen,
    shower,
];

export default quests;
