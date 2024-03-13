

  for(let jm=0; jm<5; jm++){
    //console.log("Im in");
  }

//console.log("hello");

function loop(x) {
    if (x<=10) {
        return;
    }

    let m = loop(x++);
    // console.log(m);

    
}

loop(0)

function foo(i){
    if (i<0){
        return;
    }

    // console.log(`begin: ${i}`);
    foo(i-1)
    // console.log(`end: ${i}`);
}
foo(3)

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x+y+z);
        }
        C(3);
    }
    B(2);
}
A(1);