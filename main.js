var canvas = new fabric.Canvas('canvas');
var blockie_width = 45;
var blockie_height = 45;
var player_x = 10;
var player_y = 10;
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object = Img;
player_object.scaleToWidth(123);
player_object.scaleToHeight(111);
player_object.set({
top: player_y,left:player_x}}