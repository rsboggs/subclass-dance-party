// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.lineupBool = false;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  var context = this.$node;
  $(this.$node).mouseover(function(event) {
    context.toggle("explode");
  });
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout((function() {this.step();}).bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.offset({ top: top, left: left});
};

Dancer.prototype.lineup = function() {
  if (!this.lineupBool) {
    this.$node.css({left: this.left});
    this.$node.animate({left: 0}, 2000);
  } else {
    this.$node.css({left: 0});
    this.$node.animate({left: this.left}, 2000);
  }
  this.lineupBool = !this.lineupBool;
};

Dancer.prototype.blackHole = function(yCenter, xCenter) {
  this.$node.css({left: this.left, top: this.top});
  this.$node.animate({left: xCenter, top: yCenter}, 3000);
  this.$node.addClass("rotate");
  setTimeout((function() {
    this.$node.css({"visibility": "hidden"});
  }).bind(this) ,3000);
};
