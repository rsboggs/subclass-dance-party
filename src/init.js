$(document).ready(function() {
  window.dancers = [];
  var arranged = false;

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".main-content").height() * Math.random() + 32,
      $(".main-content").width() * Math.random(),
      Math.random() * 2000
    );
    $('.main-content').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var node = window.dancers[i];

      if (node.lineupBool === arranged) {
        node.lineup();
      }
    }

    arranged = !arranged;
  });

  $(".blackHoleButton").on("click", function(event) {
    var top = $(".main-content").height() / 2;
    var left = $(".main-content").width() / 2;
    $(".main-content").css({"background-image": 'url("http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef01b7c7a7b3ff970b-pi")'});
    for (var i = 0; i < window.dancers.length; i++) {
      var node = window.dancers[i];
      node.blackHole(top, left);
    }
    setTimeout(function() {
      $(".main-content").css({"background-image": 'url("http://www.zeldadungeon.net/wp-content/uploads/2015/01/hyrule-temple-smash.jpg")'});
    }, 3500);
  });

  $(".switchPositionButton").on("click", function() {
    var dancers = window.dancers.slice(0);
    var distance = function(currentDancer, nextDancer) {
      return Math.sqrt(Math.pow(currentDancer.top - nextDancer.top, 2) + Math.pow(currentDancer.left - nextDancer.left, 2));
    };
    var setPositionTransition = function(firstDancer, secondDancer) {
      firstDancer.$node.css({left: firstDancer.left, top: firstDancer.top});
      firstDancer.$node.animate({left: secondDancer.left, top: secondDancer.top}, 1000);
      
      secondDancer.$node.css({left: secondDancer.left, top: secondDancer.top});
      secondDancer.$node.animate({left: firstDancer.left, top: firstDancer.top}, 1000);

      var tempFirstLeft = firstDancer.left;
      var tempFirstTop = firstDancer.top;
      firstDancer.left = secondDancer.left;
      firstDancer.top = secondDancer.top;
      secondDancer.left = tempFirstLeft;
      secondDancer.top = tempFirstTop;
    };

    while(dancers.length > 0) {
      var currentDancer = dancers.shift();
      var closest = 0;
      var lowestDistance = distance(currentDancer, dancers[closest]);
      for (var i = 1; i < dancers.length; i++)  {
        var currDistance = distance(currentDancer, dancers[i]);
        if (currDistance < lowestDistance) {
          lowestDistance = currDistance;
          closest = i;
        }
      }
      var closestDancer = dancers.splice(closest, 1)[0];
      setPositionTransition(currentDancer, closestDancer);
    }
  });
  
});

