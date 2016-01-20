var BiggerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bigger').removeClass('active');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BiggerDancer.prototype = Object.create(Dancer.prototype);
BiggerDancer.prototype.constructor = BiggerDancer;

BiggerDancer.prototype.step = function() {
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  setInterval((function() {this.$node.toggleClass('active');}).bind(this), 1000);
};