var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('moving');
  this.flyRight = true;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  Dancer.prototype.step.call(this);
  var mainWidth = $(".main-content").width();
  var distance = 10;

  if (this.flyRight) {
    this.$node.css({left: this.left});
    this.$node.animate({left: '+='+distance}, this.timeBetweenSteps);
    this.left = this.left + distance;
  } else {
    this.$node.css({left: this.left});
    this.$node.animate({left: '-='+distance}, this.timeBetweenSteps);
    this.left = this.left + -distance;
  }
  if (this.left > mainWidth || this.left < 0) {
    this.flyRight = !this.flyRight;
    this.$node.toggleClass("flipped");
  }
  
  
  //make the length covered at least size of screen
};