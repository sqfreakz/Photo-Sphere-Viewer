/**
 * Navigation bar VR button class
 * @param {PSVNavBar} navbar
 * @constructor
 */
function PSVNavBarVRButton(navbar) {
  PSVNavBarButton.call(this, navbar);

  this.create();
}

PSVNavBarVRButton.prototype = Object.create(PSVNavBarButton.prototype);
PSVNavBarVRButton.prototype.constructor = PSVNavBarVRButton;

PSVNavBarVRButton.id = 'vr';
PSVNavBarVRButton.className = 'psv-button psv-button--hover-scale psv-vr-button';
PSVNavBarVRButton.icon = 'vr.svg';
PSVNavBarVRButton.iconActive = 'vr.svg';

/**
 * Creates the button
 */
PSVNavBarVRButton.prototype.create = function() {
  PSVNavBarButton.prototype.create.call(this);

  this.container.title = this.psv.config.lang.vr;

  this.psv.on('vr-updated', this);
};

/**
 * Destroys the button
 */
PSVNavBarVRButton.prototype.destroy = function() {
  this.psv.off('vr-updated', this);

  PSVNavBarButton.prototype.destroy.call(this);
};

/**
 * Handle events
 * @param {Event} e
 * @private
 */
PSVNavBarVRButton.prototype.handleEvent = function(e) {
  switch (e.type) {
    // @formatter:off
    case 'vr-updated': this.toggleActive(e.args[0]); break;
    // @formatter:on
  }
};

/**
 * Toggles fullscreen on click
 * @private
 */
PSVNavBarVRButton.prototype._onClick = function() {
  this.psv.toggleVR();
};
