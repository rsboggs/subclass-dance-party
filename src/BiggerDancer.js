var BiggerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bigger').removeClass('active');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  $(this.$node).mouseover(function() {
    //add animation here
    // $(this).rotate();
    // $(this.$node).css({ 
    //   //for firefox
    //     "-moz-animation-name":"rotatebox",
    //     "-moz-animation-duration":"2s",
    //     "-moz-animation-iteration-count":"1",
    //         "-moz-animation-fill-mode":"forwards",

    //     //for safari & chrome
    //     "-webkit-animation-name":"rotatebox",
    //     "-webkit-animation-duration":"2s",
    //     "-webkit-animation-iteration-count":"1",
    //     "-webkit-animation-fill-mode" : "forwards"
    // });
  });
};

BiggerDancer.prototype = Object.create(Dancer.prototype);
BiggerDancer.prototype.constructor = BiggerDancer;

BiggerDancer.prototype.step = function() {
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  setInterval((function() {this.$node.toggleClass('active');}).bind(this), 1000);
};