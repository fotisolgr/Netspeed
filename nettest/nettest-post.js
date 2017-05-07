//Variables Declaration
var download_speed;
var upload_speed;
var ping;


// NetTest functions (Download-Upload-Ping)
NetTest.testDownload = function(imagePath, imageSize) {

 var handler = function(resultObj) {
  download_speed = resultObj.throughput();
  NetTest.testUpload("images/" + "medium.jpg", 1271750);
 }
 NetTest.XHR.download(imagePath, imageSize, handler);
}
//---------------------------------------------------
NetTest.testUpload = function(imagePath, imageSize) {
 var handler = function(resultObj) {
  upload_speed = resultObj.throughput();
  NetTest.testPing("images/" + "tiny.gif", 653);
 }
 NetTest.XHR.upload(imagePath, imageSize, handler);
}
//-----------------------------------------------------
NetTest.testPing = function(imagePath, imageSize) {
 var handler = function(resultObj) {
  ping = resultObj.round_trip();
  post();
 }
 NetTest.ping(imagePath, imageSize, handler, true)
}
//----------------------------------------------------


function post() {
 if (typeof download_speed === 'undefined' || isNaN(download_speed) || !download_speed) {
  download_speed = 0;
 }
 if (typeof upload_speed === 'undefined' || isNaN(upload_speed) || !upload_speed) {
  upload_speed = 0;
 }
 if (typeof ping === 'undefined' || isNaN(ping) || !ping) {
  ping = 0;
 }
 

var result = {downloadThroughput: download_speed, uploadThroughput: upload_speed, localPing: ping};
$.ajax({
	type: "POST",
	data :JSON.stringify(result),
	url: "/path/to/your/file.php",
	contentType: "application/json"
});
}


