'use strict';

var setupPopup = document.querySelector('.setup');
var uploadBlock = setupPopup.querySelector('.upload');
var artifact = setupPopup.querySelector('.setup-artifacts-cell').firstElementChild;
var artifactCell = setupPopup.querySelector('.setup-artifacts-cell');

var makeMoveable = function (element) {
  element.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    if (element !== uploadBlock) {
      element.style.position = 'absolute';
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onElementMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if (element === uploadBlock) {
        element = setupPopup;
      }

      element.style.top = (element.offsetTop - shift.y) + 'px';
      element.style.left = (element.offsetLeft - shift.x) + 'px';
    };

    var onElementMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (isDragged) {
        var onClickPreventDefault = function (evtent) {
          evtent.preventDefault();
          uploadBlock.removeEventListener('click', onClickPreventDefault);
        };
        uploadBlock.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onElementMouseMove);
      document.removeEventListener('mouseup', onElementMouseUp);
    };

    document.addEventListener('mousemove', onElementMouseMove);
    document.addEventListener('mouseup', onElementMouseUp);
  });
};

makeMoveable(artifact);
makeMoveable(uploadBlock);
