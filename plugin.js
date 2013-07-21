


function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("http://members.icradio.com/plugins/player/plugin.css", "css") //dynamically load and add this .css file

$(function () {
// To add source element for ogg
$("#icradio-live-plugin").html("<audio controls=\"controls\"><source src=\"http:\/\/icecast.icradio.com:8000\/live-mp3-high\" type=\"audio\/mpeg\" \/><source src=\"http:\/\/icecast.icradio.com:8000\/vorbis-low\" type=\"audio\/ogg; codecs=vorbis\" \/>Sorry, your browser doesn't support HTML5 audio.</audio>")


});
