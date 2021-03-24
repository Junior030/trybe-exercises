const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const turno = 'turno';
  const manha = 'manhã';
  const addTurnoManha = (lesson2, turno, manha) => {
      const lesson2Copia = Object.assign({}, {turno: manha}, lesson2);
      return lesson2Copia;
  };
  //console.log(addTurnoManha(lesson2,turno,manha));

  const listKeys = (lesson1, lesson2, lesson3) => {
    console.log(Object.keys(lesson1));
    console.log(Object.keys(lesson2));
    console.log(Object.keys(lesson3));
  };

  //listKeys(lesson1,lesson2,lesson3);

  function valuesObject(lesson1) {
      return Object.values(lesson1)
  }

  //console.log(valuesObject(lesson2));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  
//   console.log(allLessons);


const totalEstudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// console.log(totalEstudents);

function valorChave(objeto, index) {
    const value = Object.values(objeto);
    return value[index];
}

// console.log(valorChave(lesson3, 1));

const verificacao = (objeto, chave, valor) => {
    const verifique = Object.entries(objeto);
    let isEqual = false;

    for (let key in verifique) {
        if (verifique[key][0] === chave && verifique[key][1] === valor) {
            isEqual = true;
        }
        return isEqual;
    }

    return verifique;
};
  console.log(verificacao(lesson3, 'materia', 'Matemática'));