
var home, art, write, tech, techArt, writeTech, writeArt, me

home="I'm a digital creator: I work with data analysis, design, video, and writing. I've written articles, produced videos, created interactive maps, and hacked my way through neural networks. The structure behind my scrappy technical skills is what I've learned by studying writing: the fundamentals of a good yarn.<br><br>I also made this website.<br>(That should explain a lot)."
art="I wrote, directed, and edited <a href='https://vimeo.com/album/5416689' target='_blank'>a short films</a> for the <a href='http://www.lighthousestudio.org/adrenaline-film-project' target='_blank'>Adrenaline Film Project</a>, a 72 hour film competition hosted by the Virginia Film Festival."
write="I am on the editing staff for a <a href='https://hackcville.com/pioneer/' target='_blank'>digital student publication</a> and I regularly contribute written articles covering student standouts and local innovators. <br>I was <a href='https://www.nytimes.com/2017/08/13/opinion/university-virginia-uva-protests-charlottesville.html' target='_blank'>briefly featured</a> in the New York Times writing about Nazis in my hometown, Charlottesville."
tech="After recieving a scholarship to study data science in the summer program iXperience, I interned for an ed-tech startup, <a href='http://uthini.co.za/' target='_blank'>Uthini</a>. I used Tableau, Plot.ly, and Illustrator for visualization. Data wrangling, text processing, and some neural networks were all done in Python. This semester I'm focusing on a statistics with R course to catch up my personal back-end. </a> "
techArt="I regularly produce video content for a <a href='https://hackcville.com/pioneer/' target='_blank'>digital student publication</a>. I've helped to produce and edit <a href='https://www.facebook.com/uvastudco/videos/10155855095159715/' target='_blank'>video shown to Hillary Clinton</a> and a <a href='https://vimeo.com/296778192' target='_blank'>video for the University of Virginia's orientations</a>."
writeTech="One of my favorite articles I've created is an <a href='https://hackcville.com/pioneer/2018/02/14/love-around-grounds/' target='_blank'>interactive map</a> of student-submitted stories of love on campus. <br>I collected and analyzed over 1 million tweets for a data storytelling <a href='https://github.com/IsabellaCiambotti/six-nights-of-protest' target='_blank'>project</a> using Illustrator and d3.js. ('Using' is a strong word for my d3 skills, but we're getting there)."
writeArt="I'm a creative writing major, and writing will always be my home base. I've <a href='https://www.qanthology.com/single-post/2018/07/13/At-Sea' target='_blank'>been published in Q*</a>, a queer arts magazine at the University of Virginia."

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

