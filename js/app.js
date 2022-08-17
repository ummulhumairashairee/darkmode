$(function() {




    function addDarkmodeWidget() {
        new Darkmode().showWidget();
      }
      window.addEventListener('load', addDarkmodeWidget);

      
    $("body").niceScroll({
        cursorcolor:'#00F',
        cursorwidth:'10px',

    });
   

    var typed = new Typed('#typingannimation', {
        strings: ['Our Ambition', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'],
        typespeed:80,
        smartBackspace: true // Default value
      });
    })