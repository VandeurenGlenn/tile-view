(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.appName = 'Tile View, Demo!';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    var tileViewPanel = document.querySelector('tile-view-panel');

    tileViewPanel.addEventListener('tile-view-mode-changed', function() {
      if(app.mode === 'fill') {
        app.demoMode = 'fill';
      }
    });
    console.log('Our app is ready to rock!');
  });

  app.items = [
    {name:'tile', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'view', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'tile', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'view', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'tile', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'view', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'tile', image: {local:'images/basicelements-logo-square.svg'}},
    {name:'view', image: {local:'images/basicelements-logo-square.svg'}}
  ];

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
