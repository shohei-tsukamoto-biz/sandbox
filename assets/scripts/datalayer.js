window.dataLayer = window.dataLayer || [];

window.dataLayerSubmit = function(eventName) {
  dataLayer.push({'event': eventName});
};