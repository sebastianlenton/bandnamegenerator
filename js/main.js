"use strict";

var prefixesSing = [ 'lord', 'mr', 'mrs', 'miss', 'king', 'queen', 'sir', 'lady', 'ms', 'master', 'captain', 'that', 'every', 'just one' ];
//noun has to be singular

var prefixesPlu = [ 'we', 'we, the', 'us', 'those', 'all the', 'many', 'lots of', 'more', 'less', 'we love', 'i love', 'remove the', 'add more' ];
//noun has to be plural

var prefixesAny = [ 'the', 'thee', 'you', 'my', 'some', 'our', 'your', 'any', 'the last ', 'our saviour, the', 'their', 'society\'s', 'the community\'s', 'the national', 'the only', 'my family\'s' ];
//noun can be either (choose randomly at end)

var adjectives1 = [
	'young', 'old', 'new', 'brand new', 'original', 'ultimate', 'hot', 'cold', 'crimson', 'dark', 'light', 'red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'white', 'black', 'grey', 'slow', 'fast', 'retro', 'used', 'endless', 'infinite', 'current', 'huge', 'pale', 'turquoise'
];

var adjectives2 = [
	'mighty',
	'ugly',
	'smashing',
	'flaming',
	'original',
	'marble',
	'cracked',
	'raving',
	'filthy',
	'vast',
	'tiny',
	'electric',
	'sexy',
	'killer',
	'soft',
	'central',
	'free',
	'neon',
	'rapid',
	'floating',
	'frosty',
	'dirty',
	'sweaty',
	'muscular',
	'beautiful',
	'pretty',
	'sonic',
	'smooth',
	'cyber',
	'ragged',
	'young',
	'old',
	'powerful',
	'concrete',
	'gloved',
	'oblivious',
	'silky',
	'imaginary',
	'ghostly',
	'flying',
	'moving',
	'invisible',
	'noble',
	'thoughtful',
	'crushing',
	'murderous',
	'silver',
	'extinct',
	'hot',
	'fiery',
	'sparkling',
	'elderly',
	'stinking',
	'rolling',
	'stone',
	'smelly',
	'smokey',
	'clean',
	'shaven',
	'gentle',
	'poisonous',
	'dead',
	'surviving',
	'hairy',
	'chocolate',
	'propulsive',
	'cold',
	'serene',
	'heavenly',
	'ripped',
	'grand',
	'shiny',
	'lucky',
	'friendly',
	'strong',
	'legal',
	'simple',
	'municipal',
	'reflective',
	'royal',
	'glittering',
	'legendary',
	'obedient',
	'raw',
	'fictional',
	'howling',
	'wild',
	'sleepy',
	'historic'
];

var nouns = [
	[ 'bee' ],
	[ 'machine' ],
	[ 'crystal' ],
	[ 'cloud' ],
	[ 'cowboy' ],
	[ 'criminal' ],
	[ 'painter' ],
	[ 'chef' ],
	[ 'thought' ],
	[ 'dancer' ],
	[ 'killer' ],
	[ 'cow' ],
	[ 'video' ],
	[ 'cave' ],
	[ 'dog' ],
	[ 'lip' ],
	[ 'nothing' ],
	[ 'pumpkin' ],
	[ 'giant' ],
	[ 'prune' ],
	[ 'bull' ],
	[ 'monk' ],
	[ 'rat' ],
	[ 'book' ],
	[ 'holiday' ],
	[ 'saint' ],
	[ 'airport' ],
	[ 'triangle' ],
	[ 'citizen' ],
	[ 'ghost' ],
	[ 'spider' ],
	[ 'boat' ],
	[ 'layer' ],
	[ 'nail' ],
	[ 'barnacle' ],
	[ 'design' ],
	[ 'kitten' ],
	[ 'radio' ],
	[ 'warrior' ],
	[ 'bell' ],
	[ 'ballerina' ],
	[ 'dinosaur' ],
	[ 'car' ],
	[ 'pencil' ],
	[ 'fire' ],
	[ 'panda' ],
	[ 'trooper' ],
	[ 'soldier' ],
	[ 'republic' ],
	[ 'owl' ],
	[ 'banquet' ],
	[ 'baron' ],
	[ 'photograph' ],
	[ 'projector' ],
	[ 'clam' ],
	[ 'hexagon' ],
	[ 'jetpack' ],
	[ 'german' ],
	[ 'starship' ],
	[ 'palace' ],
	[ 'mind' ],
	[ 'helicopter' ],
	[ 'friend' ],
	[ 'lover' ],
	[ 'brother' ],
	[ 'hifi' ],
	[ 'sister' ],
	[ 'mother' ],
	[ 'cat' ],
	[ 'father' ],
	[ 'boyfriend' ],
	[ 'boy' ],
	[ 'girlfriend' ],
	[ 'housemate' ],
	[ 'uncle' ],
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
	[ 'sun' ],
	[ 'sunset' ],
	[ 'star' ],
	[ 'agent' ],
	[ 'gun' ],
	[ 'elevator' ],
	[ 'canyon' ],
	[ 'head' ],
	[ 'leg' ],
	[ 'poet' ],
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
	[ 'sprout' ],
	[ 'acrobat' ],
	[ 'kid' ],
	[ 'robot' ],
	[ 'seahorse' ],
	[ 'goat' ],
	[ 'youth' ],
	[ 'doctor' ],
	[ 'eye' ],
	[ 'girl' ],
	[ 'twin' ],
	[ 'flower' ],
	[ 'crayon' ],
	[ 'lollipop' ],
	[ 'aeroplane' ],
	[ 'scientist' ],
	[ 'umbrella' ],
	[ 'gymnast' ],
	[ 'signal' ],
	[ 'death' ],
	[ 'demon' ],
	[ 'vapour' ],
	[ 'dream' ],
	[ 'cop' ],
	[ 'punk' ],
	[ 'shoe' ],
	[ 'computer' ],
	[ 'lake' ],
	[ 'devil' ],
	[ 'angel' ],
	[ 'wasp' ],
	[ 'bat' ],
	[ 'castle' ],
	[ 'skull' ],
	[ 'miracle' ],
	[ 'heaven', 'heaven' ],
	[ 'hell', 'hell' ],
	[ 'bread', 'bread' ],
	[ 'police', 'police' ],
	[ 'snow', 'snow' ],
	[ '60s', '60s' ],
	[ '70s', '70s' ],
	[ '80s', '80s' ],
	[ '90s', '90s' ],
	
	[ 'puppy', 'puppies' ],
	[ 'voice', 'voices' ],
	[ 'cherry', 'cherries' ],
	[ 'baby', 'babies' ],
	[ 'fish', 'fishes' ],
	[ 'spy', 'spies' ],
	[ 'child', 'children' ],
	[ 'woman', 'women' ],
	[ 'elf', 'elves' ],
	[ 'dwarf', 'dwarves' ],
	[ 'popcorn', 'popcorn' ],
	[ 'city', 'cities' ],
	[ 'boombox', 'boomboxes' ],
	[ 'fortress', 'fortresses' ],
	[ 'octopus', 'octopuses' ],
	[ 'house', 'houses' ],
	[ 'baroness', 'baronesses' ],
	[ 'man', 'men' ],
	[ 'sportsman', 'sportsmen' ],
	[ 'sportswoman', 'sportswomen' ],
	[ 'person', 'people' ],
	[ 'fox', 'foxes' ],
	[ 'spaceman', 'spacemen' ],
	[ 'beach', 'beaches' ],
	[ 'furnace', 'furnaces' ],
	[ 'fireman', 'firemen' ],
	[ 'horse', 'horses' ],
	[ 'horsewoman', 'horsewomen' ],
	[ 'horseman', 'horsemen' ],
	[ 'bitch', 'bitches' ]
];

function getCombs() {
	//note these are completely inaccurate of the real combinations
	//return ( prefixesSing.length * adjectives1.length * adjectives2.length * nouns.length ) * 2;
	console.log( 'adjectives2: ' + adjectives2.length );
	console.log( 'nouns: ' + nouns.length );
	
	return ( adjectives2.length * nouns.length );
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

function generateName() {
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
	} else if( getRandomNum( 10 ) > 4 ) {
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

//interaction stuff
$( '.button.generate').tap( function() {
	$( 'h2' ).text( generateName() );
});

jQuery(document).ready(function($) {
	$( 'h2' ).text( generateName() );
	
	//console.log( getCombs() );
	doFirefoxButtonStuff();
});