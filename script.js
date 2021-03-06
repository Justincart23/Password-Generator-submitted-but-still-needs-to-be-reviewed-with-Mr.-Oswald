let fontSize = 19;
let words = new Map();
let phrase = [];
let drawHelpText = true;
let helpText = [

  "đđđĒ đ ",
  "____________",
  " ",
  "đ¤ đŽđđļđ¸đ = đŠđđ đ˛đđđš",
  "__________",
  " ",
  "đĸ đ = đĸđđđđđļđđ đđžđđžđ",
  "__________",
  " ",
  "#ī¸âŖ đŽ = đĸđđđđđļđđ đŽđđđˇđđ",
"__________",
" ",
  "âŠī¸ đ = đđđđđ đĢđļđđđđđđš",
  "____________",
  
  


];   
function preload() {
	loadStrings('beale.wordlist.asc.txt', createMap );
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	textSize(fontSize);
let button;
  button = createButton('click me');
  button.position(52, 95);
  button.mousePressed(randomWord);
  notificationText = key;
  return words.get( key );
}


function createMap(strings) {
	for( let line of strings ) {
		let [key, word] = line.split('\t');
		if( key.length === 5 ) {
			words.set( key, word );
		}
	}
}

function draw() {
	background("Thistle");
	showPassword();
  if( drawHelpText ) { showHelpText(); }
}

function showHelpText() {
  textSize(15);
  const maxWidth = helpText.reduce( (max, currentString) => { return textWidth(currentString) > max ? textWidth(currentString) : max}, 0 );
  fill("MediumSlateBlue");

  fill(0);
  for( let i = 1; i <= helpText.length; i++ ) {
    text(helpText[i-1], 30, 20+21 * i );
  }
  textSize(fontSize);
}
//From Mr. Oswalds Example





function showNotificationText() {
	displayCenteredText( notificationText, 30, color('red'), 36 );
}
function showPassword() {
	displayCenteredText( phrase.join(""), height/2 );
}

function displayCenteredText( string, h, c = color('LightCyan'), desiredSize = fontSize ) {
	fill(c);
	let w = textWidth(string);
	while( w > width ) {
		desiredSize--;
		textSize(desiredSize);
		w = textWidth(phrase.join);
	}
	text( string, width/2 - w/2, h );
}

function randomWord() {
  console.log ("hi");
	let key = "";
	for( let i = 0; i <5; i++ ) {
		key += `${int(random(0,6))+1}`;
	}
	notificationText = key;
	return words.get( key );
}

function keyPressed() {
	if( key === "r" ) {
		phrase = []
		

	}
	if( key === " " ) {
		phrase.push(randomWord())
    convertToCapitalized();
                  
	}
	if( key === "d" ) {
		phrase.push( `${int(random(10))}` )
  }
    
  
 

	if( key === "s" ) {
		phrase.push( random( ["!","@","#","$","%","^","&","*","(",")","<",">","?","{","}","[","]","-","_","+","=","|"] ));
	}
  
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertToCapitalized() {
	phrase = phrase.map( capitalize );

//From Mr. Oswalds Example
}