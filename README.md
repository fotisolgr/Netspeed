# Javascript-Network-Speedtest
***
## General information about the implementations:
***

**The first implementation was created by using [Nettest](https://code.google.com/archive/p/nettest/).**

NetTest is a browser-based network measurement library, 
capable of determining throughput, latency, and other network parameters, 
using JavaScript and/or Flash. It provides an easily accessible interface for gathering network-related information within 
a Web browser. NetTest uses network calls available in JavaScript and Flash to determine:

* ***Download throughput***
* ***Upload throughput***
* ***Round-trip time (ping)***

NetTest can use several different measurement techniques to determine network information, 
and also provides wrappers which automatically select the best measurement method. 
In addition to measuring those quantities between the connecting client and the origin server, 
NetTest can also measure the between the client and an arbitrary other webserver.
***
**The second implementation was created by using [boomerang](https://soasta.github.io/boomerang/doc/).**

boomerang is a piece of javascript that you add to your web pages,
where it measures the performance of your website from your end user's point of view. It has the ability to send this data 
back to your server for further analysis. With boomerang, you find out exactly how fast your users think your site is.
boomerang is opensource and released under the BSD license, and we have a whole bunch of documentation about it.
With boomerang you can determine:
* ***Download throughput***
* ***Round-trip time (ping)***
* ***Other measurements like HTTP Latency, DNS Latency etc.***

But you  cannot determine ***Upload throughput***.

***

**The third implementation was created by using [speedtest](https://github.com/adolfintel/speedtest).**

This is a very lightweight Speedtest implemented in Javascript, using XMLHttpRequest and Web Workers.

**Compability:**
Only modern browsers are supported (IE11, latest Edge, latest Chrome, latest Firefox, latest Safari)
***
## How to use:
* If you want to use the [Nettest](https://code.google.com/archive/p/nettest/) implementation you have to add the files located in **nettest** folder into your web server.
* If you want to use the [boomerang](https://soasta.github.io/boomerang/doc/) implementation you have to add the files located in **boomerang** folder into your web server.
* If you want to use the [speedtest](https://github.com/adolfintel/speedtest) implementation you have to add the files located in **speedworker** folder into your web server.

***
## License: 
**GNU General Public License v3.0**
