
var home, art, write, tech, techArt, writeTech, writeArt, me

home="I'm a digital creator: I work with data analysis, interactive design, video, and code. I've written articles, produced videos, created interactive maps, and hacked my way through neural networks. The structure behind my scrappy technical skills is what I've learned by studying writing: the fundamentals of a good yarn.<br><br>I also made this website.<br>(That should explain a lot.)"
art="I produced <a href='https://vimeo.com/album/5416689' target='_blank'>two short films</a> for the <a href='http://www.lighthousestudio.org/adrenaline-film-project' target='_blank'>Adrenaline Film Project</a>, a 72 hour film competition hosted by the Virginia Film Festival."
write="I am on the editing staff for a <a href='https://hackcville.com/pioneer/' target='_blank'>digital student publication</a> and I regularly contribute written articles covering student standouts and local innovators. <br>I was <a href='https://www.nytimes.com/2017/08/13/opinion/university-virginia-uva-protests-charlottesville.html' target='_blank'>briefly featured</a> in the New York Times writing about Nazis in my hometown, Charlottesville."
tech="After recieving a scholarship to study data science in the summer program iXperience, I interned for an ed-tech startup, <a href='http://uthini.co.za/' target='_blank'>Uthini</a>. I did some data visualization and classification alongside machine learning. I especially loved working with neural networks, but this semester I'm focusing on a statistics course to catch up my personal 'back-end.' I analyzed over 1 million tweets for my data visualization final, here's the <a href='https://github.com/IsabellaCiambotti/six-nights-of-protest' target='_blank'>repo</a> "
techArt="I regularly produce video content for a <a href='https://hackcville.com/pioneer/' target='_blank'>digital student publication</a>. I've led production on a <a href='' target='_blank'>video shown to Hillary Clinton</a> and a <a href='' target='_blank'>video for the University of Virginia's orientations</a>."
writeTech="One of my favorite articles I've created is an <a href='https://hackcville.com/pioneer/2018/02/14/love-around-grounds/' target='_blank'>interactive map</a> of student-submitted 'hot spots' on campus. I'm currently building the skills to do more interactive visualizations like this one (and the one you're interacting with right now)!"
writeArt="I'm a creative writing major, and writing will always be my home base. You can find some of my writing on Medium and I've <a href='https://www.qanthology.com/single-post/2018/07/13/At-Sea' target='_blank'>been published in Q*</a>, a queer arts magazine at the University of Virginia."

me="I'm in my last year at the University of Virginia, completing a B.A. in Literary Prose.<br>I give a damn about education, humor, reading, and making mistakes.<br><br>I like to play."



function homeShow() {
	document.getElementById('descr').innerHTML=home
}

function meShow() {
	document.getElementById('descr').innerHTML=me
}
function techArtShow() {
	// console.log('clicked')
	document.getElementById('descr').innerHTML=techArt
}

function writeTechShow() {
	document.getElementById('descr').innerHTML=writeTech
}

function writeArtShow() {
	document.getElementById('descr').innerHTML=writeArt
}

function techShow() {
	document.getElementById('descr').innerHTML=tech
}

function writeShow() {
	document.getElementById('descr').innerHTML=write
}

function artShow() {
	document.getElementById('descr').innerHTML=art
}

