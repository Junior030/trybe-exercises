const promises = new Promise((resolved, reject) => {
    const array = [];
    for (let index = array.length + 1; index <= 50; index += 1) {
        array.push(Math.pow(index, 2));            
    }
    const some = array.reduce((a,b)=>a+b, 0); 
    if (some < 8000) {
        resolved(some);
    }   
    return reject(some);
})
.then(some => console.log(`Promise resolvida ${some}`))
.catch(some => console.log(`Promise rejeitada ${some}`));
