// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
    let goodCount = 0;
   for (let index = 0; index < x.length; index++) {
    const element = x[index];
    if (element === 'good') {
        goodCount++
    }
   }
   if (goodCount > 0 && goodCount <= 2) {
    console.log("Publish!") 
   }else if (goodCount > 2){
    console.log("I smell a series!") 
   }else{
    console.log("Fail!")
   }
}

// well(['bad', 'bad', 'bad']);
// well(['good', 'bad', 'bad', 'bad', 'bad']);
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
well([undefined])