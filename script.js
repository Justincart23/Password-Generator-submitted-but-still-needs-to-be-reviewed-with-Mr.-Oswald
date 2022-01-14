let fontSize = 19;
let words = new Map();
let phrase = [];
let drawHelpText = true;
let helpText = [

  "𝕂𝕖𝕪 🔑 ",
  "____________",
  " ",
  "🔤 𝒮𝓅𝒶𝒸𝑒 = 𝒩𝑒𝓌 𝒲𝑜𝓇𝒹",
  "__________",
  " ",
  "🔢 𝒟 = 𝒢𝑒𝓃𝑒𝓇𝒶𝓉𝑒 𝒟𝒾𝑔𝒾𝓉",
  "__________",
  " ",
  "#️⃣ 𝒮 = 𝒢𝑒𝓃𝑒𝓇𝒶𝓉𝑒 𝒮𝓎𝓂𝒷𝑜𝓁",
"__________",
" ",
  "↩️ 𝑅 = 𝑅𝑒𝓈𝑒𝓉 𝒫𝒶𝓈𝓈𝓌𝑜𝓇𝒹",
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