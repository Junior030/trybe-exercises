let peca = "Bispo";


switch (peca.toUpperCase()) {
    case "PEAO":
        console.log("Somente uma casa para frente!");
        break;
    case "TORRE":
        console.log("Movimento em T!");
        break;
    case "CAVALO":
        console.log("Movimento em L!");
        break;
    case "BISPO":
        console.log("Diagonal!");
        break;
    case "RAINHA":
        console.log("Qualquer lado!");
        break;
    case "REI":
        console.log("Qualquer lado mas somente uma casa!");
        break;          
    default:
        break;
}