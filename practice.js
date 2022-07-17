
// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function mycallback(){ 
//     document.write('Numbers added and thank u'); 
//      } 
//      // Calling addition() function
//     addition(5,5,mycallback);

















// Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}  ""${student.subject}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();











// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 












// generating random numbers from an arrray

// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 
//   const func = ()=>{
//  let INDEX =    Math.floor(Math.random()* (arr.length-1))
//  document.getElementById("demo1").innerHTML=arr[INDEX];

//   }

  //random numbwers
   










//   let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 

//  let arr2 = arr.filter((num)=>{
//     for(var j = 2; j<=100; j++){
    
//       if(num%j==0 && num!==j){
//        return false;
//       }
     
//     }
//      return true;
//     })

// console.log(arr2)













// let increment = document.querySelector("#increment");
// let decrement = document.querySelector("#decrement");
// let counterValue = document.querySelector("#counterValue");

// let counter = 0;

// increment.addEventListener("click" , ()=>{
//     counter++;
//     counterValue.innerText = counter;
// })
// ;
// decrement.addEventListener("click" , ()=>{
//     counter--;
//     counterValue.innerText = counter;
// });














// const text = [
//     `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
//     `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
//     `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
//     `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
//     `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
//   I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
//     `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
//     `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
//     `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
//     `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
//   ];

//   const form = document.querySelector(".lorem-form");
// const amount = document.getElementById("amount");
// const result = document.querySelector(".lorem-text");

// form.addEventListener("submit", function (e) {
//   // A click on a form submit button – initiates its submission to the server.

//   e.preventDefault();

//   const value = parseInt(amount.value);
//   const random = Math.floor(Math.random() * text.length);

//   if (isNaN(value) || value <= 0 || value > 9) {
//     result.innerHTML = `<p class="result">${text[random]}</p>`;

// } else {
    
//     let paragrphs = text.slice(0, value);
//     paragrphs = paragrphs
//       .map(function (para) {
//         return `<p class="result">${para}</p>`;
//       })
      
//     result.innerHTML = paragrphs;
//   }
   
  
// });
















// split method of string method

// let text = "abcdefg";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray)












// // getting number from user and finding prime number btween it
// const form = document.querySelector(".grocery-form");
// form.addEventListener("submit", func);


// function func(){
//     let num = document.getElementById("demo");
//     let num2 = num.value;
    
// let str = num2.toString().split("")
// let arr=[];
//      for(var i=0; i<=str.length-1; i++){
//       var number = parseInt(str[i])
//           arr.push(number);
//      }

//        let arr2 = arr.filter((num)=>{

//              for(var j=2; j<=arr.length; j++){
//               if(num%j==0 && num!==j){
//                 return false;
//               }
//              }
//              return true;
//        })
//        document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

// }










// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 















// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;













// let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);

// document.getElementById("demo").innerHTML = result;












// function myFunction() {
//   document.getElementById("btn").setAttribute("onclick", "myFunc2()"); 
//   document.getElementById("btn").innerHTML='change';
// }

// const myFunc1=()=>{

// console.log('i was clicked');

// }
// const myFunc2=()=>{
  
//   console.log('i 2 was clicked');
  
//   }

















// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function mycallback(){ 
//     document.write('Numbers added and thank u'); 
//      } 
//      // Calling addition() function
//     addition(5,5,mycallback);

















// Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}  ""${student.subject}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();











// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 












// generating random numbers from an arrray

// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 
//   const func = ()=>{
//  let INDEX =    Math.floor(Math.random()* (arr.length-1))
//  document.getElementById("demo1").innerHTML=arr[INDEX];

//   }

  //random numbwers
   










//   let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 

//  let arr2 = arr.filter((num)=>{
//     for(var j = 2; j<=100; j++){
    
//       if(num%j==0 && num!==j){
//        return false;
//       }
     
//     }
//      return true;
//     })

// console.log(arr2)













// let increment = document.querySelector("#increment");
// let decrement = document.querySelector("#decrement");
// let counterValue = document.querySelector("#counterValue");

// let counter = 0;

// increment.addEventListener("click" , ()=>{
//     counter++;
//     counterValue.innerText = counter;
// })
// ;
// decrement.addEventListener("click" , ()=>{
//     counter--;
//     counterValue.innerText = counter;
// });














// const text = [
//     `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
//     `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
//     `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
//     `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
//     `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
//   I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
//     `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
//     `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
//     `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
//     `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
//   ];

//   const form = document.querySelector(".lorem-form");
// const amount = document.getElementById("amount");
// const result = document.querySelector(".lorem-text");

// form.addEventListener("submit", function (e) {
//   // A click on a form submit button – initiates its submission to the server.

//   e.preventDefault();

//   const value = parseInt(amount.value);
//   const random = Math.floor(Math.random() * text.length);

//   if (isNaN(value) || value <= 0 || value > 9) {
//     result.innerHTML = `<p class="result">${text[random]}</p>`;

// } else {
    
//     let paragrphs = text.slice(0, value);
//     paragrphs = paragrphs
//       .map(function (para) {
//         return `<p class="result">${para}</p>`;
//       })
      
//     result.innerHTML = paragrphs;
//   }
   
  
// });
















// split method of string method

// let text = "abcdefg";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray)












// // getting number from user and finding prime number btween it
// const form = document.querySelector(".grocery-form");
// form.addEventListener("submit", func);


// function func(){
//     let num = document.getElementById("demo");
//     let num2 = num.value;
    
// let str = num2.toString().split("")
// let arr=[];
//      for(var i=0; i<=str.length-1; i++){
//       var number = parseInt(str[i])
//           arr.push(number);
//      }

//        let arr2 = arr.filter((num)=>{

//              for(var j=2; j<=arr.length; j++){
//               if(num%j==0 && num!==j){
//                 return false;
//               }
//              }
//              return true;
//        })
//        document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

// }










// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 















// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;













// let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);

// document.getElementById("demo").innerHTML = result;












// function myFunction() {
//   document.getElementById("btn").setAttribute("onclick", "myFunc2()"); 
//   document.getElementById("btn").innerHTML='change';
// }

// const myFunc1=()=>{

// console.log('i was clicked');

// }
// const myFunc2=()=>{
  
//   console.log('i 2 was clicked');
  
//   }










// The setInterval() and clearinterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// 1 second = 1000 milliseconds.















// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function mycallback(){ 
//     document.write('Numbers added and thank u'); 
//      } 
//      // Calling addition() function
//     addition(5,5,mycallback);

















// Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}  ""${student.subject}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();











// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 












// generating random numbers from an arrray

// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 
//   const func = ()=>{
//  let INDEX =    Math.floor(Math.random()* (arr.length-1))
//  document.getElementById("demo1").innerHTML=arr[INDEX];

//   }

  //random numbwers
   










//   let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 

//  let arr2 = arr.filter((num)=>{
//     for(var j = 2; j<=100; j++){
    
//       if(num%j==0 && num!==j){
//        return false;
//       }
     
//     }
//      return true;
//     })

// console.log(arr2)













// let increment = document.querySelector("#increment");
// let decrement = document.querySelector("#decrement");
// let counterValue = document.querySelector("#counterValue");

// let counter = 0;

// increment.addEventListener("click" , ()=>{
//     counter++;
//     counterValue.innerText = counter;
// })
// ;
// decrement.addEventListener("click" , ()=>{
//     counter--;
//     counterValue.innerText = counter;
// });














// const text = [
//     `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
//     `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
//     `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
//     `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
//     `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
//   I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
//     `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
//     `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
//     `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
//     `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
//   ];

//   const form = document.querySelector(".lorem-form");
// const amount = document.getElementById("amount");
// const result = document.querySelector(".lorem-text");

// form.addEventListener("submit", function (e) {
//   // A click on a form submit button – initiates its submission to the server.

//   e.preventDefault();

//   const value = parseInt(amount.value);
//   const random = Math.floor(Math.random() * text.length);

//   if (isNaN(value) || value <= 0 || value > 9) {
//     result.innerHTML = `<p class="result">${text[random]}</p>`;

// } else {
    
//     let paragrphs = text.slice(0, value);
//     paragrphs = paragrphs
//       .map(function (para) {
//         return `<p class="result">${para}</p>`;
//       })
      
//     result.innerHTML = paragrphs;
//   }
   
  
// });
















// split method of string method

// let text = "abcdefg";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray)












// // getting number from user and finding prime number btween it
// const form = document.querySelector(".grocery-form");
// form.addEventListener("submit", func);


// function func(){
//     let num = document.getElementById("demo");
//     let num2 = num.value;
    
// let str = num2.toString().split("")
// let arr=[];
//      for(var i=0; i<=str.length-1; i++){
//       var number = parseInt(str[i])
//           arr.push(number);
//      }

//        let arr2 = arr.filter((num)=>{

//              for(var j=2; j<=arr.length; j++){
//               if(num%j==0 && num!==j){
//                 return false;
//               }
//              }
//              return true;
//        })
//        document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

// }










// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 















// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;













// let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);

// document.getElementById("demo").innerHTML = result;












// function myFunction() {
//   document.getElementById("btn").setAttribute("onclick", "myFunc2()"); 
//   document.getElementById("btn").innerHTML='change';
// }

// const myFunc1=()=>{

// console.log('i was clicked');

// }
// const myFunc2=()=>{
  
//   console.log('i 2 was clicked');
  
//   }










// The setInterval() and clearinterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// 1 second = 1000 milliseconds.

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);

}