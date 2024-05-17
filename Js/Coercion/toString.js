let a = [];
let b = a.toString();
console.log(b); // ""

let c = [1,2,3];
let d = c.toString();
console.log(d); // "1,2,3"

let e = [null,undefined];
let f = e.toString();
console.log(f); // ""

let g = [[0,0,0],0];
let h = g.toString();
console.log(h); // 0,0,0,0

let i = {};
let j = i.toString();
console.log(j); // [object,objet]

let k = {a:2};
let l = k.toString();
console.log(l);   // [object,object]