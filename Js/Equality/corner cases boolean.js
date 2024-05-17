// if statement gives us permission to start the toBoolean operation on the array.

const workShopElement = []

if (workShopElement) {
    console.log(true) // true, coz if statemet gives us permission to start the toboolean operation on the array and it's match great so he give us true.
}else{
    console.log(false)
}


if (workShopElement == true) {
    console.log(false);
}
if ('' == true) {
    console.log(false);
}
if (0 === 1) { 
    console.log(false); }

if (workShopElement == false) {
    console.log(true);
}
if ('' == false) {
      console.log(true);
}    
if (0 === 0) { 
    console.log(true); }