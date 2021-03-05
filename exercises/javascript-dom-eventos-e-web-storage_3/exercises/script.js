function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


function createDaysOfDecember(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ofDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index++) {
      const days = dezDaysList[index];
      const dayListItem1 = document.createElement('li');

      if ((days === 24) || (days === 31)) {
          dayListItem1.innerHTML = days;
          dayListItem1.className = 'day holiday';
          ofDaysList.appendChild(dayListItem1);
      } else if ((days === 4) || (days === 11) || (days === 18)) {
          dayListItem1.innerHTML = days;
          dayListItem1.className = 'day friday';
          ofDaysList.appendChild(dayListItem1);
      }else if (days === 25) {
          dayListItem1.innerHTML = days;
          dayListItem1.className = 'day holiday friday';
          ofDaysList.appendChild(dayListItem1);
      } else {
          dayListItem1.innerHTML = days;
          dayListItem1.className = 'day';
          ofDaysList.appendChild(dayListItem1);
      }    
  };
};

createDaysOfDecember(); 


function addButtomHoliday() {
  const localButton = document.querySelector(".buttons-container");
  
  const button = document.createElement('button');
  button.id = 'btn-holiday'
  button.innerText = 'Feriados';
  localButton.appendChild(button);   

}
  addButtomHoliday();

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();


function addButtonFriday() {
  const localButton = document.querySelector('.buttons-container')   
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = 'Sexta-feira';
  localButton.appendChild(button);
}
addButtonFriday();

function displayFriday(array) {
  const getFridayButton = document.querySelector('#btn-friday');
  const getFriday = document.querySelectorAll('.friday');
  const Friday = document.querySelectorAll('.friday');
  const nameFriday = 'Sextou!!!';
  
  getFridayButton.addEventListener('click' , function (){
    for (let index = 0; index < getFriday.length; index += 1) {
      if (getFriday[index].innerHTML === nameFriday) {
          getFriday[index].innerHTML = array[index];
      } else {
        getFriday[index].innerHTML =  nameFriday;
      }
    }  
  })
};
let array = [4,11,18,25];
displayFriday(array);

function zoomDays(){
  const days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  }
}

function removeZoomDays(event) {
  const days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseout', function(event){
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  }
}

zoomDays();
removeZoomDays();

