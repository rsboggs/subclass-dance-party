var BiggerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bigger');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    $(".bigger").mouseover(function() {
      //add animation here
    });
};

BiggerDancer.prototype = Object.create(Dancer.prototype);
BiggerDancer.prototype.constructor = BiggerDancer;

BiggerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  Dancer.prototype.step.call(this, 1000);
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('active');
};