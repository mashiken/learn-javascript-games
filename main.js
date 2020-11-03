// 画面サイズ
const SCREEN_W = 180;
const SCREEN_H = 320;

// キャンバスサイズ
const CANVAS_W = SCREEN_W *2;
const CANVAS_H = SCREEN_H *2;

// フィールドサイズ
const FIELD_W = SCREEN_W *2;
const FIELD_H = SCREEN_H *2;

// キャンバス
let can = document.getElementById("can");
let con = can.getContext("2d");

can.width = CANVAS_W;
can.height = CANVAS_H;

