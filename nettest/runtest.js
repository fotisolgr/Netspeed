/*Images used for download and upload tests retrieved from
 * Wikimedia Commons (http://commons.wikimedia.org/wiki/File:AsterNovi-belgii-flower-1mb.jpg)
 * under the Creative Commons Attribution-Share Alike 3.0 Unported license
 */

//Declaring global variables
var download_throughput;
var upload_throughput;
var local_ping;
var agent_ip = document.getElementById("settings").getAttribute("agentIp");
if (typeof document.getElementById("settings").getAttribute("imagesLocation") === 'undefined' || document.getElementById("settings").getAttribute("imagesLocation") == '') {
	var images_location = "https://vm3-gn3-sa2t5.vm.grnet.gr/wifimon/images/";
}else{
	var images_location = document.getElementById("settings").getAttribute("imagesLocation");
}
if (typeof document.getElementById("settings").getAttribute("testtool") === 'undefined' || document.getElementById("settings").getAttribute("testtool") == '') {
	var test_tool = "N/A";
}else{
	var test_tool = document.getElementById("settings").getAttribute("testtool");
}
if (typeof document.getElementById("settings").getAttribute("cookieTimeInMinutes") === 'undefined' || document.getElementById("settings").getAttribute("cookieTimeInMinutes") == '') {
	var cookie_time = 1.5;
}else{
	var cookie_time = parseFloat(document.getElementById("settings").getAttribute("cookieTimeInMinutes"));
}
var latitude;
var longitude;
var location_method;

if (document.getElementById("settings").getAttribute("hostingWebsite") == 'http') {
	var agent = "http://" + agent_ip + ":" + agent_port+ "/wifimon/";
}else{
	var agent = "https://" + agent_ip + ":" + agent_port+ "/wifimon/";
}



// NetTest functions (Download-Upload-Ping)
NetTest.testDownload = function(imagePath, imageSize) {

 var handler = function(resultObj) {
  download_throughput = resultObj.throughput();
  NetTest.testUpload(images_location + "medium.jpg", 1271750);
 }
 NetTest.XHR.download(imagePath, imageSize, handler);
}

NetTest.testUpload = function(imagePath, imageSize) {
 var handler = function(resultObj) {
  upload_throughput = resultObj.throughput();
  NetTest.testPing(images_location + "tiny.gif", 653);
 }
 NetTest.XHR.upload(imagePath, imageSize, handler);
}

NetTest.testPing = function(imagePath, imageSize) {
 var handler = function(resultObj) {
  local_ping = resultObj.round_trip();
  postToAgent();
 }
 NetTest.ping(imagePath, imageSize, handler, true)
}

// Get location through IP
function geoTest() {
 if (google.loader.ClientLocation) {
  latitude = google.loader.ClientLocation.latitude;
  longitude = google.loader.ClientLocation.longitude;
  location_method = "'Through IP'";
 }
}   

// Post measurement to agent
function postToAgent() {
 if (typeof download_throughput === 'undefined' || isNaN(download_throughput) || !download_throughput) {
  download_throughput = 0;
 }
 if (typeof upload_throughput === 'undefined' || isNaN(upload_throughput) || !upload_throughput) {
  upload_throughput = 0;
 }
 if (typeof local_ping === 'undefined' || isNaN(local_ping) || !local_ping) {
  local_ping = 0;
 }
 if (typeof latitude === 'undefined' && typeof longitude === 'undefined') {
    latitude = 0;
    longitude = 0;
 }
 if (typeof location_method === 'undefined') {
  location_method = "N/A";
 }

var measurement = {downloadThroughput: download_throughput, uploadThroughput: upload_throughput, localPing: local_ping, latitude: latitude, longitude: longitude, locationMethod: location_method, testTool: test_tool};
$.ajax({
	type: "POST",
	data :JSON.stringify(measurement),
	url: agent + "add/",
	contentType: "application/json"
});
}

// Call to previous functions
NetTest.testGeneral = function() {
 geoTest();
 NetTest.testDownload(images_location + "large.jpg", 4811357);
}

//Set and check cookie 
function setCookie(cname,cvalue,exhours) {
 var d = new Date();
 d.setTime(d.getTime() + (exhours*60*60*1000));
 var expires = "expires=" + d.toGMTString();
 document.cookie = cname+"="+cvalue+"; "+expires;
}

//Get cookie 
function getCookie(cname) {
 var name = cname + "=";
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1);
  if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
  }
 }
 return "";
}

function checkCookie() {
 var checkTest=getCookie("nettest");
 if (checkTest != "") {
 } else {
    setCookie("nettest", "Test Already Performed", cookie_time/60);
    NetTest.testGeneral(); //Run all functions
 }
}

function runCheckCookie() {
	$.ajax({
		url: agent + "subnet/",
		type: "POST",
		contentType: "application/json",
		cache: false,
        success : function (result) {
			var check = result;
			if(check == 'true'){
				checkCookie();
			}else{
			}
		}
	});
}

runCheckCookie();
