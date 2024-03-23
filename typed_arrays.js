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

//--------------DataView-----------------

//creating a dataview
let buffer1 = new ArrayBuffer(4); //4bytes
let dataView = new DataView(buffer1);

//writing to datavew
dataView.setUint32(0, 42,true); 

//reading from dataview
let value = dataView.getUint32(0, true);

console.log(value);


//------------------dataview other example--------------------------------

function toBinary(x,{type = "Float64", LittleEndian= false, separator = " ", radix = 16 } = {},) {
    const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
    const dv = new DataView(new ArrayBuffer(bytesNeeded));
    dv[`set${type}`](0,x,LittleEndian);
    const bytes = Array.from({length: bytesNeeded }, (_, i) =>
    dv
    .getUint8(i)
    .toString(radix)
    .padStart(8 / Math.log2(radix), "0"),
    );
    return bytes.join(separator);
}

console.log(toBinary(1.1));
console.log(toBinary(1.1, {LittleEndian: true}));
console.log(toBinary(20, {type: "Int8", radix: 2}));