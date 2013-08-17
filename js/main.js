var prefixes = [ 'the', 'thee', 'you', 'my', '', 'some', 'young', 'old', 'our', 'your', 'mr', 'mrs', 'miss', 'new' ];

var midWords = [
	'mighty',
	'blue',
	'ugly',
	'smashing',
	'flaming',
	'original',
	'marble',
	'red',
	'huge',
	'raving',
	'slow',
	'fast',
	'rapid',
	'filthy',
	'vast',
	'tiny',
	'electric',
	'killer',
	'french',
	'free',
	'neon',
	'boomtown',
	'ragged',
	'young',
	'old',
	'gloved',
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
	'wild'
];

var lastWords = [
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
	[ 'father' ],
	[ 'priest' ],
	[ 'god' ],
	[ 'wizard' ],
	[ 'vampire' ],
	[ 'frisbee' ],
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

function generateName() {
	var isPlural = Math.round( Math.random());

	var bandName = prefixes[ Math.floor( Math.random() * prefixes.length ) ] + ' ' + midWords[ Math.floor( Math.random() * midWords.length ) ] + ' ';
	
	var theLastWord =  lastWords[ Math.floor( Math.random() * lastWords.length ) ];
	
	if( isPlural ) {
		console.log( 'plural');
		
		if( theLastWord.length > 1 ) {
			bandName += theLastWord[1];
		} else {
			bandName += theLastWord + 's';
		}
		
		//console.log( theLastWord.length );
	} else {
		bandName += theLastWord[0];
	}
	
	return bandName;
//	console.log( prefixes.length );
	//console.log( midWords[1][0] );
}

jQuery(document).ready(function($) {
	console.log( ( prefixes.length * midWords.length * lastWords.length ) * 2 ) ;
	$( 'h2' ).text(generateName());
});