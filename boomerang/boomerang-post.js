// Variables declaration
  var html = "";
  var local_ping;
  var download_throughput;
  var upload_throughput;
  var latitude;
  var longitude;
  var location_method;
  var application = "boomerang";
  var device = "";
  var agent_ip = document.getElementById("settings").getAttribute("agentIp");
//-----------------------------------------------------------------------------------------------------------------
BOOMR.init({
                
  user_ip: 'agentIP',
  BW: {
	base_url: 'images/',
        block_beacon: true

      },
  RT: {
	cookie: 'RT',
      }
              
});


BOOMR.subscribe('before_beacon', function(o) {

if(o.lat){
  local_ping = o.lat; 
}//telos if

if(o.bw) { 
  //html += "Your bandwidth to this server is " + parseInt(o.bw/1024) + "kbps (&#x00b1;" + parseInt(o.bw_err*100/o.bw) + "%)<br>";
  download_throughput= (Math.round((o.bw/1000) * 10) / 10).toFixed(0);
//------------------------------------------------------
//Default location gia ton fakelo twn eikonwn

//------------------------------------------------------
// Default xronos gia to cookie_time

if (typeof document.getElementById("settings").getAttribute("cookieTimeInMinutes") === 'undefined' || document.getElementById("settings").getAttribute("cookieTimeInMinutes") == '') {
	var cookie_time = 1.5;
}else{
	var cookie_time = parseFloat(document.getElementById("settings").getAttribute("cookieTimeInMinutes"));
}
//------------------------------------------------------
if (typeof document.getElementById("settings").getAttribute("hostingWebsite") === 'undefined' || document.getElementById("settings").getAttribute("hostingWebsite") == null || document.getElementById("settings").getAttribute("hostingWebsite") == '' || document.getElementById("settings").getAttribute("hostingWebsite") == 'https') {
	var agent = "https://" + agent_ip + ":8443/wifimon/";
}else{
	var agent = "http://" + agent_ip + ":9000/wifimon/";
}
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
postToAgent(local_ping,download_throughput,device,application); //call tou postToAgent
//------------------------------------------------------
// Post measurement to agent

function postToAgent(local_ping,download_throughput) {
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
console.log("Local ping is :", local_ping);	
console.log("Device :", device);	
console.log("Application :", application);

var measurement = {downloadThroughput: download_throughput, uploadThroughput: upload_throughput, localPing: local_ping, latitude: latitude, longitude: longitude, locationMethod: location_method};

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

}//telos if tou bw

});
//telos BOOMR.subscribe
//-----------------------------------------------------------------------------------------------------------------








