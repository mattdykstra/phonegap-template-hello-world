/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
	document.addEventListener("online", this.online, false);
	document.addEventListener("offline", this.offline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
   // onDeviceReady: function() {
        
       // var networkState = navigator.network.connection.type;
        /* load local files if there is not network connection */
	//if (networkState == Connection.NONE) {
	//	window.location="index.html"; 
	//} else {
	//	app.receivedEvent('deviceready');
	//	//SpinnerDialog.show('Please Wait','Loading latest products...');
		//var popup = cordova.InAppBrowser.open('https://hodgepodge.com.au/shop','_self','location=no,hidden=yes'); 
		//popup.addEventListener("loadstop", function() {
		 // popup.show();
		  //SpinnerDialog.hide();
		  
		//});
		//popup.addEventListener('loaderror', function(event) { 
		//	popup.close();
		//	window.location.reload(true);
		//});
		//popup.addEventListener('exit', function(event) { 
		//	window.location.reload(true);
		//});
		
		//window.open('https://hodgepodge.com.au/shop','_self','location=no'); 
	//}
   // },
    online: function() {
	var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
	SpinnerDialog.show('Please Wait','Loading latest products...',true);
	app.popup = cordova.InAppBrowser.open('https://hodgepodge.com.au/shop','_blank','location=no,toolbar=no'); 
	app.popup.addEventListener("exit", function() {
	  //app.popup.show();
	  //SpinnerDialog.hide();
		  
	});  
	SpinnerDialog.hide();
	     
     },
     offline: function() {
	app.popup.close();
	var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:block;');
        receivedElement.setAttribute('style', 'display:none;');
	     
     },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
    }
    
    
};
