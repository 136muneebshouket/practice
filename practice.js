
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

// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

// function myStop() {
//   clearInterval(myInterval);

// }









// var value;
// function myFunction(){

// let Value=document.getElementById("input").value;
// console.log(Value);
//  value=Value;
// }



// const myFunc1 =()=>{

// console.log(value);

// }







//async awiat in javascript
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve) {
//     setTimeout(function() {resolve("I love You !!");}, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();






// for in loop i javascript


// const numbers = [45, 4, 9, 16, 25];


// for(var x in numbers){

//   console.log(numbers[x]);
// }

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }
// console.log(text);
//it also works on the objects










// for of loop in javascript


// const num = [45, 4, 9, 16, 25];


// for(var x of num){

//   console.log(x);
//   document.getElementById("p").innerHTML=x
// }

// const Person = {fname:"John", lname:"Doe", age:25};

// let tx = "";
// for (let x of Person) {
//   text += x;
// }
// console.log(tx);
//it does,nt works on the objects



// let num=0;
// // let time=true;
// function func(){
//   // if(time){
//  num+=1;
//   //  let num=20
//  console.log(num)
//  if(num==20){
//   // time=false;
//   // console.log('gone')
//   clearInterval(myinterval);
//  }
// //  alert('');
// // }
// }

// let myinterval = setInterval(func,1000);

// const func2=()=>{
//   // document.getElementById("p").innerHTML=nume;
 

// }










////////////////////////////////////////////////////////////////////

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// let index=0
// let forward=true;
// const func2=()=>{
 



//  if(forward==true){
  
  
//   if(index==fruits.length-1){
//     forward=false;
//   }else{ 
//     // console.log(fruits[index]);
//     document.getElementById('id').innerHTML=fruits[index]
//     index+=1;}
  

  
// }
//  else if (forward==false) {
//   // console.log(fruits[index]);
  
//   if(index==0){
//     forward=true;
//   }
//   else{ 
//     // console.log(fruits[index]);
//     document.getElementById('id').innerHTML=fruits[index]
//      index-=1}
//  } 


// }
// setInterval(func2,1000);





////////////////////////////////////////////////////////////////////////////

// const arr=[45, 4, 9, 16, 25];
// let num=0;
// const func=()=>{
//   document.getElementById('id').innerHTML=arr[num]
//  num+=1;

// if(num==arr.length){
//   num=0
// }
  
// };
//  let close = setInterval(func,1000);







///////////////////////////////////array sorting

// const points = [40, 100, 1, 5, 25, 10];


// let ascending =points.sort((a,b)=>{return a-b});
// console.log(ascending);
// let desending =points.sort((a,b)=>{return b-a});
// console.log(desending);
















/////////////////////////////////////////////////////////////////////////

// let p = new Promise((res,rej)=>{
 
//   setTimeout(() => {
//     let arr=[40, 100, 1, 5, 25, 10];
//    res(arr);
   
//   //  rej('some error occured');
//   }, 5000);
// })





// let Value=null;
// p.then((value)=>{
//     Value=value;
//     func();
// }).catch((error)=>{
//   console.log(error)
// })

// function func(){
//   if(Value!==null){
//     console.log(Value)
//     document.getElementById('p').innerHTML=Value;
//   }else{
//     document.getElementById('p').innerHTML='pending';
//     console.log('pending')
//   }
// }
// func();
// Value? console.log(Value):console.log('pending');






////////////////////////////////////////// reversing a string

// let str = 'world';

// let reverse = str.split('').reverse().join("").toString();
// console.log(reverse);












////////////////////////////////////////////////
//error handling
// setTimeout(()=>{
//   console.log("Hacking wifi.... Please wait..." ) 
//   }, 1000)
  
//   try{
      

//           console.log(rahul)

                  
//   }
//   catch(err){
//     console.log(err);  
//   }
  
  
//   setTimeout(()=>{ 
//           console.log("Fetching username and password.... Please wait..." )
//   }, 2000) 
  
//   setTimeout(()=>{ 
//   console.log("Hacking  facebook id.... Please wait..." )
//   }, 3000) 
  
//   setTimeout(()=>{ 
//   console.log("Username and password fetched.... Please wait..." )
//   }, 4000) 

// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;
//   try { 
//     if(x == "")  throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5)  throw "too low";
//     if(x > 10)   throw "too high";
//   }
//   catch(err) {
//     message.innerHTML = "Input is " + err;
//   }
// }








//////////////////////////////////////////////////////////////
//json


// const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age= eval("("+ obj.age +")") ;
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age() ; 





//////////////////////////////////////////////////////////////////
// dates 

// let x = new Date();
// console.log(x)
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDate());
// console.log(x.getDay());
// console.log(x.getHours,x.getMinutes,x.getSeconds);
// getHours()
// 	// Get the hour (0-23)
// getMinutes()
// 	// Get the minute (0-59)
// getSeconds()
// 	// Get the second (0-59)
// getMilliseconds()
// 	// Get the millisecond (0-999)
// getTime()









//////////////////////////////////////////////////////////////////
//object 



// function car(speed ,name){
//   this.name =name;
//   this.speed=speed

// }

//  let car1= new car(120,"cultus");
//  //we can make objects bu just
//  let car2 = new car(440,"bmw")
//  console.log(car1,car2);


 const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
person.gender = "male";
/////delete property of an object
delete person.age;

console.log(person);


/////nested objects and arrays
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for(let i in myObj.cars){
  x+=myObj.cars[i].name+",";
  for(let j in myObj.cars[i].models){
    x+=myObj.cars[i].models[j]+"<br>";
  }
}


document.getElementById("demo").innerHTML = x;
console.log(x)
 