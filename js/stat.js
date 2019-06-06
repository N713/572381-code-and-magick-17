'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_Y = 250;
var START_TEXT_X = 140;
var START_TEXT_Y = 260;
var TEXT_Y = 230;
var GAP = 50;
var spaceBetween = COLUMN_WIDTH + GAP;

var makeCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  makeText(ctx, START_TEXT_X + columnGap, START_TEXT_Y, namesArray[i]);

  ctx.fillStyle = (namesArray[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' :
    ctx.fillStyle = 'rgba' + '(' + '31' + ', ' + '58' + ', ' + '147' + ', ' + Math.random() + ')';

  var height = (timesArray[i] * COLUMN_HEIGHT) / maxTime;
  ctx.fillRect(START_TEXT_X + columnGap, COLUMN_Y - height, COLUMN_WIDTH, height);
  makeFill(ctx, 'rgba(0, 0, 0, 1)');
  makeText(ctx, START_TEXT_X + columnGap, TEXT_Y - height, Math.floor(timesArray[i]));
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
