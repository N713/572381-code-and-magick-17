'use strict';

var cloudWidth = 420;
var cloudHeight = 270;
var columnWidth = 40;
var columnHeight = 150;
var columnY = 250;
var startTextX = 140;
var startTextY = 260;
var textY = 230;
var gap = 50;
var spaceBetween = columnWidth + gap;

var makeCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var makeText = function (ctx, x, y, text) {
  ctx.fillText(text, x, y);
};

var makeFill = function (ctx, color) {
  var fill = ctx.fillStyle = color;

  return fill;
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColumn = function (ctx, i, namesArray, timesArray, maxTime) {
  var columnGap = spaceBetween * i;
  makeFill(ctx, 'rgba(0, 0, 0, 1)');
  makeText(ctx, startTextX + columnGap, startTextY, namesArray[i]);

  ctx.fillStyle = (namesArray[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' :
    ctx.fillStyle = 'rgba' + '(' + '31' + ', ' + '58' + ', ' + '147' + ', ' + Math.random() + ')';

  var height = (timesArray[i] * columnHeight) / maxTime;
  ctx.fillRect(startTextX + columnGap, columnY - height, columnWidth, height);
  makeFill(ctx, 'rgba(0, 0, 0, 1)');
  makeText(ctx, startTextX + columnGap, textY - height, Math.floor(timesArray[i]));
};


window.renderStatistics = function (ctx, names, times) {
  makeCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  makeCloud(ctx, 100, 10, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  makeFill(ctx, 'rgba(0, 0, 0, 1)');
  makeText(ctx, 120, 30, 'Ура вы победили!');
  makeText(ctx, 120, 50, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    getColumn(ctx, i, names, times, maxTime);
  }
};
