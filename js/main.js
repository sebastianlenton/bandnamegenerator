"use strict";

var prefixesSing = [ 'lord', 'mr', 'mrs', 'miss', 'king', 'queen', 'sir', 'lady', 'ms', 'master', 'captain', 'that' ];
//noun has to be singular

var prefixesPlu = [ 'we', 'we, the', 'us', 'those' ];
//noun has to be plural

var prefixesAny = [ 'the', 'thee', 'you', 'my', 'some', 'our', 'your', 'any', 'our saviour, the' ];
//noun can be either (choose randomly at end)

var adjectives1 = [
	'young', 'old', 'new', 'brand new', 'original', 'hot', 'cold', 'red', 'blue', 'green', 'yellow', 'pink', 'orange', 'white', 'black', 'grey', 'slow', 'fast', 'retro', 'used'
];

var adjectives2 = [
	'mighty',
	'ugly',
	'smashing',
	'flaming',
	'original',
	'marble',
	'huge',
	'raving',
	'filthy',
	'vast',
	'tiny',
	'electric',
	'killer',
	'french',
	'free',
	'neon',
	'rapid',
	'boomtown',
	'frosty',
	'sweaty',
	'muscular',
	'beautiful',
	'pretty',
	'sonic',
	'smooth',
	'ragged',
	'young',
	'old',
	'gloved',
	'oblivious',
	'silky',
	'imaginary',
	'ghostly',
	'invisible',
	'noble',
	'crushing',
	'murderous',
	'silver',
	'extinct',
	'hot',
	'fiery',
	'sparkling',
	'elderly',
	'stinking',
	'smelly',
	'smokey',
	'clean',
	'shaven',
	'hairy',
	'propulsive',
	'cold',
	'ripped',
	'grand',
	'shiny',
	'lucky',
	'friendly',
	'royal',
	'legendary',
	'obedient',
	'raw',
	'fictional',
	'howling',
	'wild',
	'sleepy',
];

var nouns = [
	[ 'bee' ],
	[ 'cloud' ],
	[ 'spaniard' ],
	[ 'cowboy' ],
	[ 'criminal' ],
	[ 'painter' ],
	[ 'chef' ],
	[ 'thought' ],
	[ 'dancer' ],
	[ 'killer' ],
	[ 'cow' ],
	[ 'cave' ],
	[ 'dog' ],
	[ 'lip' ],
	[ 'pumpkin' ],
	[ 'giant' ],
	[ 'prune' ],
	[ 'indian' ],
	[ 'bull' ],
	[ 'monk' ],
	[ 'rat' ],
	[ 'ghost' ],
	[ 'barnacle' ],
	[ 'design' ],
	[ 'kitten' ],
	[ 'radio' ],
	[ 'bell' ],
	[ 'ballerina' ],
	[ 'dinosaur' ],
	[ 'car' ],
	[ 'pencil' ],
	[ 'fire' ],
	[ 'panda' ],
	[ 'trooper' ],
	[ 'soldier' ],
	[ 'owl' ],
	[ 'baron' ],
	[ 'clam' ],
	[ 'hexagon' ],
	[ 'jetpack' ],
	[ 'starship' ],
	[ 'palace' ],
	[ 'mind' ],
	[ 'helicopter' ],
	[ 'friend' ],
	[ 'lover' ],
	[ 'brother' ],
	[ 'sister' ],
	[ 'mother' ],
	[ 'cat' ],
	[ 'father' ],
	[ 'boyfriend' ],
	[ 'girlfriend' ],
	[ 'housemate' ],
	[ 'priest' ],
	[ 'god' ],
	[ 'wizard' ],
	[ 'vampire' ],
	[ 'frisbee' ],
	[ 'train' ],
	[ 'tramp' ],
	[ 'dynamite' ],
	[ 'field' ],
	[ 'engine' ],
	[ 'sword' ],
	[ 'sunset' ],
	[ 'star' ],
	[ 'agent' ],
	[ 'gun' ],
	[ 'head' ],
	[ 'leg' ],
	[ 'bike' ],
	[ 'mortal' ],
	[ 'fighter' ],
	[ 'truck driver' ],
	[ 'driver' ],
	[ 'sailor' ],
	[ 'barbarian' ],
	[ 'wrestler' ],
	[ 'eagle' ],
	[ 'falcon' ],
	[ 'bear' ],
	[ 'acrobat' ],
	[ 'kid' ],
	[ 'robot' ],
	[ 'goat' ],
	[ 'youth' ],
	[ 'girl' ],
	[ 'twin' ],
	[ 'cripple' ],
	[ 'flower' ],
	[ 'crayon' ],
	[ 'lollipop' ],
	[ 'umbrella' ],
	[ 'police', 'police' ],
	[ '60s', '60s' ],
	[ '70s', '70s' ],
	[ '80s', '80s' ],
	[ '90s', '90s' ],
	[ 'fish', 'fishes' ],
	[ 'child', 'children' ],
	[ 'woman', 'women' ],
	[ 'elf', 'elves' ],
	[ 'dwarf', 'dwarves' ],
	[ 'popcorn', 'popcorn' ],
	[ 'city', 'cities' ],
	[ 'fortress', 'fortresses' ],
	[ 'octopus', 'octopuses' ],
	[ 'house', 'houses' ],
	[ 'baroness', 'baronesses' ],
	[ 'man', 'men' ],
	[ 'person', 'people' ],
	[ 'frenchman', 'frenchmen' ],
	[ 'fox', 'foxes' ],
	[ 'spaceman', 'spacemen' ],
	[ 'beach', 'beaches' ],
	[ 'furnace', 'furnaces' ],
	[ 'fireman', 'firemen' ],
	[ 'horseman', 'horsemen' ],
	[ 'bitch', 'bitches' ]
];

function getCombs() {
	//note this is completely inaccurate of the real combinations
	return ( prefixesSing.length * adjectives1.length * adjectives2.length * nouns.length ) * 2;
}

function getPlularity() {
	return getRandomNum( 2 );
}

function getRandomWord( words ) {
	return words[ getRandomNum( words.length ) ];
}

function getRandomNum( limit ) {
	if( limit ) {
		return Math.floor( Math.random() * limit )
	} else {
		return Math.round( Math.random() );
	}
}

function loopArrayString( words ) {
	var strWords = '';
	for( var i = 0; i < words.length; i++ ) {
		strWords += words[ i ] + ' ';
	}
	
	return strWords;
}

function getNounPluralised( word, pluralise ) {
	var wordPluralised;
	
	if( pluralise ) {
		if( word.length > 1 ) {
			wordPluralised = word[1];
		} else {
			wordPluralised = word + 's';
		}
	} else {
		wordPluralised = word[0];
	}
	
	return wordPluralised;
};

function generateName() {										//don't think there's a "no prefix" option
	var isPlural = getPlularity();

	var words = [];

	if( getRandomNum( 3 ) == 0 ) {
		if( isPlural ) {
			if( getRandomNum( 4 ) == 0 ) {
				words.push( getRandomWord( prefixesAny ) );
			} else {
				words.push( getRandomWord( prefixesPlu ) );
			}
		} else if( !isPlural ) {
			if( getRandomNum( 4 ) == 0 ) {
				words.push( getRandomWord( prefixesAny ) );
			} else {
				words.push( getRandomWord( prefixesSing ) );
			}
		} else {
			console.log( 'something terrible has happened in adding prefix' );
		}
	} else if( getRandomNum( 3 ) == 1 ) {
		words.push( 'the' );
	}
	
	if( getRandomNum( 4 ) > 1 ) {															// 1/2 chance of pushing on an adj 1
		words.push( getRandomWord( adjectives1 ) );
	}
	
	if( getRandomNum( 4 ) > 1 ) {															// 1/2 chance of pushing on an adj 1
		words.push( getRandomWord( adjectives2 ) );
	}
	
	var noun = getRandomWord( nouns );
	
	words.push( getNounPluralised( noun, isPlural ) );
	
	return loopArrayString( words );
}

jQuery(document).ready(function($) {
	$( 'h2' ).text(generateName());
	
	console.log( getCombs() );
});