define([
    "wrap/jquery",
    "util/util",
    "layout/base"
],
function ($, util, BaseLayout) {
	"use strict";

    var defaults = {
        maxPass: 2 // number of tries to place sprite
    };

    var HorizontalLayout = function (options) {
        this.settings = $.extend({}, defaults, options);
    };

    util.inherit(HorizontalLayout, BaseLayout, {

	    getDimensions: function (sprites, defaults) {
	            var width = 0;
	            var height = 0;

	            $.map(sprites, function (sprite) {
	                height = sprite.height > height ? sprite.height : height;
	                width += sprite.width;
	            });

	            return {
	                width: width || defaults.width,
	                height: height || defaults.height
	            };
	    },

	    placeSprite: function (sprite, placed, dimensions) {
	            var intersection;
	            var pass = 0;
	            var x = 0;
	            var y = 0;

	            while (pass++ < this.settings.maxPass) {
	                for (x = 0; x <= dimensions.width - sprite.width; x++) {
	                    sprite.x = x;
	                    sprite.y = y;

	                    intersection = this.intersection(sprite, placed);

	                    if (!intersection) {
	                        placed.push(sprite);
	                        sprite.show();
	                        return true;
	                    }

	                    x = intersection.x + intersection.width - 1;
	                }

	                dimensions.width += sprite.width;
	                dimensions.height += sprite.height;
	            }

	            return false;
	        }
    });

    return HorizontalLayout;

});