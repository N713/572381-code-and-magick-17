'use strict';

var cloudWidth = 420;
var cloudHeight = 270;
var randomSaturation = Math.floor(Math.random() * 100);

var makeCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var makeText = function (ctx, x, y, text) {
  ctx.fillText(text, x, y);
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

window.renderStatistics = function (ctx, names, times) {
  makeCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  makeCloud(ctx, 100, 10, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  makeText(ctx, 120, 30, 'Ура вы победили!');
  makeText(ctx, 120, 50, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var columnGap = 90 * i;
    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    makeText(ctx, 140 + columnGap, 260, names[i]);

    names[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)'
                      :
                      ctx.fillStyle = 'rgba' + '(' + '31' + ', ' +  '58' + ', ' + '147' + ', ' + Math.random() + ')';

    var height = (times[i] * 150) / maxTime;
    ctx.fillRect(140 + columnGap, 250 - height, 40, 0 + height);
    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    makeText(ctx, 140 + columnGap, 230 - height, Math.floor(times[i]));
  }
};
