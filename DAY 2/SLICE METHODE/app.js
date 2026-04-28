let name = "pankaj";
let str = name.slice(0); //index no 0 to end of string  //pankaj

console.log(str);

let first= name.slice(1,4); // from 0 to n+1 !


let clg = "ApnaCollage";

let second = clg.slice(4,11);
console.log(second);

let third = clg.slice(4,clg.length);  /// length = 12 // length n-1 = 11;
                                      ///collage

console.log(clg.slice(4,clg.length)); /// collage