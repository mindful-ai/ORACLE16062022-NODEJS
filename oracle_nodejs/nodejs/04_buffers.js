const buf = Buffer.from("Hello!");
console.log(buf);
console.log(buf[1]);
console.log(buf.toString());
console.log(buf.length);
for(const i of buf){
    console.log(i);
}

// Changing the content
buf[1] = 111;
console.log(buf.toString());

// Sllicing 
const slice = buf.subarray(0, 2);
console.log(slice.toString());

// Bufffer copy
const bufcopy = Buffer.alloc(buf.length);
bufcopy.set(buf);
console.log(bufcopy.toString())