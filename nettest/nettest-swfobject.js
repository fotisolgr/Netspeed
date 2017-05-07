/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();/*
 * NetTest v0.9 <http://code.google.com/p/nettest/>
 * Copyright (c) 2008-2009 Artur Janc
 *
 * This software is released under the MIT License, available
 * at http://www.opensource.org/licenses/mit-license.php
 */

var NetTest = new Object();

NetTest.misc = new Object();
NetTest.XHR = new Object();
NetTest.DOM = new Object();
NetTest.URLRequest = new Object();
NetTest.LPF = new Object();

/******************************************/
NetTest.FlashPath = 'nettest.swf';
NetTest.testFilePath = "./files/";
NetTest.XHR.numPingTests = 3;
NetTest.lastResult = undefined;

/******************************************/
// Internal variables, do not meddle.

NetTest.networkReady = true;
NetTest.JSReady = false;
NetTest.ready = false;

NetTest.internalTestQueue = new Array();
NetTest.connectionClose = false;


NetTest.DOM.initialConnectionTime = 0;
NetTest.DOM.containerId = 'image_container';
NetTest.DOM._type = "";

// XHR
NetTest.XHR.downloadStart = undefined;
NetTest.XHR.downloadEnd = undefined;
NetTest.XHR.resourceURL = "";
NetTest.XHR.resourceSize = 0;
NetTest.XHR.pingResults = new Array();
NetTest.XHR.pingConnClose = false;


/* Create our container element */
document.write('<div id="browser_nettest_container"></div>');

// NetTest result object 
NetTest.result = function(params, summary) {
	// public
	this.type = ""; // upload, download, ping
	this.size = -1; // size of requested resource in bytes
	this.start_time = -1; // timestamp when request was made
	this.end_time = -1; // timestamp when reply was received
	this.url = ""; // URL of requested resource

	// method which was used to retrieve the resource. one of:
	// javascript/xhr, javascript/dom, flash/urlrequest, flash/lpf
	this.method = "";
	
	// private
	this._connection_close = false;

	// If an error occurred, this will be set
	this._error = "";
	this._warning = "";
	
	this._fromString = function(params) {
		params = params.split(/&/)

		for (var i = 0; i < params.length; i++) {
			items = params[i].split(/=/);
			if (items.length == 2) {
				this[items[0]] = items[1];
			}
		}
	
		return this;
	}

	if(params) {
		this._fromString(params, summary);
	}

	this.throughput = function() {
		if (this.type != 'download' && this.type != 'upload') {
			return -1;
		} else {
			return parseInt((this.size / 1024) /
			(parseInt(this.end_time - this.start_time) / 1000 ));
		}

	}

	this.units = function () {
		if (this.type != 'download' && this.type != 'upload') {
			return "ms";
		} else {
			return "KB/s"
		}
	}

	this.round_trip = function() {
		var rtt = this.end_time - this.start_time;
		if (this._connection_close) {
			rtt = rtt / 2;
		}

		return rtt;
	}

	this.error = function() {
		return this._error;
	}
	
	this.warning = function() {
		return this._warning;
	}
	
	this.verbose_summary = function() {
		
		var summary = "";
		if (this._connection_close) {
			summary = "* ";
		}

		summary += this.summary();
		
		if (this.warning()) {
			summary += '\nWarning: ' + this.warning();
		}

		return summary;
		
	}

	this.summary = function() {
		if (this.error()) {
			return "Error downloading: " + this.url + ".";
		}

		var summary = "";
		if (this.type == 'download') {
			
			summary += "Download rate from " + NetTest.misc.parseDomain(this.url)
				+ ": " + this.throughput() + " " + this.units() + " (" + this.size
				+ " bytes in " + this.round_trip() + "ms).\n"
		
		} else if (this.type == 'upload') {
			
			summary += "Upload rate to " + NetTest.misc.parseDomain(this.url)
				+ ": " + this.throughput() + " " + this.units() + " (" + this.size
				+ " bytes in " + this.round_trip() + "ms).\n"

		} else if (this.type == 'ping') {
			
			summary += "Round-trip time to " + NetTest.misc.parseDomain(this.url) + ": "
				+ this.round_trip() + this.units() + ".\n";
		}

		return summary;	
	}
	

}

NetTest.download = function(url, size, handler) {
	if (! NetTest.ready) { 
		return setTimeout(function() { NetTest.download(url, size, handler); }, 500);
	}

	NetTest.ready = false;

	var methods;
	if (NetTest.misc.getTargetDomain(url) == document.location.hostname) {
		// All methods could be here
		methods = new Array("XHR");
		if (NetTest.misc.isFlashAvailable()) {
			methods.push("URLRequest");
		}
	} else if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
		// If it's an image, use only the DOM method and pray.
		methods = new Array("DOM");
	} else {
		methods = new Array("DOM");
		if (NetTest.misc.isFlashAvailable()) {
			methods.push("LPF");
		}
	}

	NetTest.internalTestQueue = methods;
	NetTest.internalTestQueue.reverse();

	NetTest._url = url;
	NetTest._size = size;
	NetTest._handler = handler;
	NetTest._test_type = "download";

	NetTest._conductTest();
}

NetTest.upload = function(url, size, handler) {

	if (! NetTest.ready) { 
		return setTimeout(function() { NetTest.upload(url, size, handler); }, 500);
	}

	NetTest.ready = false;

	var methods;
	if (NetTest.misc.getTargetDomain(url) == document.location.hostname) {
		methods = new Array("XHR");
		
		if (NetTest.misc.isFlashAvailable()) {
			methods.push("URLRequest");
		}
	} else {
		// For cases where crossdomain.xml allows our request
		if (NetTest.misc.isFlashAvailable()) {
			methods = new Array("URLRequest");
		}
	}

	NetTest.internalTestQueue = methods;
	NetTest.internalTestQueue.reverse();

	NetTest._url = url;
	NetTest._size = size;
	NetTest._handler = handler;
	NetTest._test_type = "upload";

	NetTest._conductTest();
}

NetTest.ping = function(url, size, handler, connection_close) {

	if (! NetTest.ready) { 
		return setTimeout(function() { NetTest.ping(url, size, handler, connection_close); }, 500);
	}

	NetTest.ready = false;

	var methods;
	if (NetTest.misc.getTargetDomain(url) == document.location.hostname) {
		// All methods could be here
		methods = new Array("XHR", "DOM");
	} else if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
		// If it's an image, use only the DOM method and pray.
		methods = new Array("DOM");
	} else {
		methods = new Array("DOM");
		if (NetTest.misc.isFlashAvailable()) {
			methods.push("LPF");
		}
	}

	NetTest.internalTestQueue = methods;
	NetTest.internalTestQueue.reverse();

	NetTest._url = url;
	NetTest._size = size;
	NetTest._handler = handler;
	NetTest._test_type = "ping";

	NetTest.connectionClose = connection_close || false; 

	NetTest._conductTest();
}

NetTest._conductTest = function() {
	if(NetTest.internalTestQueue.length == 0) {
		// console.log('no methods to try');
		NetTest.ready = true;
		return;
	}
	
	var method = NetTest.internalTestQueue.pop();

	NetTest[method][NetTest._test_type](NetTest._url, NetTest._size, NetTest._handler);

}

/*********************************************************************************************/
// Misc. utility functions

NetTest.misc.getTargetDomain = function(url) {
	if (url.match(/^https?:\/\/([a-z0-9.\-]*)/i)) {
		var target_domain = RegExp.$1;
	} else {
		var target_domain = document.location.hostname;
	}

	return target_domain;
}

NetTest.misc.isJavaScriptReady = function() {
	return NetTest.JSReady;
}

NetTest.misc.startup = function() {
	// return NetTest.testAll();
}

NetTest.misc.quietEmbedSWF = function(path) {
	var swf_name = NetTest.misc.fileBasename(path);
	
	NetTest.misc.addInvisibleElement(swf_name);

	var params = { allowScriptAccess : "always", name : swf_name };
	var flashvars = false;
	var attributes = { name : swf_name};

	// TODO: remove this for production
	swfobject.embedSWF(path + '?' + NetTest.misc.getTime(), swf_name, "0", "0", "9.0.0",
		"expressInstall.swf", flashvars, params, attributes);
}

NetTest.misc.addInvisibleElement = function(id, type) {
	if (!document.body) {
		return setTimeout(function() { NetTest.misc.addInvisibleElement(id, type); }, 500);
	}

	if (document.getElementById(id)) {
		return false;
	}

	if (!type) {
		type = 'div';
	}

	var container_el = document.getElementById('browser_nettest_container');
	if (!container_el) {
		// console.log('creating container');
		var container_el = document.createElement('div');
		container_el.id = 'browser_nettest_container';
		container_el.style.display = 'none';

		document.body.appendChild(container_el);
		// var container_el = document.getElementById('browser_nettest_container');
	}
	var container_el = document.getElementById('browser_nettest_container');

	// console.log('creating: ' + id);
	var el = document.createElement(type);
	el.id = id;
	el.style.display = 'none';
	container_el.appendChild(el);

	return true;
}

NetTest.misc.fileBasename = function(path) {
	var s = path.replace(/.*\//, '').replace(/.swf/i, '');
	return s;
}

NetTest.misc.writeResultToTextarea = function(textarea_el, str) {
	//var d = new Date();
	//var h = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours().toString();
	//var m = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes().toString();
	//var s = d.getSeconds() >= 10 ? d.getSeconds() : "0" + d.getSeconds().toString();

	//var nice_date = "(" + h + ":" + m + ":" + s + ") ";

	//textarea_el.value += nice_date + str;
	textarea_el.value += str;
	textarea_el.scrollTop = textarea_el.scrollHeight;
}

NetTest.misc.getMovie = function(movieName) { 
 
	if (navigator.appName.indexOf("Microsoft") != -1) { 
		return window[movieName];
	} else { 
		return document[movieName]; 
	} 
} 

NetTest.misc.handleResult = function(resultObj) {

	if (NetTest.connectionClose) {
		resultObj._connection_close = true;
	}

	NetTest.lastResult = resultObj;

	// Warn about ping times with large resources
	if (resultObj.type == "ping" && resultObj.size > 1454) {
		resultObj._warning = "Object used for measuring ping is too large, real ping time might be lower.";
	}
	
	// If we're using LPF, issue a warning.
	if (resultObj.method.match(/lpf/i)) {
		resultObj._warning = "Could not determine if request succeeded, result may be invalid.";
	}

	// Clear queue of other methods if 
	if (!resultObj.error()) {
		NetTest.ready = true;
		NetTest.internalTestQueue = new Array();
		
		// Execute user function on object here
		if (NetTest._handler) {
			NetTest._handler(resultObj);
		}

	} else if (NetTest.internalTestQueue.length) {
		// There was an error, but continue to next method
		return NetTest._conductTest();
	} else {
		// nothing worked, return last result
		NetTest.ready = true;

		// Execute user function on object here
		if (NetTest._handler) {
			NetTest._handler(resultObj);
		}
	}
}

// This function gets called from ActionScript after the download is finished
NetTest.misc.sendToJavaScript = function(params) {
	// console.log(params);

	NetTest.networkReady = true;

	if (!params.match('flash/lpf')) {
		//summary_line = summary_line.replace(/url=/, document.location.hostname);
	} else {
		//summary_line = summary_line.replace('http://', '').replace('/:', ':');
		//summary_line = summary_line.replace('..:', document.location.hostname + ':');
	}
	
	if (!params.match('flash/lpf')) {
		// params = params.replace(/url=/, 'url=http://' + document.location.hostname);
	}
	
	result = new NetTest.result(params);
	NetTest.misc.handleResult(result);
}

NetTest.misc.sendTimestampToFlash = function () {
	var timestamp = new Date().getTime() + "";
	NetTest.misc.getMovie("nettest").uploadTimestamp(timestamp);
}

NetTest.misc.createXMLHttpRequest = function() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } else {
        throw new Error("XMLHttpRequest not supported");
    }
}

NetTest.misc.randomString = function(length)
{
	function generateBuffer1000() {

		var randomstring = "";

		for (var i=0; i<20; i++)
		{
			randomstring += "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
			//var rnum = Math.floor(Math.random() * chars.length);
			//randomstring += chars.substring(rnum,rnum+1);
		}

		return randomstring;
	}

	var str = generateBuffer1000();
//	console.log(str.length);
	
	while (str.length < length) {
		str += (str + str + str + str);
	}

//	console.log(str.length);

	return str.substring(0, length);
}


NetTest.misc.addOnloadEvent = function(new_func) { 
	var original_onload = window.onload; 

	if (typeof window.onload != 'function') { 
		window.onload = new_func; 
	} else { 
		window.onload = function() { 
			if (original_onload) { original_onload(); } 
			new_func(); 
		} 
	} 
}

NetTest.misc.parseDomain = function(url) {
	if (!url) {
		return location.host
	} else if (url.match(/http:/)) {
		url.match(/(?:http:\/\/)?(.*?)\//);
		return RegExp.$1;
	} else {
		return location.host;
	}
}

NetTest.misc.getTime = function() {
	return (new Date()).getTime();
}

NetTest.misc.sendToActionScript = function(command, url, size, handler) {
	if (!NetTest.networkReady) {
		return setTimeout(function() { NetTest.misc.sendToActionScript(command, url, size, handler)}, 500);
	}

	if (!NetTest.LPF.ready() || !NetTest.URLRequest.ready()) {
		return setTimeout(function() { NetTest.misc.sendToActionScript(command, url, size, handler)}, 500);
	}

	if (handler) {
		NetTest._handler = handler;
	}
	
	NetTest.networkReady = false;

	NetTest.misc.getMovie("nettest").sendToActionScript(command, url, size);
}

NetTest.misc.isFlashAvailable = function() {
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"])
		return true;
	else if (NetTest.URLRequest.ready())
		return true;
	else if (window.ActiveXObject) {
		for (x = 7; x <= 11; x++) {
			try {
				oFlash = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + x + "');");
				if (oFlash) {
					return true;
				}
			}
			catch(e) { }
		}
	}
	else
		return false;
}

NetTest.misc.addOnloadEvent(function() {
	NetTest.misc.addInvisibleElement('image_container');
	NetTest.misc.quietEmbedSWF(NetTest.FlashPath);
	
	NetTest.networkReady = true;
	NetTest.JSReady = true;
	NetTest.ready = true;
	
	NetTest.misc.startup();
	});


/*****************************************************************************************/
// URLRequest

NetTest.URLRequest.ready = function() {
	var m = NetTest.misc.getMovie("nettest");
	return m && m.sendToActionScript;
}

NetTest.URLRequest.download = function (url, size, handler) {
	NetTest.misc.sendToActionScript('runURLRequestDownloadTest', url, size, handler);
}

NetTest.URLRequest.upload = function (url, size, handler) {
	NetTest.misc.sendToActionScript('runURLRequestUploadTest', url, size, handler);
}

NetTest.URLRequest.ping = function (url, size, handler) {
	NetTest.misc.sendToActionScript('runURLRequestPingTest', url, size, handler);
}

/*****************************************************************************************/



/*********************************************************************************************/
// LPF 
NetTest.LPF.ready = function() {
	var m = NetTest.misc.getMovie("nettest");
	return m && m.sendToActionScript;
}

NetTest.LPF.download = function(url, size, handler) {
	NetTest.misc.sendToActionScript('runLPFDownloadTest', url, size, handler);
}

NetTest.LPF.ping = function(url, size, handler) {
	NetTest.misc.sendToActionScript('runLPFPingTest', url, size, handler);
}


/*********************************************************************************************/

/*********************************************************************************************/
// DOM
NetTest.DOM.loadInitialImage = function (url, size) {
	NetTest.networkReady = false;

	var container_el = document.getElementById(NetTest.DOM.containerId);
	
	NetTest.DOM.initialConnectionTime = (new Date().getTime());

	var image_html = '<img src="' + url + '?' + (new Date().getTime()) +
		'" onload="NetTest.DOM.loadImage(\'' + url + '\', ' + size + ');" ' +
		'" onerror="NetTest.DOM.initialImageFail(this);">';

	container_el.innerHTML = image_html;
}

NetTest.DOM.initialImageFail = function(el) {
	NetTest.networkReady = true;

	var params = 
		'type=' + "ping" +
		'&start_time=' + NetTest.DOM.downloadStart +
		'&end_time=' + NetTest.DOM.downloadEnd +
		'&url=' + el.src +
		'&method=' + "javascript/dom";
		
	var resultObj = new NetTest.result(params)
	resultObj._error = true;

	return NetTest.misc.handleResult(resultObj);
	
}

NetTest.DOM.loadImage = function (url, size) {
	NetTest.networkReady = false;

	var container_el = document.getElementById(NetTest.DOM.containerId);

	NetTest.DOM.resourceURL = url;
	NetTest.DOM.resourceSize = size;
	
	NetTest.DOM.downloadStart = new Date().getTime();
	
	container_el.innerHTML = '<img src="' + url + '?' + NetTest.DOM.downloadStart +
		'" onload="NetTest.DOM.loadingComplete(this, \'load\');" ' +
		'" onerror="NetTest.DOM.loadingComplete(this, \'error\');" />';
}

NetTest.DOM.download = function(url, size, handler) {
	if (!NetTest.networkReady) { return setTimeout(function() { NetTest.DOM.download(url, size, handler); }, 500); }
	
	if (handler) {
		NetTest._handler = handler;
	}
	
	NetTest.DOM._type = "download";
	NetTest.DOM.loadImage(url, size);
}

NetTest.DOM.ping = function(url, size, handler) {
	if (!NetTest.networkReady) { return setTimeout(function() { NetTest.DOM.ping(url, size, handler); }, 500); }
	
	if (handler) {
		NetTest._handler = handler;
	}

	NetTest.DOM._type = "ping";
	NetTest.DOM.loadInitialImage(url, size);
}

NetTest.DOM.loadingComplete = function (el, res) {
	
	NetTest.networkReady = true;
	NetTest.DOM.downloadEnd = (new Date()).getTime();
	
	if (res == 'load') {
		var report = "";
		
		var bandwidth = parseInt((NetTest.DOM.resourceSize / 1024) /
			(parseInt(NetTest.DOM.downloadEnd - NetTest.DOM.downloadStart) * 0.001 )).toFixed(1);
		
		if (NetTest.DOM.resourceSize < 1454) {
			var type = NetTest.DOM._type;	
			
			report = "Round-trip time to " + NetTest.misc.parseDomain(NetTest.DOM.resourceURL) + ": "
				+ (NetTest.DOM.downloadEnd - NetTest.DOM.downloadStart) + "ms\n";
		} else {
			var type = NetTest.DOM._type;
			
			report = "Download rate from " + NetTest.misc.parseDomain(NetTest.DOM.resourceURL)
				+ ": " + bandwidth + " KB/s (" + NetTest.DOM.resourceSize + " bytes in "
				+ (NetTest.DOM.downloadEnd - NetTest.DOM.downloadStart) + "ms)\n"
		}
	
		// If the first request 
		if ((NetTest.DOM.downloadStart - NetTest.DOM.initialConnectionTime) <
				(NetTest.DOM.downloadEnd - NetTest.DOM.downloadStart)) {
			NetTest.DOM.downloadEnd = NetTest.DOM.downloadStart;
			NetTest.DOM.downloadStart = NetTest.DOM.initialConnectionTime;
		}

		
		var params = 
			'type=' + type +
			'&size=' + NetTest.DOM.resourceSize +
			'&start_time=' + NetTest.DOM.downloadStart +
			'&end_time=' + NetTest.DOM.downloadEnd +
			'&url=' + el.src +
			'&method=' + "javascript/dom";
		
		var resultObj = new NetTest.result(params)

		return NetTest.misc.handleResult(resultObj);


		
		// submitTestResults(log_str);
	} else if (res == 'error') {
		var params = 
			'type=' + 'download' +
			'&start_time=' + NetTest.DOM.downloadStart +
			'&end_time=' + NetTest.DOM.downloadEnd +
			'&url=' + el.src +
			'&method=' + "javascript/dom";
		
		var resultObj = new NetTest.result(params)
		resultObj._error = true;

		return NetTest.misc.handleResult(resultObj);
	}
}


/*****************************************************************************************/

/*****************************************************************************************/
// XHR

NetTest.XHR.download = function(url, size, handler) {
	NetTest.XHR.getURL(url, "download", handler);
}

NetTest.XHR.upload = function(url, size, handler) {

	return NetTest.XHR.postToURL(url, size, handler);
}

NetTest.XHR.ping = function(url, size, handler) {
	
	for (var i = 0; i < NetTest.XHR.numPingTests; i++) {
		NetTest.XHR.getURL(url, "ping_bundle", handler);
	}

	NetTest.XHR.pingResults = new Array();

	var pingResultsReady = function() {
		if(NetTest.XHR.pingResults.length == NetTest.XHR.numPingTests) {
			var total_response_time = 0;
			var min_response_time = 999999;

			var results = new Array();
			for (var i = 1; i < NetTest.XHR.pingResults.length; i++) {
				total_response_time += parseInt(NetTest.XHR.pingResults[i]);
				results.push(parseInt(NetTest.XHR.pingResults[i])); 
				if (parseInt(NetTest.XHR.pingResults[i]) < min_response_time) {
					min_response_time = parseInt(NetTest.XHR.pingResults[i]);
				}
			}

			var avg_response_time = total_response_time / (NetTest.XHR.pingResults.length - 1);

			var params = 
				'type=' + "ping" +
				'&size=' + NetTest.XHR.resourceSize +
				'&start_time=' + NetTest.XHR.downloadStart +
				'&end_time=' + NetTest.XHR.downloadEnd +
				'&url=' + document.location + "/../" + url +
				'&method=' + "javascript/xhr";

			var summary_line = "Round-trip time to " + NetTest.misc.parseDomain() + ": " + avg_response_time + "ms\n"
			var resultObj = new NetTest.result(params)
		
			if (NetTest.XHR.pingConnClose) {
				resultObj._connection_close = true;
			}

			// zero-out the array at the end
			NetTest.XHR.pingResults = new Array();
			NetTest.XHR.pingConnClose = false;
		

			return NetTest.misc.handleResult(resultObj);
		} else {
			setTimeout(function() { pingResultsReady() }, 200); 
		}

	}

	pingResultsReady();
}

NetTest.XHR.postToURL = function(url, size, handler) {

	// var detailed_text = NetTest.misc.getTime() + " Entered postToURL().\n"

	var request = NetTest.misc.createXMLHttpRequest();
	// detailed_text += NetTest.misc.getTime() + " Created XHMLHTTPRequest object.\n"

	if (!NetTest.networkReady) {
		return setTimeout(function() { NetTest.XHR.postToURL(url, size, handler) }, 200);
	} else {
		NetTest.networkReady = false;
	}
	
	if (handler) {
		NetTest._handler = handler;
	}
	
	var params = NetTest.misc.randomString(size);
	// detailed_text += NetTest.misc.getTime() + " Created POST parameters.\n"

	// var stateArray = new Array();
	try {
		request.open("POST", url + '?' + NetTest.misc.getTime(), true);
	} catch(e) {
		var params = '&method=' + "javascript/xhr" + '&url=' + url;

		resultObj = new NetTest.result(params);
		resultObj._error = true;
		NetTest.networkReady = true;
		return NetTest.misc.handleResult(resultObj);
	}

	NetTest.XHR.resourceURL = url;
	NetTest.XHR.resourceSize = size;
	// detailed_text += NetTest.misc.getTime() + " Opened XHMLHTTPRequest connection.\n"

	request.onreadystatechange = function() {
		// detailed_text += NetTest.misc.getTime() + " Received state change event.\n"
	
		if (request.readyState == 4) {
			NetTest.networkReady = true;
			
			if (request.status == 200) {
				
				NetTest.XHR.downloadEnd = NetTest.misc.getTime();
				// detailed_text += NetTest.XHR.downloadEnd + " Got HTTP 200 status.\n"
				
				var bandwidth = (size / 1024) / (parseInt(NetTest.XHR.downloadEnd
									- NetTest.XHR.downloadStart) * 0.001 );
				
				text = "Upload rate to " + NetTest.misc.parseDomain(url) + ": " +
					bandwidth.toFixed(1) + " KB/s (" + size + " bytes in " +
					(parseInt(NetTest.XHR.downloadEnd - NetTest.XHR.downloadStart)) + "ms)\n";
			
				var params = 
					'type=' + "upload" +
					'&size=' + size +
					'&start_time=' + NetTest.XHR.downloadStart +
					'&end_time=' + NetTest.XHR.downloadEnd +
					'&url=' + document.location + "/../" + url +
					'&method=' + "javascript/xhr";
				
				resultObj = new NetTest.result(params)
				return NetTest.misc.handleResult(resultObj);
			} else {
				var params = 
					'type=upload' +
					'&start_time=' + NetTest.XHR.downloadStart +
					'&end_time=' + NetTest.XHR.downloadEnd +
					'&method=' + "javascript/xhr" +
					'&url=' + url;

				// Problem downloading the file
				resultObj = new NetTest.result(params);
				resultObj._error = true;
				return NetTest.misc.handleResult(resultObj);
			}
		}
	}

	NetTest.XHR.downloadStart = NetTest.misc.getTime();
	request.send(params);
	// detailed_text += NetTest.misc.getTime() + " Sent POST parameters.\n"
}

NetTest.XHR.getURL = function(url, measurement_type, handler) {
	if (!NetTest.networkReady) {
		return setTimeout(function() { NetTest.XHR.getURL(url, measurement_type, handler) }, 200);
	}
	
	if (handler) {
		NetTest._handler = handler;
	}
	
	NetTest.networkReady = false;

	var request = NetTest.misc.createXMLHttpRequest();
	NetTest.XHR.pingConnClose = false;

	try {
		request.open("GET", url + '?' + NetTest.misc.getTime(), true);
	} catch(e) {
		var params = '&method=' + "javascript/xhr" + '&url=' + url;

		resultObj = new NetTest.result(params);
		resultObj._error = true;
		NetTest.networkReady = true;
		return NetTest.misc.handleResult(resultObj);
	}

	NetTest.XHR.resourceURL = url;

	request.onreadystatechange = function() {
	
		if (request.readyState == 4) {
			NetTest.networkReady = true;
			
			if (request.status == 200) {
				/*if(request.getResponseHeader('Connection').match(/close/i)) {
					NetTest.XHR.pingConnClose = true;
				}*/
				NetTest.XHR.pingConnClose = true;

				NetTest.XHR.downloadEnd = NetTest.misc.getTime();
				
				NetTest.XHR.resourceSize = request.responseText.length;
			
				if (measurement_type == "download") {
					var bandwidth = (NetTest.XHR.resourceSize / 1024) / 
						(parseInt(NetTest.XHR.downloadEnd - NetTest.XHR.downloadStart) * 0.001 );

					text = "Download rate from " + NetTest.misc.parseDomain(url)
						+ ": " + bandwidth.toFixed(1) + " KB/s (";
					text += NetTest.XHR.resourceSize + " bytes in " +
						(parseInt(NetTest.XHR.downloadEnd - NetTest.XHR.downloadStart)) + "ms)\n"
					
					var params = 
						'type=' + ((measurement_type.match(/ping/)) ? "ping" : "download") + 
						'&size=' + NetTest.XHR.resourceSize +
						'&start_time=' + NetTest.XHR.downloadStart +
						'&end_time=' + NetTest.XHR.downloadEnd +
						'&method=' + "javascript/xhr" +
						'&url=' + document.location + "/../" + url;
					
					resultObj = new NetTest.result(params)
					return NetTest.misc.handleResult(resultObj);
				} else if (measurement_type == "ping_bundle") {
					var time = parseInt(NetTest.XHR.downloadEnd - NetTest.XHR.downloadStart);
					NetTest.XHR.pingResults.push(time);
				}
			} else {
				var type = ((measurement_type.match(/ping/)) ? "ping" : "download");

				// Problem downloading the file
				var params = 
					'type=' + type + 
					'&start_time=' + NetTest.XHR.downloadStart +
					'&end_time=' + NetTest.XHR.downloadEnd +
					'&method=' + "javascript/xhr" +
					'&url=' + url;

				resultObj = new NetTest.result(params);
				resultObj._error = true;

				// Don't show twice for ping tests
				if (type == "ping") {
					if (NetTest.XHR.pingResults.length == 0) {
						NetTest.XHR.pingResults.push(-1);
						return NetTest.misc.handleResult(resultObj);
					}
				} else {
					return NetTest.misc.handleResult(resultObj);
				}
			}
		}
	}

	NetTest.XHR.downloadStart = NetTest.misc.getTime();
	request.send(null);
}

