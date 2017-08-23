/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
            /******/
};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ function (module, exports) {

            /* global AFRAME */
            if (typeof AFRAME === 'undefined') {
                throw new Error('Component attempted to register before AFRAME was available.');
            }

            /**
             * Component that listens to an event, fades out an entity, swaps the texture, and fades it
             * back in.
             */
            AFRAME.registerComponent('set-image', {
                schema: {
                    on: { type: 'string' },
                    target: { type: 'selector' },
                    src: { type: 'string' },
                    dur: { type: 'number', default: 300 }
                },

                init: function () {
                    var data = this.data;
                    var el = this.el;

                    this.setupFadeAnimation();

                    el.addEventListener(data.on, function () {
                        // Fade out image.
                        data.target.emit('set-image-fade');
                        // Wait for fade to complete.
                        setTimeout(function () {
                            // Set image.
                            data.target.setAttribute('material', 'src', data.src);
                        }, data.dur);
                    });
                },

                /**
                 * Setup fade-in + fade-out.
                 */
                setupFadeAnimation: function () {
                    var data = this.data;
                    var targetEl = this.data.target;

                    // Only set up once.
                    if (targetEl.dataset.setImageFadeSetup) { return; }
                    targetEl.dataset.setImageFadeSetup = true;

                    // Create animation.
                    targetEl.setAttribute('animation__fade', {
                        property: 'material.color',
                        startEvents: 'set-image-fade',
                        dir: 'alternate',
                        dur: data.dur,
                        from: '#FFF',
                        to: '#000'
                    });
                }
            });

            /***/
}
/******/]);