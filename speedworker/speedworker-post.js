//Variables Declaration
var w=new Worker("speedtest_worker.js"); //create new worker
var ping;
var download_speed;
var upload_speed;

var download_speedMb;
var upload_speedMb;

var interval = setInterval(function(){w.postMessage("status");}.bind(this),100); //ask for status every 100ms
//--------------------------------------------------------------------------------------------

 w.onmessage=function(event){ 

	var data=event.data.split(";"); //(status: 0=not started, 1=downloading, 2=uploading, 3=ping, 4=done, 5=aborted)
 	var status=Number(data[0]);
                
		    download_speedMb = data[1];
 		    upload_speedMb = data[2];
                    ping = data[3];

//Convert Speed from Mb/s to KB/s
download_speed = (Math.round((download_speedMb*125) * 10) / 10).toFixed(0)
upload_speed = (Math.round((upload_speedMb*125) * 10) / 10).toFixed(0)
ping = (Math.round((ping) * 10) / 10).toFixed(0)


 if(status >= 4 ){ 
clearInterval(interval);

post(ping,download_speed,upload_speed); //call post()
//------------------------------------------------------
// Post measurement to agent

function post(ping,download_speed,upload_speed) {
 if (typeof download_speed === 'undefined' || isNaN(download_speed) || !download_speed) {
  download_speed = 0;
 }

 if (typeof upload_speed === 'undefined' || isNaN(upload_speed) || !upload_speed) {
  upload_speed = 0;
 }
 if (typeof ping === 'undefined' || isNaN(ping) || !ping) {
  ping = 0;
 }
 
console.log("Download speed is :", download_speed);
console.log("Upload speed is :", upload_speed);
console.log("Local ping is :", ping);	


var result = {downloadThroughput: download_speed, uploadThroughput: upload_speed, localPing: ping};

$.ajax({
	type: "POST",
	data :JSON.stringify(result),
	url: "/path/to/your/file.php",
	contentType: "application/json"
});

}//post() end
}
}
w.postMessage('start {"time_dl":"5", "time_ul":"10", "count_ping":"20", "garbagePhp_chunkSize":"10"}'); 
