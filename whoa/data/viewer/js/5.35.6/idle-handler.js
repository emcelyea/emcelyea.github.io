
// Copyright 2006-2023 Medstrat, Inc. All rights reserved.
//
// Author: Dan Sobczak
// Author: Preston Halley

function getGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  })
}



// -----------
// IdleHandler
// -----------

var HEARTBEAT_PERIOD = 5  * 1000 * 60;
var IDLECHECK_PERIOD = 1  * 1000 * 60;

IdleHandler.prototype   = new Object();
IdleHandler.constructor = IdleHandler;
IdleHandler.idleTimeout = 60; // Default timeout is 60min


IdleHandler.create = function(callback) {
  new IdleHandler(IdleHandler.idleTimeout, callback);
}


function IdleHandler(idleTimeout, callback) {
  var self = this;
  
  self.init(idleTimeout, callback);
  self.runHeartbeat();
  self.runIdleCheck();
  
  $(document).idle({
    onIdle: function() {
      self.isIdle = true;

      self.update();
    },

    onActive: function() {
      self.isIdle = false;

      self.update();
    },

    idle: self.idleDelay
  });
  
  // Second idle checker to show inactivity modal
  $(document).idle({
    onIdle: function() {
      // Only display the dialog on a displayed tab
      if (!document.hidden) {
        // Reset progress bar
        $('.progress-bar').css('width', '0%');

        // Show idle warning dialog
        $('#idleWarningDialog').modal('show');

        let timeSteps = 0;

        let progressCounter = setInterval(function() {
          timeSteps++;

          if (timeSteps < 60) {
            $('.progress-bar').css('width', (timeSteps * 1.7) +'%');
          }
          else {
            clearInterval(progressCounter);
          }

        }, 1000);
      }
    },

    onActive: function () {
      $('#idleWarningDialog').modal('hide');
    },

    idle: self.nearIdleDelay
  })

  $(window).unload(function() {
    localStorage.removeItem(self.key);
  });
}


IdleHandler.prototype.init = function(idleTimeout, callback) {
  this.guid          = getGUID();
  this.key           = "idlehandler-" + this.guid;
  this.isIdle        = false;
  this.idleDelay     = idleTimeout * 60 * 1000;                                           // Convert minutes to milliseconds
  this.nearIdleDelay = ((idleTimeout > 1) ? (idleTimeout - 1) : idleTimeout) * 60 * 1000; // Give a 1 minute notification
  this.expiredDelay  = (idleTimeout + 10) * 60 * 1000;                                    // 10 minutes past the idle timeout
  this.callback      = callback;
}


IdleHandler.prototype.update = function() {
  var now   = new Date().getTime();
  var entry = {'isIdle' : this.isIdle, 'lastUpdated' : now};

  localStorage.setItem(this.key, JSON.stringify(entry));
}


IdleHandler.prototype.runHeartbeat = function() {
  this.update();

  setTimeout(this.runHeartbeat.bind(this), HEARTBEAT_PERIOD);
}


IdleHandler.prototype.runIdleCheck = function() {
  if (this.isIdle && this.isEveryoneIdle()) {
    this.callback();
  }
  
  setTimeout(this.runIdleCheck.bind(this), IDLECHECK_PERIOD);
}


IdleHandler.prototype.isEveryoneIdle = function() {
  var isEveryoneIdle = true;
  var now            = new Date().getTime();
  var expired        = [];

  for (var i = 0 ; i < localStorage.length ; i++) {
    var key = localStorage.key(i);

    if (key.indexOf("idlehandler-") == 0) {
      var entry = JSON.parse(localStorage.getItem(key));

      if (now - entry['lastUpdated'] > this.expiredDelay) {
        // Expired entry, tab may have crashed
        expired.push(key);
      }
      else if (!entry['isIdle']) {
        isEveryoneIdle = false;

        break;
      }
      else {
        // Do nothing
      }
    }
  }

  for (var i = 0 ; i < expired.length ; i++) {
    localStorage.removeItem(expired[i]);
  }

  return isEveryoneIdle;
}
