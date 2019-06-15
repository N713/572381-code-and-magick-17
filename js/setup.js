'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var fireball = setup.querySelector('.setup-fireball');
var fireballInput = setup.querySelector('input[name="fireball-color"]');

var getRandomArrayElement = function (array) {
  var random = Math.floor(Math.random() * array.length);

  return array[random];
};

var getRandomName = function (namesArray, lastNamesArray) {
  var firstName = getRandomArrayElement(namesArray);
  var secondName = getRandomArrayElement(lastNamesArray);

  return firstName + ' ' + secondName;
};

var getRandomWizard = function () {
  var randomWizard = {};
  randomWizard.name = getRandomName(NAMES, LAST_NAMES);
  randomWizard.coatColor = getRandomArrayElement(COAT_COLORS);
  randomWizard.eyesColor = getRandomArrayElement(EYES_COLORS);

  return randomWizard;
};

var getWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};

var renderWizard = function (wizardData) {
  var similarWizard = similarWizardTemplate.cloneNode(true);

  similarWizard.querySelector('.setup-similar-label').textContent = wizardData.name;
  similarWizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  similarWizard.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

  return similarWizard;
};

var addWizards = function (wizardsArray) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(renderWizard(getWizardsArray(NUMBER_OF_WIZARDS)[i]));
  }

  return fragment;
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onCoatClick = function () {
  var color = getRandomArrayElement(COAT_COLORS);
  wizardCoat.style = 'fill: ' + color + '';
  wizardCoatInput.value = '' + color;
};

var onEyesClick = function () {
  var color = getRandomArrayElement(EYES_COLORS);
  wizardEyes.style = 'fill: ' + color + '';
  wizardEyesInput.value = '' + color;
};

var onFireballClick = function () {
  var color = getRandomArrayElement(FIREBALL_COLORS);
  fireball.style = 'background-color: ' + color;
  fireballInput.value = '' + color;
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
fireball.addEventListener('click', onFireballClick);

similarWizardList.appendChild(addWizards(getWizardsArray(NUMBER_OF_WIZARDS)));
