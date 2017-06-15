var msg = [],
  msgid = 0,
  currDiv = 0,
  currMsg = 0;

function randomRGB() {
   var red = Math.floor(Math.random() * 180 + 20).toString(16);
   var green = Math.floor(Math.random() * 180 + 20).toString(16);
   var blue = Math.floor(Math.random() * 180 + 20).toString(16);
   return "#" + red + green + blue;
}

function godamu(num) {

  if (currDiv > 19) currDiv = 0;

  topp = currDiv % 10;

  var divbox = $("#danmu div:eq(" + currDiv + ")");
  var content = "<div>" + msg[num] + "</div";

  if(divbox.length > 0) {
    divbox.html(msg[num]);
  } else {
    $("#danmu").append(content);
    divbox = $("#danmu div:eq(" + currDiv + ")");
  }

  divbox.css("top", (currDiv % 10 * 28 + 10) + "px");
  divbox.css("right", 0);
  divbox.css("color", randomRGB());

  console.log(currDiv + ": " + divbox.offset().top);

  divbox.animate({right: $("#danmu").outerWidth() + "px"}, 10000);

  currDiv++;

}

function shoot() {
  if (msg.length > 0) {
    if (currMsg > msg.length - 1) currMsg = 0;
    godamu(currMsg);
    currMsg++;
  }
}
function updateMsg() {
  if ($("#textbox").val()) {
    if (msg.length > 50) msgid = 0;
    msg[msgid] = $("#textbox").val();
    godamu(msgid);
    msgid++;
    $("#textbox").val("");
  }
}

$("#shootbtn").click(updateMsg);

$("#textbox").keyup(function(){
  if(event.keyCode == 13){
      updateMsg();
  }
});

$("#resetbtn").click(function(){
  $("#danmu").html("");
  msg = [];
  currDiv = 0;
  currMsg = 0;
  msgid = 0;
  topp = 0;
});

setInterval(shoot, 888);