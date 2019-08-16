
let num = 50;

do {
    console.log( num );
    num++;
} while ( num < 55 );

while ( num<55 ) {
    console.log( num );
    num++;
}

for ( let i = 1; i < 8; i++ ) {
    if ( i == 6 ) {
        continue;
    }
    console.log( i );
}

// let x = 5; 
// console.log( x++ );
// console.log( x );

// console.log( ++x );

// let y = [ ] + false - null;
// let z = [ ] + false; 
// let c = null + true;

// console.log(y);
// console.log(z);
// console.log(c);

// let y = 1; 
// let x = y = 2; 
// console.log(x);
// console.log(y);

let sum1 = [ ] + 1 + 2
console.log(sum1);

let alert1 = "1"[0];
console.log(alert1);

let alert2 = 2 && 1 && null && 0 && undefined;
console.log(alert2);

// let a = true,
//     b = true;

// let alert3 = !!( a && b ) === (a && b);
// console.log(alert3);


let alert4 = ( null || 2 && 3 || 4 );
console.log(alert4);


let a = [1, 2, 3]
    b = a;

console.log(a == b);

console.log(typeof( +"Infinity" ));

console.log("ёжик" > "яблоко");

console.log( 0 || "" || 2 || undefined || true || false);


