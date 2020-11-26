let x=5;
x=8;
const greeting='whatsapp';
console.log(x);
let y=2;
console.log(x%y);
console.log(x/y);
console.log(Math.pow(x, y));
if(x<y){
    console.log('Not happening');
} else{
    console.log('This is it!');
}
function shortenConsoleLogFunction(dunno, question){
    console.log(dunno);
    console.log(question);
}
shortenConsoleLogFunction(5, 3);
const functionname1 =()=>{
    console.log('It does something!');
}
functionname1();

if(undefined===null){
    console.log('It DID execute');
}else{
    console.log('It did not get executed');
}
const makeShortandSimple =3<=9? 'ShortandSimpleWorked':'SadTimes'
console.log(makeShortandSimple);

money=x+y;
console.log(money);

if(money>=10){
    console.log('You Rich Bro');
}else{if(money<=5){
    console.log('Not So Well Bro');
}
}
if(x>3&y<3){
    console.log('You killing it bro');
}else{
    console.log('Aw shucks didnt work :(');
}
if(x>3|y>5){
    console.log('At least one is right');
}else{
    console.log('Big oops');
}
console.log('Good job me :D');
let red=3, blk=2, yell=5;
const task=5;
if(
    red==5&&
    blk==5&&
    yell==5){
       console.log("There is no imposter - hooray!")
}else if(
    red==5||
    blk==5||
    yell==5){
        console.log("There is likely an imposter dun dun dunnnnnnn")
}else{
    console.log("Yo there is still an imposter, yo");
}

switch('WOOPWOOP'){
    case 1:console.log('Its 1');
        break;
    case 2:console.log('Its TWOO');
        break;
    case 3:console.log('This is what we after - THREE');
        break;
    default:console.log('Does not belong');
        break;
}
let u=[red,blk,yell];
console.log(u[1]);
console.log(u.length);
console.log('break');
for(let i=0;i<u.length;i++){
    console.log(u[i]);
}

