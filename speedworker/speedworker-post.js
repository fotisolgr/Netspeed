//Variables Declaration
var w=new Worker("speedtest_worker.js"); //create new worker
var local_ping;
var download_throughput;
var upload_throughput;

var download_throughputMb;
var upload_throughputMb;

var latitude;
var longitude;
var location_method;

var application = "speedtest_worker";
var device = "";

var agent_ip = document.getElementById("settings").getAttribute("agentIp");
var interval = setInterval(function(){w.postMessage("status");}.bind(this),100); //ask for status every 100ms
//--------------------------------------------------------------------------------------------

 w.onmessage=function(event){ 

	var data=event.data.split(";"); //(status: 0=not started, 1=downloading, 2=uploading, 3=ping, 4=done, 5=aborted)
 	var status=Number(data[0]);

//------------------------------------------------------
// Default xronos gia to cookie_time

if (typeof document.getElementById("settings").getAttribute("cookieTimeInMinutes") === 'undefined' || document.getElementById("settings").getAttribute("cookieTimeInMinutes") == '') {
	var cookie_time = 1.5;
}else{
	var cookie_time = parseFloat(document.getElementById("settings").getAttribute("cookieTimeInMinutes"));
}
//------------------------------------------------------
//Kathorismos http protocol
if (typeof document.getElementById("settings").getAttribute("hostingWebsite") === 'undefined' || document.getElementById("settings").getAttribute("hostingWebsite") == null || document.getElementById("settings").getAttribute("hostingWebsite") == '' || document.getElementById("settings").getAttribute("hostingWebsite") == 'https') {
	var agent = "https://" + agent_ip + ":8443/wifimon/";
}else{
	var agent = "http://" + agent_ip + ":9000/wifimon/";
}
//------------------------------------------------------
                
	//document.getElementById("download").innerHTML=data[1]+" Mbit/s";
                
	//document.getElementById("upload").innerHTML=data[2]+" Mbit/s";
                
	//document.getElementById("ping").innerHTML=data[3]+" ms ";
                
		                
          

                    download_throughputMb = data[1];
 		    upload_throughputMb = data[2];
                    local_ping = data[3];

//Metatropi se KB/s
download_throughput = (Math.round((download_throughputMb*125) * 10) / 10).toFixed(0)
upload_throughput = (Math.round((upload_throughputMb*125) * 10) / 10).toFixed(0)
local_ping = (Math.round((local_ping) * 10) / 10).toFixed(0)


 if(status >= 4 ){ // Otan status=4 to test exei oloklirwthei.

clearInterval(interval);

//------------------------------------------------------
// Get location through IP

function geoTest() {
 if (google.loader.ClientLocation) {
  latitude = google.loader.ClientLocation.latitude;
  longitude = google.loader.ClientLocation.longitude;
  location_method = "'Through IP'";
 }
}   
//------------------------------------------------------
//Device Info
function detectDevice() { 
if(navigator.userAgent.match(/iPad/i)){
  device = navigator.platform;
   
}
else if(navigator.userAgent.match(/iPhone/i)){
       device = navigator.platform;
       
}
else if(navigator.userAgent.match(/iPod/i)){
      device = navigator.platform;
      
}
else if(navigator.userAgent.match(/Android/i)){
      device = navigator.platform;
      
}
else if(navigator.userAgent.match(/BlackBerry/i)){
      device = navigator.platform;
      
}
else if(navigator.userAgent.match(/Windows Phone/i)){
      device = navigator.platform;
      
}
else if(navigator.userAgent.match(/webOS/i)){
     device = navigator.platform;
     
}
else {
    device = navigator.platform;
    
}

   return device; //prepei na perasei kai auto sto measurement
}
//------------------------------------------------------
detectDevice(); //call tou detectDevice
//------------------------------------------------------

postToAgent(local_ping,download_throughput,upload_throughput,device,application); //call tou postToAgent
//------------------------------------------------------
// Post measurement to agent


function postToAgent(local_ping,download_throughput,upload_throughput,device,application) {
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
console.log("Download speed is :", download_throughput);
console.log("Upload speed is :", upload_throughput);
console.log("Local ping is :", local_ping);	
console.log("Device :", device);
console.log("Application :", application);

var measurement = {downloadThroughput: download_throughput,
                   uploadThroughput: upload_throughput,
                   localPing: local_ping,
                   latitude: latitude,
                   longitude: longitude,
                   locationMethod: location_method};

console.log(measurement);
$.ajax({
	type: "POST",
	data :JSON.stringify(measurement),
	url: agent + "add/",
	contentType: "application/json"
});

}//telos postToAgent
//------------------------------------------------------
//Set and check cookie 

function setCookie(cname,cvalue,exhours) {
 var d = new Date();
 d.setTime(d.getTime() + (exhours*60*60*1000));
 var expires = "expires=" + d.toGMTString();
 document.cookie = cname+"="+cvalue+"; "+expires;
} 
//------------------------------------------------------
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
//------------------------------------------------------
// Check Cookie

function checkCookie() {
 var checkTest=getCookie("Boomerang");
 if (checkTest != "") {
 } else {
    setCookie("Boomerang", "Test Already Performed", cookie_time/60);
   
 }
}
//------------------------------------------------------
//Run checkCookie function

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
//------------------------------------------------------
runCheckCookie(); // call tou runCheckCookie function

}//telos if (status >= 4)

}//telos function(event){}
w.postMessage('start {"time_dl":"5", "time_ul":"5", "count_ping":"5", "garbagePhp_chunkSize":"10"}'); //enarksi tou test me tis sygkekrimenes parametrous.
