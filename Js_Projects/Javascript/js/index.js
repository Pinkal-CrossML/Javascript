function myFunction() {

    alert("Hello! I am an alert box!");
    console.log("from myfunc")

  }

  function addFunction(a, b) {
    console.log(a-b);

  }
  // addFunction(10,5);


  function wloopFunction() {
    var myarray = [];

    var i = 0;
    while(i < 5){
      myarray.push(i);
      i++;
    }
    console.log(myarray)
  }
  // wloopFunction();

  function floopfunction(){
    var myfarray = [];
    for (var i =0; i <5; i++){
      
      myfarray.push(i,'ok');
    }
    console.log(myfarray)
  }
  // floopfunction();


function oddnumber(){
  var myodd = [];
  for (var i =0; i < 10; i+=2){
    myodd.push(i,'even');
}
console.log(myodd)
}

// oddnumber();


var ranum = Math.floor(Math.random() * 20);

function randomWholeNum(){

  return Math.floor(Math.random() * 10);

}
console.log(randomWholeNum());
