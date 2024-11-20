// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
}) ();

//Unnamed IIFE
( (user) => {
    console.log(`HELLO, ${user}`);
}) ('SAKSHAM')
