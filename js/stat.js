'use strict';

var cloudWidth = 420;
var cloudHeight = 270;

var makeCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var makeText = function (ctx, x, y, text) {
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx) {
  makeCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  makeCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  makeText(ctx, 120, 30, 'Ура вы победили!');
  makeText(ctx, 120, 50, 'Список результатов:');
};
