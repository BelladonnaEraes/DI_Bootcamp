let star = ["*","**","***","****","*****","******"]
for (let i=0; i<star.length; i++) {
    console.log(star[i]);}


let star1 = [" ", "*","**","***","****","*****","******"]
for (let i=0; i<1; i++)	
for (let j=0; j<star1.length; j++) {
	console.log(star1[i]+star1[j]);}

next time try using built in javascript methods like repeat 

another salution would be 
let twoPyramid = '';

for (i = 0; i < 6; i++) {
	for (j = 0; j <= i; j++) {
        twoPyramid += '*';
    }
    twoPyramid += '\n';
}

console.log(twoPyramid)
