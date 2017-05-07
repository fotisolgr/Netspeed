// Variables declaration
  var html = "";
  var ping;
  var download_speed;

//-----------------------------------------------------------------------------------------------------------------
BOOMR.subscribe('before_beacon', function(o) {

if(o.lat){
  ping = o.lat; 
}

if(o.bw) { 
  
  download_speed= (Math.round((o.bw/1000) * 10) / 10).toFixed(0);

}

post(ping,download_speed); //call post()



function post(ping,download_speed) {
 if (typeof download_speed === 'undefined' || isNaN(download_speed) || !download_speed) {
  download_speed = 0;
 }

 if (typeof ping === 'undefined' || isNaN(ping) || !ping) {
  ping = 0;
 }
 
console.log("Download speed is :", download_speed);
console.log("Local ping is :", ping);	

var measurement = {downloadThroughput: download_speed, localPing: ping};

$.ajax({
	type: "POST",
	data :JSON.stringify(measurement),
	url: "path/to/file.php",
	contentType: "application/json"
});
}

}

});
