const uint8 = new Uint8Array([1, 2, 3]);
//console.log(uint8[0]); // 1

// For illustrative purposes only. Not for production code.
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
//console.log(Object.keys(uint8)); // ["0", "1", "2"]
//console.log(uint8[NaN]); // undefined

// Non-numeric access still works
uint8[true] = 0;
//console.log(uint8[true]); // 0

//Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with elements

//------------------Typed arrays----------------------------

//creating a new typed array
let buffer = new ArrayBuffer(4); // allocating 4 bytes
let int32View = new Int32Array(buffer);

//modifying the view
int32View[0] = 43;

//accessing the view
console.log(int32View[0]);