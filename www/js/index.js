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
        document.addEventListener('deviceready', this.onDeviceReady, false);        
        window.addEventListener('orientationchange', this.doOnOrientationChange);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		$('#simple_sketch').sketch({defaultColor: "#ccc"});
		
		var sketchWidth = $( window ).width() - 50;
		$('#simple_sketch').width(sketchWidth);
		
		var showDims = "height: " + $( document ).height() + " width: " + $( document ).width();
		
		$('#texty').html("");
        
    },
    
    
	doOnOrientationChange: function()
	{
		
		var showDims = "sketchWidth: " + $( '#simple_sketch' ).width() + " winWidth: " + $( window ).width();
		
		var sketchWidth = $( window ).width() - 50;
		
		
 	   switch(window.orientation) 
 	   {  
	 	   case -90:
	 	   case 90:
	 	     $('#simple_sketch').height(150);
	 	     $('#simple_sketch').width(sketchWidth);
	 	  //	 $('#texty').html(showDims);
	 	  	 break; 
	 	  default:
	 	  	 $('#simple_sketch').height(300);
	 	     $('#simple_sketch').width(sketchWidth);
	 	  	// $('#texty').html(showDims);
	 	break; 
    	}
  	},    
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();




