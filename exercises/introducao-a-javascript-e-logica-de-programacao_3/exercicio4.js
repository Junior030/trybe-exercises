let n = 5, x = 3;
let asterisco = "*";
let aux = " ";


for (let i = 1; i <= n; i++) {    
    for (let j = 1; j <= n; j++) { 
        if(i = 5){
            aux += asterisco;
        }else{
            aux = aux + " ";
        }    
    }
    console.log(aux); 
      
}