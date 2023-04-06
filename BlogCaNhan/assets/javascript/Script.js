(function() {

  'use strict';

  var main = document.querySelector("main"),
    header = document.querySelector("header");

  function setTopPadding() {
    var headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + "px";
  }

  function onScroll() {

    function callbackFunc() {
      var c = document.getElementById("c"),
        counter = parseInt(c.innerHTML) + 1 || 1,
        y = window.pageYOffset;

      c.style.visibility = "visible";
      c.innerHTML = counter;

      if (y > 150) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }

    window.addEventListener("scroll", function() {
      throttle(callbackFunc, 200);
    });

    function throttle(func, limit) {
      var inThrottle;
      return function() {
        var args = arguments,
          context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(function() {
            inThrottle = false;
          }, limit);
        }
      };
    }
  }

  window.onload = function() {
    setTopPadding();
    onScroll();
  };

  window.onresize = function() {
    setTopPadding();
  };
})();
