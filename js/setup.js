'use strict';

document.querySelector('.setup').classList.remove('hidden');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandom = function (array) {
  var random = Math.floor(Math.random() * array.length);

  return array[random];
};

var getRandomName = function (namesArray, surNamesArray) {
  var firstName = getRandom(namesArray);
  var secondName = getRandom(surNamesArray);

  return firstName + ' ' + secondName;
};

var getRandomWizard = function () {
  var randomWizard = {};
  randomWizard.name = getRandomName(names, surNames);
  randomWizard.coatColor = getRandom(coatColor);
  randomWizard.eyesColor = getRandom(eyesColor);

  return randomWizard;
};

var getWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};
