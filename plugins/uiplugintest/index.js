// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('core/origin');

  Origin.on('globalMenu:helloworld:open', () => alert(Origin.l10n.t('app.helloworld')));

  Origin.on('origin:dataReady login:changed', function() {
    Origin.globalMenu.addItem({
      "location": "global",
      "text": Origin.l10n.t('app.helloworld'),
      "icon": "fa-smile-o",
      "callbackEvent": "helloworld:open"
    });
  });
});
