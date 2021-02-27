let n = 5, x=5, y;
let asterisco = "*";
let aux = " ";

for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n; j++) { 
        if (j == x) {
            for(y = i; y>0; y--){
                aux += asterisco;                
            }
            x--;
            j = 5;
        }else{
            aux = aux + " ";
        }   
    }
    console.log(aux); 
    aux = " ";   
}

