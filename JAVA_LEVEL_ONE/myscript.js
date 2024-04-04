var firstName = prompt("Frist Name please!")
var lastName = prompt("Last Name please:")
var age = prompt("how old are you?")
var height = prompt("what is your height")
var petName = prompt("what is your pet name?")
alert("Thank you so much for the imformation!")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;
 // Name condition
 if(firstName[0] === lastName[0]){
   nameCond = true;
 }else{
   nameCond = false;
 }
// Age condition
if(age > 20 && age < 30){
  ageCond = true;
}else{
  ageCond = false;
}
//height condition
if(height >= 170){
  heightCond = true;
}else{
  heightCond = false;
}
//petname
if(petName[petName.length-1] === "y"){
  petCond = true;
}else{
  petCon = false;
}
// check all condittions
if(nameCond && ageCond && heightCond && petCon){
  console.log("WELCOME SPY");
}else{
  console.log("Nothing to see here");
}

var word = "trancotam"
for(var i = 0; i < word.length; i++)
{
  console.log("ten:"+word[i])
}



var hot = false;
var temp = 100;
if(temp > 80){
  console.log("hot");
}
else {
  console.log("very hot");
}


var x = 0;
while (x < 5) {
  console.log("x is currently:"+x);

  if( x === 3){
    console.log("x is equal to three!")
  }
  else{
    console.log("x is unequal to three")
  }
  console.log("tam");
  x++;
}

for(var y = 0; y<10 ; y++){
  console.log("gia tri y"+y)
}





alert("welcome to your bank");
var deposit = prompt("how much would you like")
alert("you 've deposited: "+deposit)
console.log("you are a cool person!")
