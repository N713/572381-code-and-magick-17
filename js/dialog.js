'use strict'

var setupPopup = document.querySelector('.setup');
var uploadBlock = setupPopup.querySelector('.upload');

uploadBlock.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onUploadBlockMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
    setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';

  };

  var onUploadBlockMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onUploadBlockMouseMove);
    document.removeEventListener('mouseup', onUploadBlockMouseUp);
  };

  document.addEventListener('mousemove', onUploadBlockMouseMove);
  document.addEventListener('mouseup', onUploadBlockMouseUp);
});
