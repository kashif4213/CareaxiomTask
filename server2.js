var async= require("async");
async.series([
    function(callback){

        // do some stuff ...
        callback(null, 'one');
    },
    function(callback){
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results){
    // results is now equal to ['one', 'two']
});


// an example using an object instead of an array
async.series({
    one: function(callback){
        setTimeout(function(){
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function(){
            callback(null, 2);
        }, 100);
    }
},
function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});
async.auto({
  hostname: async.constant("https:localhost"),
  port: 2000,
  launchServer: ["hostname", "port", function (cb, options) {
    startServer(options, cb);
  }],
  //...
}, callback);
