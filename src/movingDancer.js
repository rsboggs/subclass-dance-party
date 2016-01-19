var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('moving');
  // this.leftPos = left;
  // // console.log(this.left);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var pos = this.$node.css("top");
  // this.$node.offset({left: pos.left}).animate({left: '+=50'}, 100);
  // var self = this.left;
  // var left = this.$node.offset().left;
  this.$node.css({left: this.left});
  this.$node.animate({left: '+=200'}, 2000);
  this.left = this.left + 200;
};