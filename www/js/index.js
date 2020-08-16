
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
    },
    onDeviceReady: function() {
		//var cod = localStorage.getItem('codigo');
		//localStorage.setItem("codigo", cod);
		var bn = localStorage.getItem('bn');
        app.receivedEvent('deviceready');
        console.log('Received Device Ready Event');
		console.log(navigator.vibrate);
		window.skipLocalNotificationReady = true;
		document.addEventListener("backbutton", onBackKeyDown, false);
		document.addEventListener("menubutton", onMenuKeyDown, false);
		document.addEventListener("resume", onResume, false);
		document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
		document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    },
    receivedEvent: function(id) {
		var bn = localStorage.getItem('bn');
		if(bn == 1){
			//window.location 'login.html';
		}else{
			var x = setTimeout(() => {
				$('#KuenVid').play();
			}, 6000);
			app.Welcome();
		}
    },
	Welcome: function(){
		
		document.querySelector("#add-btn").addEventListener("click", app.addNote);
    cordova.plugins.notification.local.on("click", function (notification) {
      navigator.notification.alert("clicked: " + notification.id);
      //user has clicked on the popped up notification
      console.log(notification.data);
    });
    cordova.plugins.notification.local.on("trigger", function (notification) {
      //added to the notification center on the date to trigger it.
      navigator.notification.alert("triggered: " + notification.id);
    });
	
	},
	addNote: function (ev) {
	  let props = cordova.plugins.notification.local.getDefaults();
	  //console.log(props);
	  /**
	   * Notification Object Properties - use it as a reference later on
	   * id
	   * text
	   * title
	   * every
	   * at
	   * data
	   * sound
	   * badge
	   */
	  let inOneMin = new Date();
	  inOneMin.setMinutes(inOneMin.getMinutes() + 1);
	  let id = new Date().getMilliseconds();
  
	  let noteOptions = {
		id: id,
		title: "This is the Title",
		text: "Don't forget to do that thing.",
		at: inOneMin,
		badge: 1,
		data: {
		  prop: "prop value",
		  num: 42
		}
	  };
  
	  /**
	   * if(props.icon){
		noteOptions.icon = './img/calendar-md-@2x.png'
	  }
	  if(props.led){
		noteOptions.led = '#33CC00'
	  }
	  if(props.actions){
		noteOptions.actions = [{ id: "yes", title: "Do it" }, { id: "no", title: "Nah" }]
	  }
	  **/
	  cordova.plugins.notification.local.schedule(noteOptions, function(note){
		//this is the callback function for the schedule method
		//this runs AFTER the notification has been scheduled.
	  });
  
	  navigator.notification.alert("Added notification id " + id);
  
	  cordova.plugins.notification.local.cancel(id, function () {
		// will get rid of notification id 1 if it has NOT been triggered or added to the notification center
		// cancelAll() will get rid of all of them
	  });
	  cordova.plugins.notification.local.clear(id, function () {
		// will dismiss a notification that has been triggered or added to notification center
	  });
	  cordova.plugins.notification.local.isPresent(id, function (present) {
		// navigator.notification.alert(present ? "present" : "not found");
		// can also call isTriggered() or isScheduled()
		// getAllIds(), getScheduledIds() and getTriggeredIds() will give you an array of ids
		// get(), getAll(), getScheduled() and getTriggered() will get the notification based on an id
	  });
  
	}
};

$('#Bienvenido').on('click', function(e){
	e.preventDefault();
	localStorage.setItem('bn', 1);
	var bn = localStorage.getItem('bn');
	if(bn == 1){
		//window.location 'login.html';
	}

});
function plataforma(){
	var plataform = device.platform;
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">`+plataform+`</div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onVolumeUpKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Volumen Arriba </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onVolumeDownKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Volumen Abajo </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onBackKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Atras </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onMenuKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Menu </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onResume() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Resumen</div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}