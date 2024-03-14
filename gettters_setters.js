const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
  console.log(myObj.a); // 7
  console.log(myObj.b); // 8, returned from the get b() method
  myObj.c = 50; // Calls the set c(x) method
  console.log(myObj.a); // 25