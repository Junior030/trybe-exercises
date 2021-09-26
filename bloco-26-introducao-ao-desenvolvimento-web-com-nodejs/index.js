const fs = require('fs').promises;

function readNumberPromisse(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
      return reject(new Error("Informe apenas números"));
    }
    const resultado = ( (num1 + num2) * num3 );
    if (resultado < 50) {
      return reject(new Error("Valor muito baixo"))
    }
    resolve(resultado);
  })
}

readNumberPromisse(Math.floor(Math.random() * 100 + 1),2,'a')
  .then(content => console.log(`Sucesso ${content}`))
  .catch(err => console.error(`Erro: ${err.message}`));


readNumberPromisse(Math.floor(Math.random() * 100 + 1),2,30)
  .then(content => {
    console.log(`Sucesso ${content}`);
  }).catch(err => {
    console.error(`Erro: ${err.message}`);
  })


  //-----------------------------------SIMPSONS

function getSimpsonsAll() {
  return new Promise((resolve, reject) => {
   const simpsons = fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    simpsons ? resolve(simpsons) : reject("Arquivo não lido")
  })
} //Retorna todos os simpsons



async function getSimpsonById(id) {
  const simpsons = await getSimpsonsAll()
  const chosenSimpsons = simpsons.find(simpson => id == simpson.id);
  if (!chosenSimpsons) throw new Error('ID não encontrado!');
  return chosenSimpsons;
}//


console.log(getSimpsonById(3));