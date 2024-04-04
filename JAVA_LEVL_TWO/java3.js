// var roster = []
// function addNew(){
//   var newName = prompt("what name would you like to add?")
//   roster.push(newName)
// }
// function remove(){
//   var remName = prompt("What name would you like to remove?")
//   var index = roster.indexOf(remName);
//   roster.splice(index,1)
// }
// function display(){
//   console.log(roster);
// }
//
// var start = prompt("would you like to start the roster web app? y/n")
// var request = "empty";
//
// if (start === 'y')
//   while (request != "quit") {
//     request = prompt("please select an action: add, remove, display, or quit.")
//     if (request === 'add'){
//       addNew();
//     }else if (request === 'remove' ) {
//       remove();
//     }else if (request === 'display') {
//       display();
//     }
//     else {
//       request = "quit"
//     }
//   }
var employee = {
  name: "john Smith",
  job: "Programer",
  age: 31,
  nameLength:function(){
    console.log(this.name.length);
  },

  report:function(){
    alert("Name is"+this.name+", Job is: "+this.job+", Age is:"+this.age);
  },

  lastName:function(){
    console.log(this.name.split(" ")[1])
  }

}
