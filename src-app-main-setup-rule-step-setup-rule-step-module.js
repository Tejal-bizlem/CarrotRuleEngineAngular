(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-main-setup-rule-step-setup-rule-step-module"],{

/***/ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js ***!
  \***************************************************************************/
/*! exports provided: TooltipComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        /* tslint:enable */
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype.transitionEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show) {
            this.events.emit('shown');
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "show", {
        get: /**
         * @return {?}
         */
        function () {
            return this._show;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.setPosition();
            }
            this._show = this.hostClassShow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "placement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options.placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "elementPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.elementPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "tooltipOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return Number(this.data.options.offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "isThemeLight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options['theme'] === 'light';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPlacementClass();
        this.setZIndex();
        this.setCustomClass();
        this.setAnimationDuration();
        this.setStyles();
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSvg = this.element instanceof SVGElement;
        /** @type {?} */
        var tooltip = this.elementRef.nativeElement;
        /** @type {?} */
        var elementHeight = isSvg ? this.element.getBBox().height : this.element.offsetHeight;
        /** @type {?} */
        var elementWidth = isSvg ? this.element.getBBox().width : this.element.offsetWidth;
        /** @type {?} */
        var tooltipHeight = tooltip.clientHeight;
        /** @type {?} */
        var tooltipWidth = tooltip.clientWidth;
        /** @type {?} */
        var scrollY = window.pageYOffset;
        if (this.placement === 'top') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
        }
        if (this.placement === 'bottom') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset + 'px';
        }
        if (this.placement === 'top' || this.placement === 'bottom') {
            this.hostStyleLeft = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2 + 'px';
        }
        if (this.placement === 'left') {
            this.hostStyleLeft = this.elementPosition.left - tooltipWidth - this.tooltipOffset + 'px';
        }
        if (this.placement === 'right') {
            this.hostStyleLeft = this.elementPosition.left + elementWidth + this.tooltipOffset + 'px';
        }
        if (this.placement === 'left' || this.placement === 'right') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2 + 'px';
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPlacementClass = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + this.placement);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setZIndex = /**
     * @return {?}
     */
    function () {
        if (this.options['z-index'] !== 0) {
            this.hostStyleZIndex = this.options['z-index'];
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setCustomClass = /**
     * @return {?}
     */
    function () {
        if (this.options['tooltip-class']) {
            this.renderer.addClass(this.elementRef.nativeElement, this.options['tooltip-class']);
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setAnimationDuration = /**
     * @return {?}
     */
    function () {
        if (Number(this.options['animation-duration']) != this.options['animation-duration-default']) {
            this.hostStyleTransition = 'opacity ' + this.options['animation-duration'] + 'ms';
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setStyles = /**
     * @return {?}
     */
    function () {
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['max-width'];
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'tooltip',
                    template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['content-type'] === 'template' else htmlOrStringTemplate\" \r\n    [ngClass]=\"{'tooltip-arrow': isThemeLight }\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                    host: { 'class': 'tooltip' },
                    styles: [":host{max-width:200px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 8px;position:absolute;pointer-events:none;z-index:1000;display:block;opacity:0;transition:opacity .3s}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip::after{content:\"\";position:absolute;border-style:solid}:host.tooltip-top::after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}:host.tooltip-bottom::after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}:host.tooltip-left::after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}:host.tooltip-right::after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}:host.tooltip-light::after{display:none}:host.tooltip-light{border:1px solid rgba(0,0,0,.06);background-color:#fff;color:#000}:host.tooltip-light .tooltip-arrow{position:absolute;width:10px;height:10px;-webkit-transform:rotate(135deg);transform:rotate(135deg);background-color:rgba(0,0,0,.07)}:host.tooltip-light .tooltip-arrow::after{background-color:#fff;content:'';display:block;position:absolute;width:10px;height:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{top:100%;left:50%;margin-top:-4px;margin-left:-5px;background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-top.tooltip-light .tooltip-arrow::after{top:1px;right:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px;background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 50%)}:host.tooltip-bottom.tooltip-light .tooltip-arrow::after{top:-1px;right:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{top:50%;left:100%;margin-top:-5px;margin-left:-4px;background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-left.tooltip-light .tooltip-arrow::after{top:1px;right:-1px}:host.tooltip-right.tooltip-light .tooltip-arrow{top:50%;right:100%;margin-top:-5px;margin-right:-4px;background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-right.tooltip-light .tooltip-arrow::after{top:-1px;right:1px}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    TooltipComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hostStyleTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.top',] }],
        hostStyleLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.left',] }],
        hostStyleZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.z-index',] }],
        hostStyleTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transition',] }],
        hostStyleMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.max-width',] }],
        hostClassShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-show',] }],
        hostClassShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-shadow',] }],
        hostClassLight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-light',] }],
        transitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['transitionend', ['$event'],] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultOptions = {
    'placement': 'top',
    'content-type': 'string',
    'delay': 0,
    'show-delay': 0,
    'hide-delay': 300,
    'hide-delay-mobile': 1500,
    'z-index': 0,
    'animation-duration': 300,
    'animation-duration-default': 300,
    'trigger': 'hover',
    'tooltip-class': '',
    'display': true,
    'display-mobile': true,
    'shadow': true,
    'theme': 'dark',
    'offset': 8,
    'max-width': '',
    'id': false
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(elementRef, componentFactoryResolver, appRef, injector) {
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TooltipDirective.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        /* tslint:enable */
        set: /* tslint:enable */
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && defaultOptions) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "placement", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['placement'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "contentType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['content-type'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "delay", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelayMobile", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['hide-delay-mobile'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "zIndex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['z-index'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "animationDuration", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['animation-duration'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "trigger", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['trigger'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "tooltipClass", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['tooltip-class'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof (value) === 'boolean') {
                this._options['display'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "displayMobile", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options['display-mobile'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "shadow", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options['shadow'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "theme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['theme'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "offset", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['offset'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "maxWidth", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['max-width'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "showDelay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this.options['delay'] || this._showDelay;
            if (this.isMobile) {
                return 0;
            }
            else {
                return result;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._showDelay = this._options['show-delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isMobile) {
                return (this._hideDelay >= this.options['hide-delay-mobile']) ? this._hideDelay : this.options['hide-delay-mobile'];
            }
            else {
                return this._hideDelay;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._hideDelay = this._options['hide-delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isTooltipDestroyed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef && this.componentRef.hostView.destroyed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "destroyDelay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._destroyDelay) {
                return this._destroyDelay;
            }
            else {
                return Number(this.hideDelay) + Number(this.options['animation-duration']);
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._destroyDelay = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.destroyTooltip();
        }), 0);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.applyOptionsDefault(defaultOptions, this.options);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip({ fast: true });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getElementPosition = /**
     * @return {?}
     */
    function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.createTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.appendComponentToBody(TooltipComponent);
        }), this.showDelay);
        this.showTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.showTooltipElem();
        }), this.showDelay);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TooltipDirective.prototype.destroyTooltip = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (options === void 0) { options = { fast: false }; }
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                _this.hideTooltip();
            }), options.fast ? 0 : this.hideDelay);
            this.destroyTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.componentRef || _this.isTooltipDestroyed) {
                    return;
                }
                _this.appRef.detachView(_this.componentRef.hostView);
                _this.componentRef.destroy();
                _this.events.emit('hidden');
            }), options.fast ? 0 : this.destroyDelay);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.showTooltipElem = /**
     * @return {?}
     */
    function () {
        this.clearTimeouts();
        ((/** @type {?} */ (this.componentRef.instance))).show = true;
        this.events.emit('show');
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hideTooltip = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ((/** @type {?} */ (this.componentRef.instance))).show = false;
        this.events.emit('hide');
    };
    /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    TooltipDirective.prototype.appendComponentToBody = /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    function (component, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        ((/** @type {?} */ (this.componentRef.instance))).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.elementPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.componentSubscribe = ((/** @type {?} */ (this.componentRef.instance))).events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.handleEvents(event);
        }));
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.clearTimeouts = /**
     * @return {?}
     */
    function () {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnHover", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['display-mobile'] == false && this.isMobile) {
                return false;
            }
            if (this.options['trigger'] !== 'hover') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnClick", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['display-mobile'] == false && this.isMobile) {
                return false;
            }
            if (this.options['trigger'] != 'click') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isMobile", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var check = false;
            navigator.maxTouchPoints ? check = true : check = false;
            return check;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    TooltipDirective.prototype.applyOptionsDefault = /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    function (defaultOptions$$1, options) {
        this._defaultOptions = Object.assign({}, defaultOptions$$1);
        this.options = Object.assign(this._defaultOptions, options);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.handleEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event === 'shown') {
            this.events.emit('shown');
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[tooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    TooltipDirective.propDecorators = {
        tooltipValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip',] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placement',] }],
        contentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['content-type',] }],
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['delay',] }],
        hideDelayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay-mobile',] }],
        zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['z-index',] }],
        animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['animation-duration',] }],
        trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['trigger',] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip-class',] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display',] }],
        displayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display-mobile',] }],
        shadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['shadow',] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['theme',] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['offset',] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['max-width',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['id',] }],
        showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-delay',] }],
        hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay',] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusin',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusout',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    exports: [
                        TooltipDirective
                    ],
                    entryComponents: [
                        TooltipComponent
                    ]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng2-tooltip-directive.js.map

/***/ }),

/***/ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js ***!
  \***********************************************************/
/*! exports provided: Papa, PapaParseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Papa", function() { return Papa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapaParseModule", function() { return PapaParseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse/papaparse.min.js */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Papa = /** @class */ (function () {
    function Papa(config) {
        this.config = config;
        this._papa = papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__;
        if (!this.config) {
            this.config = {};
        }
    }
    /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.parse = /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    function (csv, config) {
        if (config) {
            if (config.worker === true) {
                if (this.config.scriptPath) {
                    this._papa.SCRIPT_PATH = this.config.scriptPath;
                }
                else {
                    throw new Error('When using workers, the workerScriptPath must be defined in global' +
                        ' papaparse configuration. See' +
                        ' https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv/using-serviceworkers' +
                        ' for more information.');
                }
            }
        }
        return this._papa.parse(csv, config);
    };
    /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.unparse = /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    function (data, config) {
        return this._papa.unparse(data, config);
    };
    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setLocalChunkSize = /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.LocalChunkSize = value;
    };
    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setRemoteChunkSize = /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.RemoteChunkSize = value;
    };
    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setDefaultDelimiter = /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.DefaultDelimiter = value;
    };
    Object.defineProperty(Papa.prototype, "badDelimiters", {
        /**
         * An array of characters that are not allowed as delimiters.
         */
        get: /**
         * An array of characters that are not allowed as delimiters.
         * @return {?}
         */
        function () {
            return this._papa.BAD_DELIMITERS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "recordSeperator", {
        /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         */
        get: /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         * @return {?}
         */
        function () {
            return this._papa.RECORD_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "unitSeperator", {
        /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         */
        get: /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         * @return {?}
         */
        function () {
            return this._papa.UNIT_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "workersSupported", {
        /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         */
        get: /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         * @return {?}
         */
        function () {
            return this._papa.WORKERS_SUPPORTED;
        },
        enumerable: true,
        configurable: true
    });
    Papa.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Papa.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['PapaParseGlobalConfig',] }] }
    ]; };
    return Papa;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PapaParseModule = /** @class */ (function () {
    function PapaParseModule() {
    }
    PapaParseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    providers: [
                        Papa
                    ]
                },] },
    ];
    return PapaParseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhcGFwYXJzZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXBhcGFwYXJzZS9saWIvcGFwYS50cyIsIm5nOi8vbmd4LXBhcGFwYXJzZS9saWIvcGFwYS1wYXJzZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFwYVBhcnNlR2xvYmFsQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS1wYXJzZS1nbG9iYWwtY29uZmlnJztcbmltcG9ydCB7UGFwYVBhcnNlUmVzdWx0fSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS1wYXJzZS1yZXN1bHQnO1xuaW1wb3J0IHtQYXBhUGFyc2VDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcy9wYXBhLXBhcnNlLWNvbmZpZyc7XG5pbXBvcnQge1BhcGFVbnBhcnNlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS11bnBhcnNlLWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBsaWIgZnJvbSAncGFwYXBhcnNlL3BhcGFwYXJzZS5taW4uanMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFwYSB7XG4gICAgcHVibGljIF9wYXBhID0gbGliO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnUGFwYVBhcnNlR2xvYmFsQ29uZmlnJykgcHJpdmF0ZSBjb25maWc/OiBQYXBhUGFyc2VHbG9iYWxDb25maWdcbiAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIENTViB0byBhbiBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJzZShjc3Y6IHN0cmluZ3xGaWxlLCBjb25maWc/OiBQYXBhUGFyc2VDb25maWcpOiBQYXBhUGFyc2VSZXN1bHQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLndvcmtlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5zY3JpcHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcGEuU0NSSVBUX1BBVEggPSB0aGlzLmNvbmZpZy5zY3JpcHRQYXRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiB1c2luZyB3b3JrZXJzLCB0aGUgd29ya2VyU2NyaXB0UGF0aCBtdXN0IGJlIGRlZmluZWQgaW4gZ2xvYmFsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnIHBhcGFwYXJzZSBjb25maWd1cmF0aW9uLiBTZWUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcgaHR0cHM6Ly9hbGJlcnRoYWZmLmRrL3Byb2plY3RzL25neC1wYXBhcGFyc2UvZG9jcy92My9wYXJzaW5nLWNzdi91c2luZy1zZXJ2aWNld29ya2VycycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5wYXJzZShjc3YsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhbiBhcnJheSBpbnRvIENTVlxuICAgICAqL1xuICAgIHB1YmxpYyB1bnBhcnNlKGRhdGEsIGNvbmZpZz86IFBhcGFVbnBhcnNlQ29uZmlnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEudW5wYXJzZShkYXRhLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBpbiBieXRlcyBvZiBlYWNoIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyBmaWxlcyBvYnRhaW5lZCBmcm9tIHRoZSBET00gdGhhdFxuICAgICAqIGV4aXN0IG9uIHRoZSBsb2NhbCBjb21wdXRlci4gRGVmYXVsdCAxMCBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TG9jYWxDaHVua1NpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkxvY2FsQ2h1bmtTaXplID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzaXplIGluIGJ5dGVzIG9mIGVhY2ggcmVtb3RlIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyByZW1vdGUgZmlsZXMuIERlZmF1bHQgNSBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UmVtb3RlQ2h1bmtTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFwYS5SZW1vdGVDaHVua1NpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlbGltaXRlciB1c2VkIHdoZW4gaXQgaXMgbGVmdCB1bnNwZWNpZmllZCBhbmQgY2Fubm90IGJlIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkuIERlZmF1bHQgaXMgY29tbWEuXG4gICAgICovXG4gICAgcHVibGljIHNldERlZmF1bHREZWxpbWl0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkRlZmF1bHREZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIGFzIGRlbGltaXRlcnMuXG4gICAgICovXG4gICAgZ2V0IGJhZERlbGltaXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXBhLkJBRF9ERUxJTUlURVJTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0cnVlIGRlbGltaXRlci4gSW52aXNpYmxlLiBBU0NJSSBjb2RlIDMwLlxuICAgICAqIFNob3VsZCBiZSBkb2luZyB0aGUgam9iIHdlIHN0cmFuZ2VseSByZWx5IHVwb24gY29tbWFzIGFuZCB0YWJzIGZvci5cbiAgICAgKi9cbiAgICBnZXQgcmVjb3JkU2VwZXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5SRUNPUkRfU0VQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsc28gc29tZXRpbWVzIHVzZWQgYXMgYSBkZWxpbWl0aW5nIGNoYXJhY3Rlci4gQVNDSUkgY29kZSAzMS5cbiAgICAgKi9cbiAgICBnZXQgdW5pdFNlcGVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEuVU5JVF9TRVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgc3VwcG9ydHMgSFRNTDUgV2ViIFdvcmtlcnMuXG4gICAgICogSWYgZmFsc2UsIHdvcmtlcjogdHJ1ZSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgICAqL1xuICAgIGdldCB3b3JrZXJzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5XT1JLRVJTX1NVUFBPUlRFRDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXBhfSBmcm9tICcuL3BhcGEnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQYXBhXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXBhUGFyc2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBV0ksY0FBaUUsTUFBOEI7UUFBOUIsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7cUJBRmhGLEdBQUc7UUFJZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7Ozs7Ozs7SUFLTSxvQkFBSzs7Ozs7O2NBQUMsR0FBZ0IsRUFBRSxNQUF3QjtRQUNuRCxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLG9FQUFvRTt3QkFDaEYsK0JBQStCO3dCQUMvQix3RkFBd0Y7d0JBQ3hGLHdCQUF3QixDQUFDLENBQUM7aUJBQ2pDO2FBQ0o7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7OztJQU1sQyxzQkFBTzs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQTBCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRckMsZ0NBQWlCOzs7Ozs7O2NBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O0lBTy9CLGlDQUFrQjs7Ozs7O2NBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7SUFNaEMsa0NBQW1COzs7OztjQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBTXhDLHNCQUFJLCtCQUFhOzs7Ozs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDcEM7OztPQUFBO0lBTUQsc0JBQUksaUNBQWU7Ozs7Ozs7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ2hDOzs7T0FBQTtJQUtELHNCQUFJLCtCQUFhOzs7Ozs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDOUI7OztPQUFBO0lBTUQsc0JBQUksa0NBQWdCOzs7Ozs7Ozs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ3ZDOzs7T0FBQTs7Z0JBMUZKLFVBQVU7Ozs7Z0RBSU0sUUFBUSxZQUFJLE1BQU0sU0FBQyx1QkFBdUI7O2VBWDNEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDUCxJQUFJO3FCQUNQO2lCQUNKOzswQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v4.6.3
https://github.com/mholt/PapaParse
License: MIT
*/
Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return!1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;k.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header)}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw"exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u()},k.parse(n.file,n.instanceConfig)}else z(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1})}}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache")}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t)}}}function m(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r)}d.data.splice(0,1)}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e))}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u)}return{successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a=""}}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw"Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw"Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P)}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++}}else p++}return E();function k(e){h.push(e),d=P}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length)}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P)}function C(e){return{data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[]}},this.abort=function(){F=!0},this.getCharIndex=function(){return P}}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&y(t.workerId,t.results)}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e]}function b(){throw"Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments)}}function z(e){return"function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0})}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});

/***/ }),

/***/ "./src/app/config/app-config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app-config.ts ***!
  \**************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    //public static endPoint = 'http://34.74.243.55:8086/com.carrotruleangular/';
    // public static endPoint = 'http://development.bizlem.io:8087/com.carrotruleangularnew/';
    // public static endPoint = 'http://bizlem.io:8087/com.carrotruleangularnew/';
    // public static endPoint = 'https://bluealgo.com:8088/com.carrotruleangularnew/';
    AppConfig.endPoint = 'https://bluealgo.com:8088/com.carrotruleangular/';
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/main/setup-rule-step/setup-rule-step.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup-rule-step/setup-rule-step.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\n<div class=\"page\">\n  <div class=\"page-content container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"panel\" id=\"exampleWizardForm\">\n          <div class=\"panel-body\">\n\n          <!--  <div class=\"row\">\n              <div class=\"col-lg-11 col-md-offset-1\">\n                <nav class=\"panel panel-info\">\n                  <div class=\"panel-heading\">\n                    <div class=\"panel-title\">\n                      <h5 style=\"margin-bottom : 0px !important;\"><b>Project Name : </b> {{projectName}}</h5>\n                    </div>\n                  </div>\n                </nav>\n              </div>\n            </div> -->\n\n            <div class=\"row\" *ngIf=\"pane==0\">\n\n              <div class=\"col-md-12\">\n                  <div class=\"main-box-section\" style=\"width:100%;\" *ngIf=\"exsitingData.length\">\n                    <div *ngFor=\"let level of savedLevelsData; let l=index, let last=last; let first = first;\">\n                      <form [formGroup]=\"entryCriteriaForm\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <h3 class=\"page-title\">{{level.clusterName}}</h3>\n                            <!-- <label class=\"container allow-data-transform\">Allow output builder\n                              <input type=\"checkbox\" name=\"radio-selector\" [checked]=\"showDataTransformButton\"\n                                (change)=\"showDataTransformButton = !showDataTransformButton\">\n                              <span class=\"checkmark\"></span>\n                            </label> -->\n                          </div>\n                          <div class=\"col-md-4\">\n                          </div>\n                          <div class=\"col-md-1 text-right\" *ngIf=\"role == 'Setup Admin'\">\n                            <div class=\"dropdown\">\n                              <button class=\"btn btn-success dropdown-toggle\" type=\"button\"\n                                id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\">\n                                <i class=\"fa fa-plus\"></i>\n                              </button>\n\n                              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                <a class=\"dropdown-item\" (click)=\"add_RuleEngine(dataRule, level.clusterName)\">Add Rule Engine</a>\n                                <a class=\"dropdown-item\" *ngIf=\"level.isSplitterAdded\">Splitter Added</a>\n                                <ng-container *ngFor=\"let construct of dataRule.Constructs;\">\n                                  <a class=\"dropdown-item\" (click)=\"add_remove_construct(construct, l)\" [hidden]=\"construct === 'Splitter' && level.isSplitterAdded\">{{level[construct] ? 'Remove' : 'Add'}} {{construct}}</a>\n                                </ng-container>\n                                <!-- <a class=\"dropdown-item\" (click)=\"add_remove_Splitter()\" *ngIf=\"!isSplitterAdded\">{{showSplitterButton ? 'Remove' : 'Add'}} Splitter</a>\n                                <a class=\"dropdown-item\" *ngIf=\"isSplitterAdded\" (click)=\"showAddDropDownMenu = false\">Splitter Added</a>\n                                <a class=\"dropdown-item\" (click)=\"add_remove_Collector()\">{{showCollectorButton ? 'Remove' : 'Add'}} Collector</a>\n                                <a class=\"dropdown-item\" (click)=\"add_remove_Aggregator()\">{{showAggregatorButton ? 'Remove' : 'Add'}} Aggregator</a> -->\n                                <a class=\"dropdown-item\" (click)=\"add_remove_output(l)\" *ngIf=\"last\">{{showDataTransformButton ? 'Remove' : 'Add'}} Output Builder</a>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <br>\n                            <div class=\"row\">\n                              <div id=\"main-tb\" class=\"find-tbl\" style=\"width:100%;\">\n                                <div class=\"col-md-11 table-set-up-funnel\" *ngFor=\"let ruleJson of exsitingData; let i=index\">\n                                  <ng-container *ngIf=\"ruleJson.LevelData == level.clusterName\">\n                                    <div class=\"row\">\n                                      <div class=\"custom-checkbox\" class=\"col-md-6\">\n                                        <label class=\"container rule-engine-name\">{{ruleJson.ruleengine_name}}\n                                          <input type=\"checkbox\" id=\"{{ruleJson.LevelData}}\" class=\"rule-engine-checkbox {{'rule-emgine-selector'+ruleJson.ruleengine_name}}\"\n                                            name=\"radio-selector\" *ngIf=\"role == 'Setup Admin'\"\n                                            (change)=\"toggleRuleEngineSelector(ruleJson, true, i, null, 'rule-engine-checkbox', $event, l)\">\n                                          <span class=\"checkmark\" *ngIf=\"role == 'Setup Admin'\"></span>\n                                        </label>\n                                        <!-- <label class=\"container\" *ngIf=\"showDataTransformButton\">Output builder\n                                          <input type=\"checkbox\"\n                                            class=\"{{'data-rule-emgine-selector'+ruleJson.ruleengine_name}}\"\n                                            name=\"radio-selector\" (change)=\"dataTransformSelectChanged(i)\">\n                                          <span class=\"checkmark\"></span>\n                                        </label> -->\n                                      </div>\n                                      <!-- <div class=\"col-md-6 text-right\" *ngIf=\"role == 'Setup Admin'\">\n                                        <img src=\"../../../assets/img/download.png\" style=\"height: 32px;\"\n                                          tooltip=\"Download Excel\" placement=\"top\" show-delay=\"100\"\n                                          (click)=\"getDownloadLinkStep1()\">\n                                      </div> -->\n                                    </div>\n\n                                    <div class=\"existing-rule-container\">\n                                      <table class=\"table table-bordered existing-rule\" cellpadding=\"0\" cellspacing=\"0\">\n                                        <thead>\n                                          <tr>\n                                            <th scope=\"col\" rowspan=\"2\" class=\"title-lvl-1 title-row-1 radio-select\"></th>\n                                            <th scope=\"col\" rowspan=\"2\" class=\"title-lvl-1 title-row-1 srno\">Sr.<br>No</th>\n                                            <th scope=\"col\" rowspan=\"2\" class=\"title-lvl-1 title-row-1 ruleName\">Rule<br>Name</th>\n                                            <th scope=\"col\" rowspan=\"2\" class=\"title-lvl-1 title-row-1 ruleName\">Valid<br>From</th>\n                                            <th scope=\"col\" rowspan=\"2\" class=\"title-lvl-1 title-row-1 ruleName\">Valid<br>To</th>\n                                            <th scope=\"col\" class=\"title-lvl-1 title-row-1 field {{'t'+i+'c'+j}}\"\n                                              *ngFor=\"let header of ruleJson.headers; let j=index\" id=\"{{'t'+i+'c'+j}}\">\n                                              {{header.field}}<a (click)=\"increaseRuleWidth('t'+i+'c'+j)\"\n                                                class=\"ml-2 text-white\"><i class=\"fa fa-plus\"></i></a></th>\n                                            <th scope=\"col\" class=\"title-lvl-1 title-row-1 output {{'output-column'+i}}\"\n                                              id=\"{{'output-column'+i}}\">Output<a\n                                                (click)=\"increaseRuleWidth('output-column'+i)\" class=\"ml-2 text-white\"><i\n                                                  class=\"fa fa-plus\"></i></a></th>\n                                          </tr>\n                                          <tr>\n                                            <!-- <th scope=\"col\" class=\"title-lvl-1 title-row-1\"></th>\n                                            <th scope=\"col\" class=\"title-lvl-1 title-row-1\"></th>\n                                            <th scope=\"col\" class=\"title-lvl-1 title-row-1\"></th> -->\n                                            <th scope=\"col\" class=\"title-lvl-2 title-row-2\"\n                                              *ngFor=\"let operator of ruleJson.headers;\">{{operator.Category}}</th>\n                                            <th scope=\"col\" class=\"title-lvl-1 title-row-2\"></th>\n                                          </tr>\n                                        </thead>\n                                        <tbody>\n                                          <ng-container *ngFor=\"let ruleJsonData of ruleJson.data let k=index;\">\n                                            <tr>\n                                              <td><input name=\"radio-selector\" type=\"radio\" class=\"rule-radio\"\n                                                  (click)=\"ruleEngineSelector(ruleJson,false,i,k, l, $event)\"></td>\n                                              <td>{{k+1}}</td>\n                                              <td>{{ruleJsonData.rulename}}</td>\n                                              <td>{{ruleJsonData.ValidFrom | date : 'd/M/yyyy'}}</td>\n                                              <td>{{ruleJsonData.ValidUpto | date : 'd/M/yyyy'}}</td>\n                                              <td *ngFor=\"let value of ruleJsonData.values;\">{{value}}</td>\n                                              <td><span\n                                                  *ngFor=\"let outPut of ruleJsonData.Outputdata; let n=index\">{{outPut.field}}:\n                                                  {{outPut.value}}<span *ngIf=\"n != ruleJsonData.Outputdata.length-1\">,\n                                                  </span></span></td>\n                                            </tr>\n                                          </ng-container>\n                                        </tbody>\n                                      </table>\n                                    </div>\n                                  </ng-container>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"role == 'Setup Admin'\">\n                          <div class=\"col-md-11 text-right\">\n                            <button class=\"btn btn-danger text-white btn-sm rule-action-btn delete-rule-btn ml-4\"\n                              (click)=\"deleteRuleEngineOrRule()\"\n                              [disabled]=\"(allowEditRule != true && allowAddRule != true) || selectedLevel != l\"><i\n                                class=\"fa fa-trash\">Delete</i></button>\n                            <button class=\"btn btn-primary text-white btn-sm rule-action-btn edit-rule-btn ml-4\"\n                              (click)=\"edit_Rule()\" [disabled]=\"(allowEditRule != true) || selectedLevel != l\"><i\n                                class=\"fa fa-edit\">Edit</i></button>\n                            <button class=\"btn btn-success text-white btn-sm rule-action-btn add-rule-btn ml-4\"\n                              (click)=\"edit_Rule()\" [disabled]=\"(allowAddRule != true) || selectedLevel != l\"><i class=\"fa fa-plus\">Add</i></button>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin: 10px 0px;\" *ngIf=\"(level.selectedConstructs.length > 0) && (role == 'Setup Admin')\">\n                            <div class=\"col-md-12 text-center\">\n\n                              <ng-container *ngFor=\"let construct of level.selectedConstructs;\">\n                                  <button class=\"btn btn-success text-white btn-sm ml-4\"\n                                  [ngClass]=\"{'splitter-background': (construct === 'Splitter'), 'collector-background': (construct === 'Collector'), 'aggregator-background': (construct === 'Aggregator')}\">\n                                    <i class=\"fa fa-check\"></i>{{construct}}\n                                  </button>\n                              </ng-container>\n\n                              <!-- <button class=\"btn btn-success text-white btn-sm ml-4\" style=\"background-color: #33FFF9;\"\n                                [hidden]=\"showSplitterButton == false\"><i class=\"fa fa-check\"></i>Splitter</button>\n      \n                              <button class=\"btn btn-success text-white btn-sm ml-4\" style=\"background-color: #FF335B;\"\n                                [hidden]=\"showCollectorButton == false\"><i class=\"fa fa-check\"></i>Collector</button>\n      \n                              <button class=\"btn btn-success text-white btn-sm ml-4\" style=\"background-color: #FF9333;\"\n                                [hidden]=\"showAggregatorButton == false\"><i class=\"fa fa-check\"></i>Aggregator</button> -->\n                              \n                              <input type=\"text\" class=\"ml-4\" [(ngModel)]=\"ClusterName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Group Name\" required>\n\n                              <button class=\"btn btn-primary text-white btn-sm ml-4\" [disabled]=\"selectedDataTransformRules.length <= 0\"\n                                (click)=\"postConstruct(l)\">Save Constructs</button>\n                            </div>\n                        </div>\n                        <div class=\"row\" style=\"margin: 10px 0px;\" *ngIf=\"role == 'Setup Admin' && showDataTransformButton && (selectedLevel === l)\">\n                          <div class=\"col-md-12 text-center\">\n                            <img src=\"../../../carroteng/assets/img/download.png\" style=\"height: 32px;\" tooltip=\"Download excel\"\n                              placement=\"top\" show-delay=\"100\" (click)=\"getDownloadLink()\" *ngIf=\"showReviewDataTransform\">\n                            \n                            <!-- <a id=\"review-trans-download-hdn\" [href]=\"dataTransformDownloadLink\" download=\"download\"\n                              class=\"hidden\"><img src=\"../../../assets/img/download.png\"></a> -->\n\n                            <img src=\"../../../carroteng/assets/img/upload.png\" style=\"height: 32px;\" tooltip=\"Upload Excel\"\n                              placement=\"top\" show-delay=\"100\" (click)=\"openDataTransfileDialog($event)\"\n                              *ngIf=\"showReviewDataTransform\">\n\n                            <button class=\"btn btn-primary text-white btn-sm output-builder-btn ml-4\"\n                              style=\"background-color: #5CBF52;\"\n                              (click)=\"showStep1DataTrasform()\" \n                              [disabled]=\"selectedDataTransformRules.length <= 0\"\n                              [hidden]=\"showDataTransformButton == false\">Output Builder</button>\n\n                            <input type=\"file\" #datafileImportInput name=\"Data File Upload\" id=\"txtFileUploadData\"\n                              (change)=\"datafileChangeListener($event)\" />\n                          </div>\n                        </div>\n                      </form>\n                      <div class=\"col-11\" style=\"border-bottom: 2px solid #ddd; margin: 30px 0px;\" *ngIf=\"!last\"></div>\n                    </div>\n                  </div>\n\t\t\t\t\t<div class=\"main-box-section\" style=\"width:100%;\" *ngIf=\"!showLoading && (!exsitingData.length) \">\n               <!-- <div class=\"main-box-section\" style=\"width:100%;\" *ngIf=\"!showLoading && (!exsitingData.length || ((savedLevelsData.length > 0) && (savedLevelsData.length < dataRule.Cluster.length) && savedLevelsData[savedLevelsData.length - 1].OutputBuilder))\">-->\n                    <div class=\"row\">\n                      <div class=\"col-11\" style=\"border-bottom: 2px solid #ddd; margin: 30px 0px;\" *ngIf=\"exsitingData.length > 0\"></div>\n                      <div class=\"col-md-6\">\n                        <h3 class=\"page-title\">Review</h3>\n                      </div>\n                      <div class=\"col-md-4\">\n                      </div>\n                      <div class=\"col-md-1 text-right\" *ngIf=\"role == 'Setup Admin'\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-primary text-white dropdown-toggle\" type=\"button\" \n                            id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                            aria-expanded=\"false\">\n                            <i class=\"fa fa-plus\"></i>\n                          </button>\n\n                          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                            <a class=\"dropdown-item\" (click)=\"add_RuleEngine(dataRule)\">Add Rule Engine</a>\n                            <a class=\"dropdown-item\" *ngIf=\"!isSplitterAdded\" (click)=\"add_remove_Splitter()\">{{showSplitterButton ? 'Remove' : 'Add'}} Splitter</a>\n                            <a class=\"dropdown-item\" *ngIf=\"isSplitterAdded\">Splitter Added</a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <br>\n                        <div class=\"row\">\n                          <div id=\"main-tb\" class=\"find-tbl\" style=\"width:100%;\">\n                            <div class=\"col-md-11 table-set-up-funnel \">\n                              <p class=\"text-center\">Create your algorithm.</p>\n                            </div>\n                          </div>\n                          <div class=\"col-11 text-center\">\n                              <button class=\"btn btn-primary text-white btn-sm output-builder-btn ml-4\" (click)=\"create_Splitter()\" \n                              [hidden]=\"showSplitterButton == false\" *ngIf=\"!isSplitterAdded\">Add Splitter</button>\n                              <div style=\"border : 1px solid #ddd; border-radius: 5px; padding: 16px;\" *ngIf=\"isSplitterAdded\">\n                                <p>Splitter added successfully, Please add rule engine</p>\n                                <button class=\"btn btn-primary text-white btn-sm output-builder-btn ml-4\" \n                                  (click)=\"add_RuleEngine(dataRule)\">Add Rule Engine</button>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"main-box-section\" style=\"width:100%; min-height: 200px;\" align=\"center\" *ngIf=\"showLoading\">\n                    <img alt=\"loading\" src=\"../../../carroteng/assets/img/loading.gif\"/> &nbsp; Loading...\n                  </div>\n              </div>\n\n            </div>\n\n            <div class=\"row\" style=\"padding:10px 25px;\" *ngIf=\"pane==1\">\n              <h3 class=\"page-title\">Set Rules</h3>\n              <form [formGroup]=\"entryCriteriaForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"main-box-section\" style=\"width:100%;\" formArrayName=\"data\">\n                  <ul *ngFor=\"let data of entryCriteriaForm.get('data')['controls']; let i=index\"\n                    style=\"margin:0px;padding:0px;\">\n\n                    <div class=\"box-section row\" [formGroupName]=\"i\">\n                      \n                      <div class=\"col-md-5\">\n                        <div class=\"row\">\n                          <div class=\"col-md-5\">\n                            <p><strong>Rule Engine Name</strong><span style=\"color: red; padding-left: 2px;\">*</span></p>\n                          </div>\n                          <div class=\"col-md-7\" [formGroup]=\"entryCriteriaForm\">\n                            <span>\n                              <input type=\"text\" formControlName=\"ruleengine_name\" class=\"form-control\" [ngClass]=\"{'invalid-form' : submitted && entryCriteriaForm.controls.ruleengine_name.errors}\" value=\"{{entryCriteriaForm.controls.ruleengine_name.value}}\" required>\n                              <div *ngIf=\"submitted && entryCriteriaForm.controls.ruleengine_name.errors\" class=\"invalid-input-error\">\n                                  <div *ngIf=\"entryCriteriaForm.controls.ruleengine_name.errors.required\">Rule Engine Name is required</div>\n                              </div>\n                            </span>\n                          </div>\n                        </div>\n\n                        <div class=\"row\">\n                          <div class=\"col-md-5\">\n                            <p><strong>Description</strong></p>\n                          </div>\n                          <div class=\"col-md-7\" [formGroup]=\"entryCriteriaForm\">\n                            <span>\n                              <input type=\"text\" formControlName=\"description\" value=\"{{entryCriteriaForm.controls.description.value}}\" class=\"form-control\">\n                            </span>\n                          </div>\n                        </div>\n                        \n                        <!-- <div class=\"row\">\n                          <div class=\"col-md-5\">\n                            <p><strong>Created By</strong></p>\n                          </div>\n                          <div class=\"col-md-7\">\n                            <span>\n                              <input type=\"text\" formControlName=\"Created_By\" value=\"{{data.controls.Created_By.value}}\">\n                            </span>\n                          </div>\n                        </div> -->\n\n                        <!-- <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <p><strong>Rule Name</strong></p>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <span>\n                              <input type=\"text\" formControlName=\"rulename\" value=\"{{data.controls.rulename.value}}\">\n                            </span>\n                          </div>\n                        </div> -->\n\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"col-md-12 mb-2\" *ngIf=\"allowStep1DataTransform\">\n                          <!-- <a class=\"btn btn-primary text-white\" (click)=\"step1DataTransform = true\">Data transform</a> -->\n                          <div>\n                            <label style=\"cursor: pointer\" for=\"rdo-data\">Data transform</label>\n                            <input type=\"radio\" name=\"dataTrans\" (change)=\"changheDataTrans('Data')\" id=\"rdo-data\"\n                              class=\"ml-2 mr-4\" checked>\n\n                            <label style=\"cursor: pointer\" for=\"rdo-possible-value\">\n                              Master Data \n                              &nbsp;\n                              <span tooltip=\"<span style='font-size:16px'>The rule mlooks for an exact if string var are used and it always recommened to cut and paste the values it here  to eliminate any chances of error Eg : Field :Nationality,values :America and American are two different strings)</span>\"\n                              content-type=\"html\" placement=\"bottom\" show-delay=\"100\" class=\"fa fa-question-circle\"\n                              tooltip-class=\"upload-excel-tooltip\"></span>\n                            </label>\n                            <input type=\"radio\" name=\"dataTrans\" (change)=\"changheDataTrans('PossibleValue')\"\n                              id=\"rdo-possible-value\" class=\"ml-2\">\n                          </div>\n                          <span class=\"mt-3 data-import\" *ngIf=\"step1DataTransform\">\n                            <img src=\"../../../carroteng/assets/img/download.png\" style=\"height: 32px;\" tooltip=\"Download Excel\"\n                              placement=\"top\" show-delay=\"100\" (click)=\"getDownloadLinkStep1()\">\n                            <!-- <a id=\"setup-trans-download-step1-hdn\" [href]=\"dataTransformDownloadLinkStep1\"\n                              download=\"download\" class=\"hidden\"><img src=\"../../../assets/img/download.png\"\n                                style=\"height: 32px;\" tooltip=\"Download Excel\" placement=\"top\" show-delay=\"100\"\n                                *ngIf=\"dataTransformDownloadLinkStep1 != null\"></a> -->\n\n\n                            <img src=\"../../../carroteng/assets/img/upload.png\" tooltip=\"Upload excel\" placement=\"top\"\n                              show-delay=\"100\" (click)=\"openfileDialogStep1($event)\">\n                            <input type=\"file\" #fileImportInputStep1 name=\"File Upload\"\n                              class=\"btn btn-primary btn-outline custom-btn col-md-12\" id=\"txtFileUploadStep1\"\n                              (change)=\"fileChangeListenerStep1($event)\" style=\"width: 100%\" />\n                          </span>\n                        </div>\n                        <!-- <div class=\"col-md-12\" *ngIf=\"allowPossibleValue\">\n                          <a class=\"btn btn-primary text-white\" (click)=\"showDataImport = true\">\n                            <span>Possible values of string variables</span>\n                            &nbsp;\n                            <span tooltip=\"<span style='font-size:16px'>The rule mlooks for an exact if string var are used and it always recommened to cut and paste the values it here  to eliminate any chances of error Eg : Field :Nationality,values :America and American are two different strings)</span>\"\n                              content-type=\"html\" placement=\"bottom\" show-delay=\"100\" class=\"fa fa-question-circle\"\n                              tooltip-class=\"upload-excel-tooltip\"></span>\n                          </a>\n                        </div> -->\n                        <div class=\"col-md-12 init-opts mt-3\" *ngIf=\"showDataImport\">\n                          <!-- <label style=\"cursor: pointer\" for=\"init-free-text\">Free Text</label>\n                          <input type=\"radio\" name=\"init\" (change)=\"init_opt_change('free-text')\" id=\"init-free-text\"\n                            class=\"ml-2 mr-4\" checked> -->\n\n                          <label style=\"cursor: pointer\" for=\"init-excel\">Import Excel</label>\n                          <!-- <input type=\"radio\" name=\"init\" (change)=\"init_opt_change('excel')\" id=\"init-excel\"\n                            class=\"ml-2\"> -->\n\n                          <div class=\"ml-4 data-import\">\n                            <img src=\"../../../carroteng/assets/img/download.png\" style=\"height: 32px;\" tooltip=\"Download Excel\"\n                              placement=\"top\" show-delay=\"100\" (click)=\"getDownloadPossibleValuLinkStep1()\">\n                            <!-- <a id=\"setup-possible-download-hdn\" [href]=\"possibleValueLink\" download=\"download\"\n                              class=\"hidden\"><img src=\"../../../assets/img/download.png\"></a> -->\n\n                            <img src=\"../../../carroteng/assets/img/upload.png\" tooltip=\"Upload excel\" placement=\"top\"\n                              show-delay=\"100\" (click)=\"openfileDialog($event)\">\n                            <input type=\"file\" #fileImportInput name=\"File Upload\"\n                              class=\"btn btn-primary btn-outline custom-btn col-md-12\" id=\"txtFileUpload\"\n                              (change)=\"fileChangeListener($event)\" style=\"width: 100%\" />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2 row text-right\">\n                        <div class=\"dropdown col-6\">\n                          <button class=\"btn btn-primary dropdown-toggle\"\n                            type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                            aria-expanded=\"false\">\n                            <i class=\"fa fa-plus\"></i>\n                          </button>\n                          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n                            <a class=\"dropdown-item\" (click)=\"add_SFData(data.controls.SFdata)\">Add Trigger</a>\n                            <a class=\"dropdown-item\" (click)=\"add_Output(data.controls.Outputdata)\">Add Output</a>\n                          </div>\n                        </div>\n                        <div class=\"dropdown col-6\">\n                          <button class=\"btn btn-danger dropdown-toggle\"\n                            type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                            aria-expanded=\"false\">\n                            <i class=\"fa fa-minus\"></i>\n                          </button>\n                          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n                            <a class=\"dropdown-item\" (click)=\"remove_SFData(data.controls.SFdata, j)\">Remove Trigger</a>\n                            <a class=\"dropdown-item\" (click)=\"remove_outPut(data.controls.Outputdata)\">Remove Output</a>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12 main-tbl\">\n                        <br>\n                        <div class=\"row\">\n                          <div id=\"main-tb\" class=\"find-tbl\" style=\"width:100%;\">\n                            <div class=\"col-md-11 table-set-up-funnel\">\n                              <div align=\"center\">\n                                <p><strong>Trigger</strong></p>\n                              </div>\n                              <table class=\"table table-bordered\">\n                                <thead>\n                                  <!-- <tr>\n                                    <th colspan=\"11\" class=\"text-center bg-defualt\">\n                                      <strong>Trigger</strong></th>\n                                  </tr> -->\n                                  <tr>\n                                    <th rowspan=\"2\" scope=\"col\" width=\"10%\"\n                                      style=\"vertical-align:middle;text-align: center; width: 50px;\"\n                                      class=\"title-lvl-1 title-row-1\">Sr<br>No.</th>\n                                    <th colspan=\"9\" class=\"text-center bg-defualt title-lvl-1 title-row-1 container-fluid\">\n                                      <div class=\"row\" style=\"margin-top: 8px;\">\n                                        <!-- Rule Name -->\n                                        <div class=\"col-md-4\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                              <p><strong>Rule Name</strong><span style=\"color: red; padding-left: 2px;\">*</span></p>\n                                            </div>\n                                            <div class=\"col-md-8\">\n                                              <input type=\"text\" formControlName=\"rulename\" [ngClass]=\"{'invalid-form' : submitted && data.controls.rulename.errors}\" value=\"{{data.controls.rulename.value}}\" \n                                              style=\"border-width: 2px;\" class=\"form-control title-lvl-1 title-row-1\" required>\n                                              <div *ngIf=\"submitted && data.controls.rulename.errors\" class=\"invalid-input-error\" align=\"left\">\n                                                  <div *ngIf=\"data.controls.rulename.errors.required\">Rule Name is required</div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <!-- Valid From -->\n                                        <div class=\"col-md-4\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                              <p><strong>Valid From</strong></p>\n                                            </div>\n                                            <div class=\"col-md-8\">\n                                              <input type=\"date\" formControlName=\"ValidFrom\" value=\"{{data.controls.ValidFrom.value}}\" placeholder=\"DD/MM/YYYY\"\n                                              style=\"border-width: 2px;\" class=\"form-control title-lvl-1 title-row-1\">\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <!-- Valid To -->\n                                        <div class=\"col-md-4\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                              <p><strong>Valid To</strong></p>\n                                            </div>\n                                            <div class=\"col-md-8\">\n                                              <input type=\"date\" formControlName=\"ValidUpto\" value=\"{{data.controls.ValidUpto.value}}\" placeholder=\"DD/MM/YYYY\"\n                                              style=\"border-width: 2px;\" class=\"form-control title-lvl-1 title-row-1\">\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </th>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"col\" width=\"19%\" class=\"title-lvl-2 title-row-2\">Field</th>\n                                    <th scope=\"col\" width=\"19%\" class=\"title-lvl-2 title-row-2\">Operator</th>\n                                    <th scope=\"col\" width=\"19%\" class=\"title-lvl-2 title-row-2\">Value</th>\n                                    <th scope=\"col\" width=\"19%\" class=\"title-lvl-2 title-row-2\">Operator</th>\n                                    <th scope=\"col\" width=\"19%\" class=\"title-lvl-2 title-row-2\">Value</th>\n                                    <!-- <th scope=\"col\" class=\"title-lvl-2 title-row-2\">Valid From</th>\n                                    <th scope=\"col\" class=\"title-lvl-2 title-row-2\">Valid Upto</th> -->\n                                    <!-- <th scope=\"col\" class=\"title-lvl-2 title-row-2\">Created By</th> -->\n                                    <!-- <th scope=\"col\" class=\"title-lvl-2 title-row-2\">Version</th> -->\n                                  </tr>\n                                </thead>\n                                <tbody formArrayName=\"SFdata\">\n                                  <tr *ngFor=\"let SFdata of data.get('SFdata').controls; let j=index\">\n                                    <td scope=\"row\">{{j+1}}</td>\n                                    <!-- <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <input type=\"text\" formControlName=\"rulename\" value=\"{{SFdata.value.rulename}}\"\n                                        class=\"form-control\">\n                                    </td> -->\n                                    <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <select class=\"form-control click-select\"\n                                        [class.width50]=\"SFdata.value.type == 'Url'\" formControlName=\"field\"\n                                        (change)=\"ruleFieldChangeListener(SFdata)\">\n                                        <option value=\"\">Select Option</option>\n                                        <option *ngFor=\"let field of trigger_fields\" value=\"{{field.Field}}\">\n                                          {{field.Field}}</option>\n                                      </select>\n                                      <input type=\"text\" formControlName=\"field1\" value=\"{{SFdata.value.field1}}\"\n                                        class=\"form-control\" [class.width50]=\"SFdata.value.type == 'Url'\"\n                                        *ngIf=\"SFdata.value.type == 'Url'\">\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <select class=\"form-control select-oprater\" formControlName=\"Category\">\n                                        <ng-container *ngFor=\"let operator of operators\">\n                                          <option *ngIf=\"showOpeartor(operator, SFdata.value.type)\"\n                                            value=\"{{operator.id}}\">{{operator.val}}</option>\n                                        </ng-container>\n                                      </select>\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\" [hidden]=\"SFdata.value.values.length != 0\">\n                                      <input type=\"text\" formControlName=\"value\" value=\"{{SFdata.value.value}}\"\n                                        class=\"form-control\" *ngIf=\"SFdata.value.type !== 'Date'\">\n                                      <input type=\"date\" formControlName=\"value\" value=\"{{SFdata.value.value}}\" placeholder=\"DD/MM/YYYY\"\n                                        class=\"form-control date\" *ngIf=\"SFdata.value.type === 'Date'\">\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\" [hidden]=\"SFdata.value.values.length == 0\">\n                                      <input type=\"text\" formControlName=\"value\" value=\"{{SFdata.value.value}}\"\n                                        class=\"form-control\" [attr.list]=\"'list-'+j\"\n                                        (change)=\"autoCompleteValueChange(SFdata)\">\n                                      <datalist id=\"list-{{j}}\">\n                                        <option *ngFor=\"let val of SFdata.value.values\" value=\"{{val}}\">{{val}}</option>\n                                      </datalist>\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <select class=\"form-control remove-slect\" formControlName=\"Category1\"\n                                        *ngIf=\"SFdata.value.type == 'Integer' || SFdata.value.type == 'Url' || SFdata.value.type === 'Date' || SFdata.value.type == ''\">\n                                        <ng-container *ngFor=\"let operator of operators\">\n                                          <option *ngIf=\"operator.id != SFdata.value.Category\" value=\"{{operator.id}}\">\n                                            {{operator.val}}</option>\n                                        </ng-container>\n                                      </select>\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <input type=\"text\" formControlName=\"value1\" value=\"{{SFdata.value.value1}}\"\n                                        class=\"form-control remove-input\"\n                                        *ngIf=\"SFdata.value.type == 'Integer' || SFdata.value.type == 'Url' || SFdata.value.type == ''\">\n                                        <input type=\"date\" formControlName=\"value1\" value=\"{{SFdata.value.value1}}\" placeholder=\"DD/MM/YYYY\"\n                                        class=\"form-control remove-input date\" *ngIf=\"SFdata.value.type === 'Date'\">\n                                    </td>\n\n                                    <!-- <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <input type=\"date\" placeholder=\"DD/MM/YYYY\" formControlName=\"ValidFrom\" value=\"{{SFdata.value.ValidFrom}}\"\n                                        class=\"form-control\">\n                                    </td>\n                                    <td class=\"td-input\" [formGroupName]=\"j\">\n                                      <input type=\"date\" placeholder=\"DD/MM/YYYY\" formControlName=\"ValidUpto\" value=\"{{SFdata.value.ValidUpto}}\"\n                                        class=\"form-control\">\n                                    </td> -->\n                                    <!-- <td [formGroupName]=\"j\">\n                                      <input type=\"text\" formControlName=\"Version\" value=\"{{SFdata.value.Version}}\"\n                                        class=\"form-control\">\n                                    </td> -->\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <div class=\"col-md-1 text-left btn-tr-section\">\n                              <!-- <a class=\"btn btn-success text-white add-row-btn btn-sm\" (click)=\"add_SFData(data.controls.SFdata)\"><i class=\"fa fa-plus\"></i></a>\n                                <a class=\"btn btn-danger text-white btn-sm remove-row-btn\" (click)=\"remove_SFData(data.controls.SFdata, j)\"><i class=\"fa fa-minus\"></i></a> -->\n                            </div>\n                            <div class=\"col-md-11 table-set-up-funnel\">\n                              <table class=\"table table-bordered\">\n                                <thead>\n                                  <tr>\n                                    <th colspan=\"8\" class=\"text-center bg-defualt title-lvl-1 title-row-1\">\n                                      <strong>Output</strong></th>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"col\" style=\"width:20%;\" class=\"title-lvl-2 title-row-2\">Field</th>\n                                    <th scope=\"col\" style=\"width:20%;\" class=\"title-lvl-2 title-row-2\">Value</th>\n                                  </tr>\n                                </thead>\n                                <tbody formArrayName=\"Outputdata\">\n                                  <tr *ngFor=\"let Outputdata of data.get('Outputdata').controls; let k=index\">\n                                    <td class=\"td-input\" [formGroupName]=\"k\">\n                                      <input type=\"text\" formControlName=\"field\" value=\"{{Outputdata.value.field}}\"\n                                        class=\"form-control\" [attr.list]=\"'output-list-'+k\">\n                                      <datalist id=\"output-list-{{k}}\">\n                                        <option *ngFor=\"let field of output_fields\" value=\"{{field}}\">\n                                          {{field}}</option>\n                                      </datalist>\n                                      <!-- <input type=\"text\" value=\"{{Outputdata.value.field}}\" formControlName=\"field\" class=\"form-control\"> -->\n                                    </td>\n                                    <!-- <td [formGroupName]=\"k\"> \n                                      <input type=\"text\" value=\"{{Outputdata.value.value}}\" formControlName=\"value\" class=\"form-control\">\n                                    </td> -->\n                                    <!-- <td [formGroupName]=\"k\" [hidden]=\"Outputdata.value.values.length != 0\">\n                                      <input type=\"text\" formControlName=\"value\" value=\"{{Outputdata.value.value}}\" class=\"form-control\">\n                                    </td> -->\n                                    <td class=\"td-input\" [formGroupName]=\"k\">\n                                      <input type=\"text\" formControlName=\"value\" value=\"{{Outputdata.value.value}}\"\n                                        class=\"form-control\" [attr.list]=\"'output-value-list-'+k\">\n                                      <datalist id=\"output-value-list-{{k}}\">\n                                        <option *ngFor=\"let field of output_values\" value=\"{{field}}\">\n                                          {{field}}</option>\n                                      </datalist>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                            <div class=\"col-md-1 text-left btn-tr-section\">\n                              <!-- <a class=\"btn btn-warning text-white add-row-btn btn-sm\"\n                                (click)=\"add_Output(data.controls.Outputdata)\">Add Output<i class=\"fa fa-plus\"></i></a> -->\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </ul>\n                </div>\n              </form>\n\n              <div class=\"col-md-12 text-center\">\n                <button (click)=\"save()\" type=\"button\" class=\" ml-4 btn btn-primary btn-outline custom-btn\"\n                  [disabled]=\"disableSetupruleButton\">Save</button>\n                <button type=\"button\" (click)=\"show_pane0()\"\n                  class=\"btn btn-primary btn-outline custom-btn ml-4\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/setup-rule-step/setup-rule-step.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup-rule-step/setup-rule-step.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  font-size: 18px;\n  background: #fff; }\n  .page .form-control {\n    font-size: 18px;\n    height: 35px; }\n  .page .form-control.width50 {\n      width: 50%;\n      display: inline-block; }\n  .page .main-tbl {\n    margin-bottom: 75px; }\n  .page .existing-rule-container {\n    overflow: auto;\n    margin-bottom: 20px; }\n  .page .existing-rule {\n    margin-bottom: 0px;\n    text-align: center; }\n  .page .existing-rule th.radio-select {\n      width: 30px; }\n  .page .existing-rule th.srno {\n      width: 50px; }\n  .page .existing-rule th.ruleName {\n      width: 60px; }\n  .page .existing-rule th.field {\n      width: 200px; }\n  .page .existing-rule th.output {\n      min-width: 200px; }\n  .page th {\n    text-align: center; }\n  .page th.line-height-15 {\n    line-height: 15px; }\n  .page tr, .page th, .page td {\n    white-space: nowrap;\n    padding: 0px 8px; }\n  .page .td-input {\n    padding: 0px; }\n  .page .title-lvl-1 {\n    background: #4a7bb2; }\n  .page .title-lvl-2 {\n    background: #ddebf7; }\n  .page .title-row-1 {\n    color: #fff; }\n  .page .title-row-2 {\n    color: #000; }\n  .page .btn {\n    font-size: 18px; }\n  .page .page-title {\n    width: 100%;\n    margin-bottom: 10px;\n    font-size: 20px; }\n  .page .data-import {\n    display: inline-block; }\n  .page .data-import img {\n      height: 32px; }\n  .page .data-import #txtFileUpload {\n      display: none; }\n  .page #txtFileUploadData {\n    display: none; }\n  .page #txtFileUploadStep1 {\n    display: none; }\n  .container {\n  position: relative;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: normal;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: inline-block;\n  width: auto;\n  margin-right: 30px;\n  padding-left: 0; }\n  .container.rule-engine-name {\n    font-size: 18px;\n    font-weight: bold; }\n  /* Hide the browser's default checkbox */\n  .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n  /* Create a custom checkbox */\n  .checkmark {\n  position: absolute;\n  top: 4px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #4a7bb2;\n  margin-left: 5px;\n  border-radius: 5px;\n  right: -10px; }\n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n  background-color: #ccc; }\n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n  background-color: #4a7bb2; }\n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n  display: block; }\n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n  left: 6px;\n  top: 1px;\n  width: 7px;\n  height: 13px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n  .upload-excel-tooltip {\n  font-size: 14px; }\n  .special-incentive-row {\n  margin-top: 50px; }\n  .rule-action-btn {\n  font-size: 16px; }\n  .rule-action-btn i.fa:before {\n    padding-right: 5px; }\n  .output-builder-btn {\n  background: #77b300;\n  border-color: #5c8b01; }\n  th {\n  background: #efeded; }\n  .dropdown-menu .dropdown-item {\n  cursor: pointer;\n  color: #212529 !important;\n  font-size: 18px; }\n  .btn {\n  font-size: 18px; }\n  .splitter-background {\n  background-color: #33FFF9; }\n  .collector-background {\n  background-color: #FF335B; }\n  .aggregator-background {\n  background-color: #FF9333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zZXR1cC1ydWxlLXN0ZXAvRTpcXGJpemxlbVRlamFsXFxjYXJyb3RydWxlaW50ZWdyYXRpb25cXGRhdGVmdW5jXFwybWF5XFxBbGdvcml0aG1fQnVpbGRlci1tYXN0ZXIvc3JjXFxhcHBcXG1haW5cXHNldHVwLXJ1bGUtc3RlcFxcc2V0dXAtcnVsZS1zdGVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZTtJQUNmLFlBQVksRUFBQTtFQUxwQjtNQU9ZLFVBQVU7TUFDVixxQkFBcUIsRUFBQTtFQVJqQztJQVlRLG1CQUFtQixFQUFBO0VBWjNCO0lBZVEsY0FBYztJQUNkLG1CQUFtQixFQUFBO0VBaEIzQjtJQW1CUSxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFwQjFCO01Bc0JZLFdBQVcsRUFBQTtFQXRCdkI7TUF5QmEsV0FBVyxFQUFBO0VBekJ4QjtNQTRCYSxXQUFXLEVBQUE7RUE1QnhCO01BK0JhLFlBQVksRUFBQTtFQS9CekI7TUFrQ1ksZ0JBQWdCLEVBQUE7RUFsQzVCO0lBc0NRLGtCQUFrQixFQUFBO0VBdEMxQjtJQXlDUSxpQkFBaUIsRUFBQTtFQXpDekI7SUE2Q1EsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBOUN4QjtJQWlEUSxZQUFZLEVBQUE7RUFqRHBCO0lBb0RRLG1CQUFtQixFQUFBO0VBcEQzQjtJQXVEUSxtQkFBbUIsRUFBQTtFQXZEM0I7SUEwRFEsV0FBVyxFQUFBO0VBMURuQjtJQTZEUSxXQUFXLEVBQUE7RUE3RG5CO0lBZ0VRLGVBQWUsRUFBQTtFQWhFdkI7SUFtRVEsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFyRXZCO0lBd0VRLHFCQUFxQixFQUFBO0VBeEU3QjtNQTBFWSxZQUFZLEVBQUE7RUExRXhCO01BNkVZLGFBQWEsRUFBQTtFQTdFekI7SUFpRlEsYUFBYSxFQUFBO0VBakZyQjtJQW9GUSxhQUFhLEVBQUE7RUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFibkI7SUFlUSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFJdkIsd0NBQUE7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRLEVBQUE7RUFHViw2QkFBQTtFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUdkLCtDQUFBO0VBQ0E7RUFDRSxzQkFBc0IsRUFBQTtFQUd4Qix3REFBQTtFQUNBO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0IsNkRBQUE7RUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBR2Ysb0NBQUE7RUFDQTtFQUNFLGNBQWMsRUFBQTtFQUdoQixrQ0FBQTtFQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsd0JBQXdCLEVBQUE7RUFFNUI7RUFDSSxlQUFlLEVBQUE7RUFFbkI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGVBQWUsRUFBQTtFQURuQjtJQUdRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBO0VBRXpCO0VBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7RUFFUSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLHlCQUF5QixFQUFBO0VBRTdCO0VBQ0kseUJBQXlCLEVBQUE7RUFFN0I7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAtcnVsZS1zdGVwL3NldHVwLXJ1bGUtc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC5mb3JtLWNvbnRyb2x7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAmLndpZHRoNTB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYWluLXRibHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgICB9XG4gICAgLmV4aXN0aW5nLXJ1bGUtY29udGFpbmVye1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmV4aXN0aW5nLXJ1bGV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0aC5yYWRpby1zZWxlY3R7XG4gICAgICAgICAgICB3aWR0aDogMzBweDsgXG4gICAgICAgICB9XG4gICAgICAgICB0aC5zcm5ve1xuICAgICAgICAgICAgIHdpZHRoOiA1MHB4OyBcbiAgICAgICAgICB9XG4gICAgICAgICAgdGgucnVsZU5hbWV7XG4gICAgICAgICAgICAgd2lkdGg6IDYwcHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aC5maWVsZHtcbiAgICAgICAgICAgICB3aWR0aDogMjAwcHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aC5vdXRwdXR7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4OyBcbiAgICAgICAgIH1cbiAgICB9XG4gICAgdGh7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgdGgubGluZS1oZWlnaHQtMTV7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICB0ciwgdGgsIHRke1xuICAgICAgICAvLyBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgfVxuICAgIC50ZC1pbnB1dHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAudGl0bGUtbHZsLTF7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0YTdiYjI7XG4gICAgfVxuICAgIC50aXRsZS1sdmwtMntcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZWJmNztcbiAgICB9XG4gICAgLnRpdGxlLXJvdy0xe1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnRpdGxlLXJvdy0ye1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgLmJ0bntcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAucGFnZS10aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmRhdGEtaW1wb3J0e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgICAjdHh0RmlsZVVwbG9hZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI3R4dEZpbGVVcGxvYWREYXRhe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjdHh0RmlsZVVwbG9hZFN0ZXAxe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwOyBcbiAgICAmLnJ1bGUtZW5naW5lLW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuICAuY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE3YmIyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgfVxuICBcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG4gIFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhN2JiMjtcbiAgfVxuICBcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbiAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBsZWZ0OiA2cHg7XG4gICAgdG9wOiAxcHg7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4udXBsb2FkLWV4Y2VsLXRvb2x0aXB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNwZWNpYWwtaW5jZW50aXZlLXJvd3tcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnJ1bGUtYWN0aW9uLWJ0bntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaS5mYTpiZWZvcmV7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG59XG4ub3V0cHV0LWJ1aWxkZXItYnRue1xuICAgIGJhY2tncm91bmQ6ICM3N2IzMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWM4YjAxO1xufVxudGh7XG4gICAgYmFja2dyb3VuZDogI2VmZWRlZDtcbn1cbi5kcm9wZG93bi1tZW51e1xuICAgIC5kcm9wZG93bi1pdGVte1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbi5idG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3BsaXR0ZXItYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNGRkY5O1xufVxuLmNvbGxlY3Rvci1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjMzNUI7XG59XG4uYWdncmVnYXRvci1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkzMzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/setup-rule-step/setup-rule-step.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/setup-rule-step/setup-rule-step.component.ts ***!
  \*******************************************************************/
/*! exports provided: SetupRuleStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRuleStepComponent", function() { return SetupRuleStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var src_app_shared_services_rules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/rules.service */ "./src/app/shared/services/rules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var SetupRuleStepComponent = /** @class */ (function () {
    function SetupRuleStepComponent(fb, papa, el, ruleservice, router, route, location) {
        // this.location.replaceState('/setup-rule?role=Setup Admin');
        var _this = this;
        this.fb = fb;
        this.papa = papa;
        this.el = el;
        this.ruleservice = ruleservice;
        this.router = router;
        this.route = route;
        this.location = location;
        this.init_opt = '';
        this.operators = [
            {
                id: '',
                val: 'Select Operator',
                applicable: 'ALL'
            },
            {
                id: '!=',
                val: '!=',
                applicable: 'ALL'
            },
            {
                id: '==',
                val: '==',
                applicable: 'ALL'
            },
            {
                id: '>',
                val: '>',
                applicable: 'Integer, Float, Date'
            },
            {
                id: '<',
                val: '<',
                applicable: 'Integer, Float, Date'
            },
            {
                id: '>=',
                val: '>=',
                applicable: 'Integer, Float, Date'
            },
            {
                id: '<=',
                val: '<=',
                applicable: 'Integer, Float, Date'
            },
            {
                id: 'null',
                val: 'null',
                applicable: 'Integer, Float, Date'
            },
            {
                id: '!null',
                val: '!null',
                applicable: 'Integer, Float, Date'
            }
        ];
        this.pane = 0;
        this.trigger_fields = [];
        this.output_trigger_fields = [];
        this.output_fields = [];
        this.output_values = [];
        this.exsitingData = [];
        this.dataRule = {};
        this.showLoading = false;
        // public showAddDropDownMenu: boolean
        // public showRemoveDropDownMenu: boolean;
        this.showDataImport = false;
        this.selectedLevel = null;
        this.showReviewDataTransform = false;
        this.showDataTransformButton = false;
        this.showSplitterButton = false;
        this.showCollectorButton = false;
        this.showAggregatorButton = false;
        this.selectedDataTransformRules = [];
        this.dataTransformDownloadLink = null;
        this.allowStep1DataTransform = true;
        this.step1DataTransform = false;
        this.dataTransformDownloadLinkStep1 = null;
        this.possibleValueLink = null;
        this.allowPossibleValue = false;
        this.disableSetupruleButton = false;
        this.isSplitterAdded = false;
        this.selectedConstructs = [];
        this.ClusterName = "";
        this.CurrentLevel = "Level1";
        this.savedLevelsData = [];
        this.user_name = '';
        this.role = '';
        this.projectName = '';
        this.submitted = false;
        this.route.queryParams.subscribe(function (params) {
            if (params.Role) {
                _this.role = params.Role;
            }
            else {
                _this.router.navigate([], {
                    relativeTo: route,
                    queryParams: { 'Role': 'Setup Admin' },
                    queryParamsHandling: 'merge'
                });
                _this.role = 'Setup Admin';
            }
        });
        this.entryCriteriaForm = this.fb.group({
            name: [''],
            user_name: "",
            project_name: "",
            ruleengine_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: "",
            source: "",
            data: this.fb.array([])
        });
    }
    //
    SetupRuleStepComponent.prototype.onMessage = function (event) {
        var _this = this;
        console.log("onLoadjson ::: " + event.data);
        this.ruleservice.getFieldValuesData(event.data).subscribe(function (Valuesdata) {
            //this.dataRule = Valuesdata.Mainjson;
            console.log("Valuesdata= " + Valuesdata);
            _this.dataRule = Valuesdata;
            console.log("this.dataRule= " + _this.dataRule);
            _this.user_name = Valuesdata.username;
            _this.setMainRulesData(Valuesdata, true);
            if (Valuesdata.username) {
                _this.ruleservice.getExistingData({ username: Valuesdata.username, projectname: _this.GetParam('projectname'), source: _this.GetParam('source') }).subscribe(function (exisData) {
                    _this.exsitingData = exisData.RuleJson;
                    if (exisData != null) {
                        console.log("Valuesdata ===" + Valuesdata);
                        _this.loadExistingData();
                        console.log("Existing listener----" + exisData);
                        _this.pane = 0;
                    }
                    else {
                        _this.pane = 1;
                    }
                });
            }
        });
    };
    //
    /*
      ngOnInit() {
        this.showLoading = true;
        this.ruleservice.getFieldValuesData().subscribe(Valuesdata => {
          this.dataRule = Valuesdata;
          this.projectName = Valuesdata.project_name;
          this.user_name = Valuesdata.username;
          this.setMainRulesData(Valuesdata, true);
          if (this.user_name) {
            //this.pane=1
            this.loadExistingData();
          }else{
            this.showLoading = false;
          }
        })
      }*/
    //
    SetupRuleStepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoading = true;
        console.log('param1 = ' + this.GetParam('username'));
        console.log('param2 = ' + this.GetParam('projectname'));
        console.log('param3 = ' + this.GetParam('source'));
        this.ruleservice.getExistingData({ username: this.GetParam('username'), projectname: this.GetParam('projectname'), source: this.GetParam('source') }).subscribe(function (exisData) {
            console.log("exisData" + exisData);
            _this.exsitingData = exisData.RuleJson;
            if (exisData != null) {
                //console.log(Valuesdata);
                console.log("in ngOnInit----" + exisData);
                _this.loadExistingData();
                //  this.pane = 0
                // this.pane = 0
            }
            else {
                _this.showLoading = false;
            }
        });
    };
    SetupRuleStepComponent.prototype.GetParam = function (name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    };
    SetupRuleStepComponent.prototype.loadExistingData = function () {
        var _this = this;
        this.showLoading = true;
        this.ruleservice.getExistingData({ username: this.GetParam('username'), projectname: this.GetParam('projectname'), source: this.GetParam('source') }).subscribe(function (exisData) {
            if (exisData !== null && exisData !== undefined) {
                _this.exsitingData = exisData.RuleJson ? exisData.RuleJson : [];
            }
            else {
                _this.exsitingData = [];
            }
            _this.showLoading = false;
            _this.prepareDisplayData();
            // this.pane = 0;
            // this.allowAddRule = false;
            // this.allowEditRule = false;
            _this.show_pane0();
        });
        this.ruleservice.getExistingOutputBuilder({ username: this.GetParam('username'), projectname: this.GetParam('projectname'), source: this.GetParam('source') }).subscribe(function (responseData) {
            _this.exsitingOutputBuilderData = responseData.Mainjson;
        });
    };
    SetupRuleStepComponent.prototype.prepareDisplayData = function () {
        var _this = this;
        var isSplitterAdded = false;
        this.exsitingData.forEach(function (element) {
            var header = [];
            element.data.forEach(function (element1) {
                var val = [];
                element1.SFdata.forEach(function (element2) {
                    // for Category and its value
                    if (element2.Category) {
                        var result = header.filter(function (obj) {
                            return obj.field === element2.field && obj.Category === element2.Category;
                        });
                        if (result.length <= 0) {
                            header.push({
                                field: element2.field,
                                Category: element2.Category
                            });
                        }
                        var indx = _this.findWithAttr(header, 'field', 'Category', element2.field, element2.Category);
                        if (indx >= 0) {
                            val[indx] = element2.value;
                        }
                    }
                    // for Category1 and its value1
                    if (element2.Category1) {
                        var result1 = header.filter(function (obj) {
                            return obj.field === element2.field && obj.Category === element2.Category1;
                        });
                        if (result1.length <= 0) {
                            header.push({
                                field: element2.field,
                                Category: element2.Category1
                            });
                        }
                        var index1 = _this.findWithAttr(header, 'field', 'Category', element2.field, element2.Category1);
                        if (index1 >= 0) {
                            val[index1] = element2.value1;
                        }
                    }
                });
                //value.push(val)
                element1.values = val;
            });
            element.headers = header;
            // isSplitterAdded = element.isSplitterAdded ? true : false;
        });
        this.exsitingData.forEach(function (element) {
            element.data.forEach(function (element1) {
                if (element1.values.length < element.headers.length) {
                    element1.values[element.headers.length - 1] = '';
                }
            });
        });
        this.isSplitterAdded = isSplitterAdded;
        this.savedLevelsData = [];
        if (this.exsitingData.length > 0) {
            this.exsitingData.forEach(function (ruleEngine) {
                var isClusterExist = _this.savedLevelsData.find(function (x) {
                    if (x.clusterName === ruleEngine.LevelData) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (!isClusterExist) {
                    var obj = {
                        'clusterName': ruleEngine.LevelData,
                        'isSplitterAdded': ruleEngine.isSplitterAdded ? ruleEngine.isSplitterAdded : false,
                        'OutputBuilder': ruleEngine.OutputBuilder ? ruleEngine.OutputBuilder : false,
                        'selectedConstructs': []
                    };
                    console.log("dataRule= " + _this.dataRule);
                    //console.log("dataRule cons= "+this.dataRule.Constructs);
                    if (_this.dataRule["Constructs"]) {
                        _this.dataRule.Constructs.forEach(function (construct) {
                            obj[construct] = false;
                        });
                    }
                    _this.savedLevelsData.push(obj);
                }
            });
        }
        console.log(this.exsitingData);
    };
    SetupRuleStepComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.entryCriteriaForm.invalid) {
            alert("Rule engine name and rule name are required fields.");
            return;
        }
        this.disableSetupruleButton = true;
        var ruleJsonAry = [];
        if (this.pane == 1) {
            var received = this.entryCriteriaForm.value;
            var dataAry_1 = [];
            var fieldAry_1 = [];
            var outPutFiledAry_1 = [];
            this.trigger_fields.forEach(function (element) {
                fieldAry_1.push({ "Field": element.Field, "type": element.type });
            });
            this.output_trigger_fields.forEach(function (element) {
                // outPutFiledAry.push(element.Field)
                outPutFiledAry_1.push({ Field: element.Field, Value: element.Value });
            });
            // let rName = 'R1';
            // if (this.allowEditRule) {
            //   rName = this.selectedRuleEngine.data[this.selectedRuleIndex].rulename
            // } else if (this.allowAddRule) {
            //   rName = 'R' + new Date().getTime()
            // }
            received.data.forEach(function (element) {
                var engineName = received.ruleengine_name;
                element.rulename = element.rulename;
                var sfDataAry = [];
                element.SFdata.forEach(function (element1) {
                    element1.symbol_category = element1.Category;
                    // element1.type = this.getType(element1);
                    element1.type = element1.type;
                    console.log(element1);
                    if (element1.type === 'Date') {
                        if (element1.value) {
                            element1.value = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(element1.value, 'dd/MM/yyyy');
                            console.log(element1.value);
                        }
                        if (element1.value1) {
                            element1.value1 = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(element1.value1, 'dd/MM/yyyy');
                            console.log(element1.value1);
                        }
                    }
                    sfDataAry.push(element1);
                    // if (element1.Category1 != "" && (element1.type == 'Integer' || element1.type == 'Url')) {
                    //   sfDataAry.push({
                    //     field: element1.field,
                    //     Category: element1.Category1,
                    //     type: element1.type,
                    //     value: element1.value1,
                    //     ValidFrom: element1.validFrom,
                    //     ValidUpto: element1.validUpto,
                    //     symbol_category: element1.Category
                    //   })
                    // }
                });
                element.SFdata = sfDataAry;
                element.Field = fieldAry_1;
                element.OutPutFiled = outPutFiledAry_1;
                dataAry_1.push(element);
                var object = {
                    user_name: received.user_name,
                    project_name: received.project_name,
                    ruleengine_name: engineName,
                    description: received.description,
                    LevelData: _this.CurrentLevel,
                    // Created_By : element.Created_By,
                    data: dataAry_1
                };
                if (_this.isSplitterAdded) {
                    object['isSplitterAdded'] = _this.isSplitterAdded;
                }
                var onLoadJsonSave = _this.dataRule;
                var keys = Object.keys(onLoadJsonSave);
                for (var k = 0; k < keys.length; k++) {
                    var key = keys[k];
                    if (key != "Mainjson" && key != "Level") {
                        console.log(key, onLoadJsonSave[key]);
                        object[key] = onLoadJsonSave[key];
                        if (key == 'Transform') {
                            delete _this.dataRule[key];
                        }
                    }
                }
                object['allowDataTransform'] = _this.allowStep1DataTransform;
                ruleJsonAry.push(object);
            });
        }
        var ruleJson = { "RuleJson": ruleJsonAry };
        console.log('====================================');
        console.log(ruleJson);
        console.log('====================================');
        //this.loadExistingData();
        this.ruleservice.saveData(ruleJson).subscribe(function (data) {
            _this.loadExistingData();
        }, function (err) {
            if (_this.pane == 1) {
                received.data.forEach(function (element) {
                    element.rulename = received.ruleengine_name;
                });
            }
            console.log(err);
            alert('Failed to save.' + err.message);
            _this.disableSetupruleButton = false;
        });
    };
    SetupRuleStepComponent.prototype.show_pane0 = function () {
        this.selectedRuleEngine = null;
        this.selectedRuleEngineIndex = null;
        this.selectedRuleIndex = null;
        this.allowAddRule = false;
        this.allowEditRule = false;
        this.showReviewDataTransform = false;
        this.selectedDataTransformRules = [];
        this.pane = 0;
    };
    SetupRuleStepComponent.prototype.init_opt_change = function (e) {
        this.init_opt = e;
    };
    Object.defineProperty(SetupRuleStepComponent.prototype, "f", {
        get: function () {
            return this.entryCriteriaForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SetupRuleStepComponent.prototype.setMainRulesData = function (data, allowDataTransform) {
        var _this = this;
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        var dataary = data.Mainjson;
        if (dataary && dataary.length) {
            this.clearRuleEngineForm();
            if (allowDataTransform) {
                this.allowStep1DataTransform = true;
                this.allowPossibleValue = false;
                this.step1DataTransform = true;
            }
            else {
                this.allowPossibleValue = true;
                this.allowStep1DataTransform = false;
                this.step1DataTransform = false;
            }
            this.trigger_fields = dataary[0].Trigger;
            this.entryCriteriaForm.controls.user_name.setValue(data.username);
            this.entryCriteriaForm.controls.project_name.setValue(data.project_name);
            this.entryCriteriaForm.controls.ruleengine_name.setValue(dataary[0].RuleEngine);
            this.entryCriteriaForm.controls.description.setValue("");
            this.entryCriteriaForm.controls.source.setValue("carrotrule");
            this.output_trigger_fields = [];
            this.output_fields = [];
            this.output_values = [];
            dataary[0]['Output'].forEach(function (y) {
                if (y.Field || y.field) {
                    if (y.Field && !_this.output_fields.includes(y.Field)) {
                        _this.output_fields.push(y.Field);
                    }
                    if (y.Value && !_this.output_values.includes(y.Value)) {
                        _this.output_values.push(y.Value);
                    }
                    _this.output_trigger_fields.push({ Field: y.Field || y.field, Value: y.Value || y.value });
                }
            });
            if (!this.output_trigger_fields.length) {
                this.output_trigger_fields = this.trigger_fields;
            }
            dataary.forEach(function (element) {
                var control = _this.entryCriteriaForm.controls.data;
                control.push(_this.fb.group({
                    rulename: [element['RuleEngine'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    // Created_By : '',
                    ruletype: "Trigger",
                    SFdata: _this.setSFData(element.Trigger[0]),
                    Outputdata: _this.SetOutput(element['Output']),
                    ValidFrom: (new Date()).toISOString().substr(0, 10),
                    ValidUpto: ""
                }));
            });
        }
    };
    SetupRuleStepComponent.prototype.SetOutput = function (x) {
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        arr.push(this.fb.group({
            field: this.output_fields[0],
            value: '',
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        }));
        return arr;
    };
    SetupRuleStepComponent.prototype.SetEditOutput = function (x) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        x.forEach(function (y) {
            arr.push(_this.fb.group({
                field: y.Field || y.field,
                value: y.Value || y.value,
                values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
            }));
        });
        return arr;
    };
    SetupRuleStepComponent.prototype.getCategoryByType = function (type) {
        if (type != 'Integer') {
            return '==';
        }
        else {
            return '>';
        }
    };
    SetupRuleStepComponent.prototype.getCategory1ByType = function (type) {
        if (type == 'Integer') {
            return '<';
        }
        else {
            return '';
        }
    };
    SetupRuleStepComponent.prototype.setTriggers = function (x) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        x.triggers.forEach(function (y) {
            arr.push(_this.fb.group({
                addressLine: y.addressLine
            }));
        });
        return arr;
    };
    SetupRuleStepComponent.prototype.add_SFData = function (control) {
        // this.showAddDropDownMenu = false;
        this.add_RuleData(control, this.trigger_fields[0]);
    };
    SetupRuleStepComponent.prototype.add_RuleData = function (control, el) {
        control.push(this.fb.group({
            field: "",
            field1: "",
            type: 'String',
            Category: "==",
            symbol_category: "==",
            value: "",
            Category1: "",
            symbol_category1: "",
            value1: "",
            // ValidFrom: "",
            // ValidUpto: "",
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        }));
    };
    SetupRuleStepComponent.prototype.create_Splitter = function () {
        var _this = this;
        var FieldValuesData = this.dataRule;
        this.ruleservice.createSplitter(FieldValuesData).subscribe(function (responseData) {
            _this.isSplitterAdded = true;
            _this.dataRule = responseData;
        }, function (err) {
            console.log("ERROR while creating splitter : ", err);
        });
    };
    SetupRuleStepComponent.prototype.add_remove_construct = function (constructName, savedLevelDataIndex) {
        this.savedLevelsData[savedLevelDataIndex][constructName] = !this.savedLevelsData[savedLevelDataIndex][constructName];
        if (this.savedLevelsData[savedLevelDataIndex][constructName]) {
            this.savedLevelsData[savedLevelDataIndex].selectedConstructs.push(constructName);
        }
        else {
            var index = this.savedLevelsData[savedLevelDataIndex].selectedConstructs.indexOf(constructName);
            this.savedLevelsData[savedLevelDataIndex].selectedConstructs.splice(index, 1);
        }
    };
    // add_remove_construct(construct, action){
    //   console.log(construct, action);
    //   if(action == 'add'){
    //     this.selectedConstructs.push(construct);
    //   }else{
    //     var index = this.selectedConstructs.indexOf(construct);
    //     this.selectedConstructs.splice(index, 1);
    //   }
    //   console.log(this.selectedConstructs);
    // }
    SetupRuleStepComponent.prototype.add_remove_Splitter = function () {
        this.showSplitterButton = !this.showSplitterButton;
        var action = this.showSplitterButton ? 'add' : 'remove';
        if (this.showSplitterButton) {
            this.selectedConstructs.push("Splitter");
        }
        else {
            var index = this.selectedConstructs.indexOf("Splitter");
            this.selectedConstructs.splice(index, 1);
        }
    };
    // add_remove_Collector(){
    //   this.showCollectorButton = !this.showCollectorButton;
    //   var action = this.showCollectorButton ? 'add' : 'remove';
    //   this.add_remove_construct("Collector", action);
    // }
    // add_remove_Aggregator(){
    //   this.showAggregatorButton = !this.showAggregatorButton;
    //   var action = this.showAggregatorButton ? 'add' : 'remove';
    //   this.add_remove_construct("Aggregator", action);
    // }
    SetupRuleStepComponent.prototype.add_remove_output = function (selectedLevelIndex) {
        this.selectedLevel = selectedLevelIndex;
        this.showDataTransformButton = !this.showDataTransformButton;
        // this.showAddDropDownMenu = false;
    };
    SetupRuleStepComponent.prototype.add_Output = function (control) {
        // this.showAddDropDownMenu = false;
        control.push(this.fb.group({
            field: this.output_fields[0],
            value: "",
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        }));
    };
    SetupRuleStepComponent.prototype.remove_outPut = function (control) {
        // this.showRemoveDropDownMenu = false;
        if (control.controls.length > 0) {
            control.removeAt(control.controls.length - 1);
        }
    };
    SetupRuleStepComponent.prototype.add_RuleEngine = function (dataRule, ruleEngineLevel) {
        console.log("in add_RuleEngine ");
        console.log("in dataRule " + dataRule);
        this.dataRule = dataRule;
        this.disableSetupruleButton = false;
        // this.showAddDropDownMenu = false;
        this.showSplitterButton = false;
        this.dataRule['Mainjson'][0].RuleEngine = "";
        this.allowPossibleValue = false;
        this.dataTransformDownloadLinkStep1 = null;
        console.log(this.dataRule);
        this.setMainRulesData(this.dataRule, true);
        if (ruleEngineLevel) {
            this.CurrentLevel = ruleEngineLevel;
        }
        else {
            this.CurrentLevel = "Level" + (this.savedLevelsData.length + 1);
        }
        this.pane = 1;
    };
    SetupRuleStepComponent.prototype.edit_Rule = function () {
        var _this = this;
        this.submitted = false;
        this.disableSetupruleButton = false;
        this.dataTransformDownloadLinkStep1 = null;
        this.clearRuleEngineForm();
        this.trigger_fields = [];
        this.output_trigger_fields = [];
        this.step1DataTransform = false;
        if (this.selectedRuleEngine.allowDataTransform == undefined || this.selectedRuleEngine.allowDataTransform == null || this.selectedRuleEngine.allowDataTransform) {
            this.allowStep1DataTransform = true;
            this.allowPossibleValue = false;
            this.step1DataTransform = true;
        }
        else {
            this.allowPossibleValue = true;
            this.allowStep1DataTransform = false;
            this.step1DataTransform = false;
        }
        //this.trigger_fields = this.selectedRuleEngine.data[0].SFdata;
        this.entryCriteriaForm.controls.user_name.setValue(this.selectedRuleEngine.user_name);
        this.entryCriteriaForm.controls.project_name.setValue(this.selectedRuleEngine.project_name);
        this.entryCriteriaForm.controls.ruleengine_name.setValue(this.selectedRuleEngine.ruleengine_name);
        this.entryCriteriaForm.controls.description.setValue(this.selectedRuleEngine.description ? this.selectedRuleEngine.description : "");
        var dataAry = [];
        if (this.allowAddRule) {
            dataAry = this.selectedRuleEngine.data;
            var control = this.entryCriteriaForm.controls.data;
            control.push(this.fb.group({
                // rulename: ['R' + (this.selectedRuleEngine.data.length + 1), Validators.required],
                // Created_By : dataAry[0].Created_By,
                rulename: "",
                ruletype: "Trigger",
                SFdata: this.setSFData(dataAry[0].SFdata),
                Outputdata: this.SetOutput(dataAry[0].Outputdata),
                ValidFrom: (new Date()).toISOString().substr(0, 10),
                ValidUpto: ""
            }));
        }
        else {
            dataAry.push(this.selectedRuleEngine.data[this.selectedRuleIndex]);
            var control_1 = this.entryCriteriaForm.controls.data;
            dataAry.forEach(function (element) {
                control_1.push(_this.fb.group({
                    rulename: [_this.selectedRuleEngine.data[_this.selectedRuleIndex].rulename, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    // Created_By : this.selectedRuleEngine.data[this.selectedRuleIndex].Created_By,
                    ruletype: "Trigger",
                    SFdata: _this.setEditSFData(element.SFdata),
                    Outputdata: _this.SetEditOutput(element['Outputdata']),
                    ValidFrom: _this.selectedRuleEngine.data[_this.selectedRuleIndex].ValidFrom,
                    ValidUpto: _this.selectedRuleEngine.data[_this.selectedRuleIndex].ValidUpto
                }));
            });
        }
        if (dataAry[0].Field) {
            dataAry[0].Field.forEach(function (triggerData) {
                _this.trigger_fields.push({
                    Field: triggerData.Field,
                    type: triggerData.type,
                    Value: ''
                });
            });
        }
        else {
            this.trigger_fields = this.dataRule['Mainjson'][0].Trigger;
        }
        //by siva
        if (dataAry[0].OutPutFiled) {
            dataAry[0].OutPutFiled.forEach(function (output) {
                _this.output_trigger_fields.push({
                    Field: output.Field,
                    Value: output.Value
                });
            });
        }
        else {
            this.output_trigger_fields = this.dataRule['Mainjson'][0].Output;
        }
        // this.output_trigger_fields = []
        // dataAry.forEach(element => {
        //   if (element.OutPutFiled) {
        //     element.OutPutFiled.forEach(triggerData => {
        //       this.output_trigger_fields.push({
        //         Field: triggerData,
        //         Category: '',
        //         Value: ''
        //       })
        //     })
        //   } else {
        //     element.Outputdata.forEach(element => {
        //       this.output_trigger_fields.push({
        //         Field: element.field || element.Field,
        //         Category: '',
        //         Value: ''
        //       })
        //     });
        //   }
        // });
        // if (this.output_trigger_fields.length <= 0) {
        //   this.output_trigger_fields = this.dataRule['Mainjson'][0].Trigger;
        // }
        this.pane = 1;
    };
    SetupRuleStepComponent.prototype.remove_SFData = function (control, index) {
        // this.showRemoveDropDownMenu = false;
        if (control.controls.length > 0) {
            control.removeAt(control.controls.length - 1);
        }
    };
    SetupRuleStepComponent.prototype.add_rule = function () {
        var control = this.entryCriteriaForm.controls.data;
        control.push(this.fb.group({
            name: '',
            sr_no: '',
            triggers: this.fb.array([])
        }));
    };
    SetupRuleStepComponent.prototype.isCSVFile = function (file) { return file.name.endsWith(".xlsx"); };
    SetupRuleStepComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var text = [];
        var files = $event.srcElement.files;
        if (files && files.length > 0) {
            if (this.isCSVFile(files[0])) {
                var input = $event.target;
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(files[0]);
                reader_1.onload = function (e) {
                    var data = reader_1.result.toString();
                    var object = { username: _this.user_name, ExcelData: data.substr(data.indexOf('base64,') + 7) };
                    _this.ruleservice.parseXLSX(object).subscribe(function (data) {
                        console.log(data);
                        _this.trigger_fields = data['ExcelData'];
                        _this.setExcelData(_this.trigger_fields);
                        _this.fileReset();
                        alert("File uploaded successfully.");
                    }, function (err) {
                        console.log("ERROR while parsing xlsx: ", err);
                        _this.fileReset();
                    });
                };
            }
            else {
                alert("Please import valid .xlsx file.");
                this.fileReset();
            }
        }
    };
    SetupRuleStepComponent.prototype.setExcelData = function (data) {
        this.clearRuleEngineForm();
        var control = this.entryCriteriaForm.controls.data;
        control.push(this.fb.group({
            rulename: '',
            // Created_By : '',
            ruletype: "Trigger",
            SFdata: this.setExcelSFData(data),
            Outputdata: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
        }));
    };
    SetupRuleStepComponent.prototype.fileReset = function () {
        this.fileImportInput.nativeElement.value = "";
        this.init_opt = 'free-text';
    };
    SetupRuleStepComponent.prototype.ruleFieldChangeListener = function (controlRaw) {
        if (controlRaw.value.field != "") {
            controlRaw.setValue(this.getTriggerByFiled(controlRaw, controlRaw.value.field, this.trigger_fields));
        }
    };
    SetupRuleStepComponent.prototype.getTriggerByFiled = function (controlRaw, field, array) {
        var value;
        array.forEach(function (element) {
            if (element.Field == field) {
                value = {
                    field: element.Field,
                    field1: "",
                    type: element.type || element.Type || "",
                    Category: controlRaw.value.Category ? controlRaw.value.Category : "",
                    symbol_category: controlRaw.value.symbol_category ? controlRaw.value.symbol_category : "",
                    value: controlRaw.value.Value || "",
                    Category1: controlRaw.value.Category1 || "",
                    symbol_category1: controlRaw.value.symbol_category1 || "",
                    value1: controlRaw.value.value1 || "",
                    // ValidFrom : controlRaw.value.ValidFrom ? controlRaw.value.ValidFrom : "",
                    // ValidUpto : controlRaw.value.ValidUpto ? controlRaw.value.ValidUpto : "",
                    values: controlRaw.value.Values ? controlRaw.value.Values : []
                };
            }
        });
        return value;
    };
    SetupRuleStepComponent.prototype.setSFData = function (y) {
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        if (y) {
            arr.push(this.fb.group({
                field: "",
                field1: "",
                type: "",
                Category: "",
                symbol_category: "",
                value: "",
                Category1: "",
                symbol_category1: "",
                value1: "",
                // ValidFrom: "",
                // ValidUpto: "",
                values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
            }));
        }
        return arr;
    };
    SetupRuleStepComponent.prototype.setEditSFData = function (x) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        x.forEach(function (y) {
            arr.push(_this.fb.group({
                field1: y.type == 'Url' ? (y.field1 || y.Field) : '',
                field: y.type == 'Url' ? 'URL' : (y.field || y.Field),
                type: y.type || y.Type,
                Category: y.Category,
                symbol_category: y.symbol_category,
                // value: (y.type !== 'Date') ? (y.value || y.Value) : (new DatePipe('en-US').transform(y.value, 'yyyy-MM-dd')),
                value: (y.type !== 'Date') ? (y.value || y.Value) : (y.value || y.Value).split("/").reverse().join("-"),
                Category1: y.Category1,
                symbol_category1: y.symbol_category1,
                // value1: (y.type !== 'Date') ? (y.value1 || y.Value1) : (new DatePipe('en-US').transform(y.value1, 'yyyy-MM-dd')),
                value1: (y.type !== 'Date') ? (y.value1 || y.Value1) : (y.value1 || y.Value1).split("/").reverse().join("-"),
                // ValidFrom: y.ValidFrom,
                // ValidUpto: y.ValidUpto,
                values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
            }));
        });
        // console.log(arr);
        return arr;
    };
    SetupRuleStepComponent.prototype.setExcelSFData = function (x) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        x.forEach(function (y) {
            arr.push(_this.fb.group({
                field: y.Field,
                type: 'String',
                Category: '==',
                symbol_category: "",
                value: '',
                Category1: '',
                symbol_category1: "",
                value1: '',
                // ValidFrom: "",
                // ValidUpto: "",
                values: _this.fb.array(y.Values)
            }));
        });
        return arr;
    };
    SetupRuleStepComponent.prototype.autoCompleteValueChange = function (SFdata) {
        if (SFdata.value.value != "" && SFdata.value.values.indexOf(SFdata.value.value) < 0) {
            alert('It is not recommended to use free text, if wsh you can proceed');
        }
    };
    SetupRuleStepComponent.prototype.autoCompleteFiledChange = function (Outputdata) {
        if (Outputdata.value.field != "") {
            var trigger_1 = null;
            this.trigger_fields.forEach(function (element) {
                if (element.Field == Outputdata.value.field) {
                    trigger_1 = element;
                }
            });
            if (trigger_1 == null) {
                alert('It is not recommended to use free text, if wsh you can proceed');
                Outputdata.value.values = [];
            }
            else {
                Outputdata.value.values = trigger_1.Values || [];
            }
        }
        else {
            Outputdata.value.values = [];
        }
    };
    // toggleAddDropDown() {
    //   this.showAddDropDownMenu = !this.showAddDropDownMenu;
    //   this.showRemoveDropDownMenu = false;
    // }
    // toggleRemoveDropDown() {
    //   this.showRemoveDropDownMenu = !this.showRemoveDropDownMenu;
    //   this.showAddDropDownMenu = false
    // }
    SetupRuleStepComponent.prototype.showDataUpload = function () {
        this.init_opt = 'excel';
    };
    SetupRuleStepComponent.prototype.increaseRuleWidth = function (className) {
        var field = this.el.nativeElement.getElementsByClassName(className);
        if (field.length) {
            var width = 250;
            if (field[0].style.width != '') {
                width = +field[0].style.width.substring(0, field[0].style.width.length - 2);
                width = width + 50;
            }
            field[0].style.width = width + 'px';
        }
    };
    SetupRuleStepComponent.prototype.dataTransformSelectChanged = function (index) {
        var indx = this.selectedDataTransformRules.indexOf(index);
        if (indx < 0) {
            this.selectedDataTransformRules.push(index);
        }
        else {
            this.selectedDataTransformRules.splice(index, 1);
        }
    };
    SetupRuleStepComponent.prototype.toggleRuleEngineSelector = function (ruleEngine, isRuleEngineSelected, ruleEngieIndex, ruleIndex, selectedElement, event, selectedLevelIndex) {
        var ruleEngineCheckboxElements = this.el.nativeElement.getElementsByClassName(selectedElement);
        // console.log(field);
        // field[0].checked = !this.allowAddRule
        // let indx = this.selectedDataTransformRules.indexOf(ruleEngieIndex)
        // console.log(indx);
        // if (indx < 0) {
        //   this.selectedDataTransformRules.push(ruleEngieIndex)
        // } else {
        //   this.selectedDataTransformRules.splice(ruleEngieIndex, 1)
        // }
        if (event.target.checked) {
            // ruleEngineCheckboxElements.forEach(ruleEngineElement => {
            // });
            for (var index = 0; index < ruleEngineCheckboxElements.length; index++) {
                if (ruleEngine.LevelData !== ruleEngineCheckboxElements[index].id) {
                    if (this.selectedDataTransformRules.indexOf(index) > -1) {
                        this.selectedDataTransformRules.splice(this.selectedDataTransformRules.indexOf(index), 1);
                    }
                    ruleEngineCheckboxElements[index].checked = false;
                }
            }
            this.selectedDataTransformRules.push(ruleEngieIndex);
        }
        else {
            this.selectedDataTransformRules.splice(this.selectedDataTransformRules.indexOf(ruleEngieIndex), 1);
        }
        if (this.selectedDataTransformRules.length == 0) {
            this.showSplitterButton = false;
            this.showCollectorButton = false;
            this.showAggregatorButton = false;
            this.selectedConstructs = [];
            this.selectedLevel = null;
        }
        // if (this.allowAddRule) {
        //   this.allowAddRule = false
        // } else {
        // this.ruleEngineSelector(ruleEngine, isRuleEngineSelected, ruleEngieIndex, ruleIndex);
        // }
        this.ruleEngineSelector(ruleEngine, isRuleEngineSelected, ruleEngieIndex, ruleIndex, selectedLevelIndex, event);
        this.showReviewDataTransform = false;
    };
    SetupRuleStepComponent.prototype.ruleEngineSelector = function (ruleEngine, isRuleEngineSelected, ruleEngieIndex, ruleIndex, selectedLevelIndex, event) {
        // this.showReviewDataTransform = false;
        // this.selectedRuleEngine = ruleEngine;
        // this.selectedRuleIndex = ruleIndex;
        this.selectedLevel = selectedLevelIndex;
        if (isRuleEngineSelected) {
            var ruleRadioButtonFromRuleEngine = this.el.nativeElement.getElementsByClassName('rule-radio');
            for (var index = 0; index < ruleRadioButtonFromRuleEngine.length; index++) {
                ruleRadioButtonFromRuleEngine[index].checked = false;
            }
            if (this.selectedDataTransformRules.length == 1) {
                this.showReviewDataTransform = true;
                this.selectedRuleEngine = ruleEngine;
                this.selectedRuleIndex = null;
                this.allowAddRule = true;
                this.allowEditRule = false;
            }
            else if (this.selectedDataTransformRules.length > 1) {
                this.showReviewDataTransform = true;
                this.selectedRuleEngine = null;
                this.selectedRuleIndex = null;
                this.allowAddRule = false;
                this.allowEditRule = false;
            }
            else {
                this.showReviewDataTransform = false;
                this.selectedRuleEngine = null;
                this.selectedRuleIndex = null;
                this.allowAddRule = false;
                this.allowEditRule = false;
            }
        }
        else {
            var ruleEngineCheckboxElements = this.el.nativeElement.getElementsByClassName('rule-engine-checkbox');
            for (var index = 0; index < ruleEngineCheckboxElements.length; index++) {
                ruleEngineCheckboxElements[index].checked = false;
            }
            var ruleEngineRadioElements = this.el.nativeElement.getElementsByClassName('rule-radio');
            if (ruleIndex === this.selectedRuleIndex) {
                for (var index = 0; index < ruleEngineRadioElements.length; index++) {
                    ruleEngineRadioElements[index].checked = false;
                    this.selectedDataTransformRules = [];
                    this.selectedRuleEngine = null;
                    this.selectedRuleEngineIndex = null;
                    this.selectedRuleIndex = null;
                    this.allowAddRule = false;
                    this.allowEditRule = false;
                }
            }
            else {
                this.selectedDataTransformRules = [];
                this.selectedRuleEngine = ruleEngine;
                this.selectedRuleEngineIndex = ruleEngieIndex;
                this.selectedRuleIndex = ruleIndex;
                this.allowAddRule = false;
                this.allowEditRule = true;
            }
        }
    };
    SetupRuleStepComponent.prototype.clearRuleEngineForm = function () {
        var a = this.entryCriteriaForm.get('data');
        while (a.length > 0) {
            a.removeAt(a.length - 1);
        }
    };
    SetupRuleStepComponent.prototype.postConstruct = function (savedLevelsDataIndex) {
        var _this = this;
        if (!this.ClusterName) {
            alert('Please add group name');
            return;
        }
        if (this.selectedDataTransformRules.length <= 0) {
            alert('Please select at least one rule engine');
        }
        var ruleEngines = [];
        for (var i = 0; i < this.selectedDataTransformRules.length; i++) {
            ruleEngines.push(this.exsitingData[this.selectedDataTransformRules[i]]);
        }
        var object = {
            "Construct_Data": [
                {
                    "user_name": this.user_name,
                    "project_name": this.entryCriteriaForm.value.project_name,
                    "ClusterName": this.ClusterName,
                    "Construct": this.savedLevelsData[savedLevelsDataIndex].selectedConstructs,
                    "RuleJson": ruleEngines
                }
            ]
        };
        this.ruleservice.postConstructs(object).subscribe(function (data) {
            // console.log(data);
            _this.ClusterName = "";
            _this.dataRule.Constructs.forEach(function (construct) {
                _this.savedLevelsData[savedLevelsDataIndex][construct] = false;
            });
            alert('Constructs posted successfully');
        }, function (err) {
            console.log("ERROR while posting construct : ", err);
        });
    };
    SetupRuleStepComponent.prototype.findWithAttr = function (array, attr, attr2, value, value2) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value && array[i][attr2] === value2) {
                return i;
            }
        }
        return -1;
    };
    SetupRuleStepComponent.prototype.openfileDialog = function (event) {
        event.preventDefault();
        var elem = document.getElementById('txtFileUpload');
        elem.click();
    };
    SetupRuleStepComponent.prototype.deleteRuleEngineOrRule = function () {
        var _this = this;
        if (confirm("Are you sure to delete ")) {
            var obj = {
                "username": this.selectedRuleEngine.user_name,
                "ruleengine_name": this.selectedRuleEngine.ruleengine_name,
                "projectname": this.selectedRuleEngine.project_name.replace(/ /g, '_'),
                "source": this.GetParam('source')
            };
            if (this.allowEditRule) {
                obj['rulename'] = this.selectedRuleEngine.data[this.selectedRuleIndex].rulename;
            }
            // console.log(obj);
            this.ruleservice.delete(obj).subscribe(function (data) {
                _this.allowAddRule = false;
                _this.allowEditRule = false;
                _this.selectedRuleEngine = null;
                _this.selectedDataTransformRules = [];
                _this.loadExistingData();
            }, function (error) {
                alert('Failed to delete.' + error.message);
            });
        }
    };
    SetupRuleStepComponent.prototype.showStep1DataTrasform = function () {
        if (this.isSameProjectSelected) {
            this.showReviewDataTransform = true;
        }
        else {
            alert('You have selected different projects,select same project to datatransform');
        }
    };
    SetupRuleStepComponent.prototype.openDataTransfileDialog = function (event) {
        event.preventDefault();
        var elem = document.getElementById('txtFileUploadData');
        elem.click();
    };
    SetupRuleStepComponent.prototype.datafileChangeListener = function ($event) {
        var _this = this;
        if (!this.isSameProjectSelected()) {
            alert('You have selected different projects,select same project to datatransform');
            this.datafileReset();
            return;
        }
        var files = $event.srcElement.files;
        if (files && files.length > 0) {
            if (this.isCSVFile(files[0])) {
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(files[0]);
                reader_2.onload = function (e) {
                    var data = reader_2.result.toString();
                    var ruleEngines = [];
                    for (var i = 0; i < _this.selectedDataTransformRules.length; i++) {
                        ruleEngines.push(_this.exsitingData[_this.selectedDataTransformRules[i]]);
                        ruleEngines[i].OutputBuilder = true;
                    }
                    var object = {
                        "Data_Transform": [
                            {
                                "user_name": _this.user_name,
                                "project_name": ruleEngines[0].project_name,
                                "RuleJson": ruleEngines,
                                "File_Data": [
                                    {
                                        "filename": "Sample.xlsx",
                                        "filedata": data.substr(data.indexOf('base64,') + 7)
                                    }
                                ]
                            }
                        ]
                    };
                    _this.ruleservice.uploadExcel(object).subscribe(function (data) {
                        _this.dataRule.Mainjson = data.Mainjson;
                        _this.savedLevelsData[_this.savedLevelsData.length - 1].OutputBuilder = true;
                        // this.savedLevelsData.push({
                        //   'clusterName' : 'Level' + (this.savedLevelsData.length + 1),
                        //   'isSplitterAdded' : false,
                        //   'OutputBuilder' : false
                        // });
                        // this.ngOnInit();
                        _this.datafileReset();
                        alert("File uploaded successfully.");
                    }, function (err) {
                        console.log("ERROR while uploading xlsx: ", err);
                        _this.datafileReset();
                    });
                };
            }
            else {
                alert("Please import valid .xlsx file.");
                this.datafileReset();
            }
        }
    };
    SetupRuleStepComponent.prototype.datafileReset = function () {
        this.datafileImportInput.nativeElement.value = "";
    };
    SetupRuleStepComponent.prototype.getDownloadLink = function () {
        var _this = this;
        var ruleEngines = [];
        for (var i = 0; i < this.selectedDataTransformRules.length; i++) {
            ruleEngines.push(this.exsitingData[this.selectedDataTransformRules[i]]);
        }
        var object = {
            "Excel_Data": [
                {
                    "user_name": this.user_name,
                    "project_name": this.entryCriteriaForm.value.project_name,
                    "RuleJson": ruleEngines
                }
            ]
        };
        this.ruleservice.downLoadExcel(object).subscribe(function (data) {
            _this.dataTransformDownloadLink = data.Download_Link;
            window.open(_this.dataTransformDownloadLink, "_blank");
            // let elem: HTMLElement = document.getElementById('review-trans-download-hdn');
            // elem["href"] = this.dataTransformDownloadLink
            // elem.click();
        }, function (err) {
            console.log("ERROR while downloading excel: ", err);
            _this.datafileReset();
        });
    };
    SetupRuleStepComponent.prototype.openfileDialogStep1 = function (event) {
        event.preventDefault();
        var elem = document.getElementById('txtFileUploadStep1');
        elem.click();
    };
    SetupRuleStepComponent.prototype.fileChangeListenerStep1 = function ($event) {
        var _this = this;
        var files = $event.srcElement.files;
        if (files && files.length > 0) {
            if (this.isCSVFile(files[0])) {
                var reader_3 = new FileReader();
                reader_3.readAsDataURL(files[0]);
                reader_3.onload = function (e) {
                    var data = reader_3.result.toString();
                    var object = _this.dataRule;
                    object["File_Data"] = [
                        {
                            "filename": "Sample.xlsx",
                            "filedata": data.substr(data.indexOf('base64,') + 7)
                        }
                    ];
                    _this.ruleservice.uploadExcelStep1(object).subscribe(function (data) {
                        if (_this.selectedRuleEngine != null) {
                            data.Mainjson[0].RuleEngine = _this.selectedRuleEngine.ruleengine_name;
                        }
                        _this.dataRule = data;
                        _this.setMainRulesData(_this.dataRule, false);
                        _this.allowPossibleValue = true;
                        _this.allowStep1DataTransform = false;
                        _this.step1DataTransform = false;
                        _this.trigger_fields = data.Mainjson[0].Trigger;
                        _this.output_trigger_fields = [];
                        data.Mainjson[0]['Output'].forEach(function (y) {
                            if (y.Field || y.field) {
                                _this.output_trigger_fields.push({ Field: y.Field || y.field, Value: y.Value || y.value });
                            }
                        });
                        if (!_this.output_trigger_fields.length) {
                            _this.output_trigger_fields = _this.trigger_fields;
                        }
                        _this.fileResetStep1();
                        alert("File uploaded successfully.");
                    }, function (err) {
                        console.log("ERROR while uploading xlsx: ", err);
                        _this.fileResetStep1();
                    });
                };
            }
            else {
                alert("Please import valid .xlsx file.");
                this.fileResetStep1();
            }
        }
    };
    SetupRuleStepComponent.prototype.fileResetStep1 = function () {
        this.fileImportInputStep1.nativeElement.value = "";
        this.init_opt = 'free-text';
    };
    SetupRuleStepComponent.prototype.getDownloadLinkStep1 = function () {
        var _this = this;
        this.ruleservice.downoadExcelStep1(this.dataRule).subscribe(function (data) {
            _this.dataTransformDownloadLinkStep1 = data.Download_Link;
            window.open(_this.dataTransformDownloadLinkStep1, "_blank");
            // let elem: HTMLElement = null;
            // if (this.pane == 0) {
            //   elem = document.getElementById('review-trans-download-step1-hdn');
            // } else {
            //   elem = document.getElementById('setup-trans-download-step1-hdn');
            // }
            // elem["href"] = this.dataTransformDownloadLinkStep1
            // elem.click();
        }, function (err) {
            console.log("ERROR while downloading excel: ", err);
            _this.datafileReset();
        });
    };
    SetupRuleStepComponent.prototype.getDownloadPossibleValuLinkStep1 = function () {
        var _this = this;
        this.ruleservice.downoadPossibleExcel(this.dataRule).subscribe(function (data) {
            _this.possibleValueLink = data.Download_Link;
            window.open(_this.possibleValueLink, "_blank");
            // let elem: HTMLElement = document.getElementById('setup-possible-download-hdn');
            // elem["href"] = this.possibleValueLink
            // elem.click();
        }, function (err) {
            console.log("ERROR while downloading excel: ", err);
            _this.datafileReset();
        });
    };
    SetupRuleStepComponent.prototype.isSameProjectSelected = function () {
        var res = true;
        var projName;
        var tmpProject;
        for (var i = 0; i < this.selectedDataTransformRules.length; i++) {
            tmpProject = this.exsitingData[this.selectedDataTransformRules[i]].project_name;
            if (projName == null) {
                projName = tmpProject;
            }
            else if (projName != tmpProject) {
                res = false;
                break;
            }
        }
        return res;
    };
    SetupRuleStepComponent.prototype.changheDataTrans = function (value) {
        this.showDataImport = false;
        if (value == 'Data') {
            this.step1DataTransform = true;
            this.allowPossibleValue = false;
            this.showDataImport = false;
        }
        else {
            this.step1DataTransform = false;
            // this.allowPossibleValue = true;
            this.showDataImport = true;
        }
    };
    SetupRuleStepComponent.prototype.getType = function (element) {
        if (!element.value) {
            return null;
        }
        else {
            var value = element.value;
            if (value.match(/^-{0,1}\d+$/)) {
                return 'Integer';
            }
            else if (value.match(/^\d+\.\d+$/)) {
                return 'Float';
            }
            else if (value.toLowerCase() == 'true' || value.toLowerCase() == 'false' || value.toLowerCase() == 'yes' || value.toLowerCase() == 'no') {
                return 'Boolean';
            }
            else if (value.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) {
                return 'Date';
            }
            else {
                return 'String';
            }
        }
    };
    SetupRuleStepComponent.prototype.showOpeartor = function (operator, type) {
        return operator.applicable == 'ALL' || type == 'Url' || type == '' || type == null || operator.applicable.indexOf(type) >= 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('existing-rule-content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SetupRuleStepComponent.prototype, "existingRuleContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileImportInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SetupRuleStepComponent.prototype, "fileImportInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datafileImportInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SetupRuleStepComponent.prototype, "datafileImportInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileImportInputStep1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SetupRuleStepComponent.prototype, "fileImportInputStep1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SetupRuleStepComponent.prototype, "onMessage", null);
    SetupRuleStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup-rule-step',
            template: __webpack_require__(/*! ./setup-rule-step.component.html */ "./src/app/main/setup-rule-step/setup-rule-step.component.html"),
            styles: [__webpack_require__(/*! ./setup-rule-step.component.scss */ "./src/app/main/setup-rule-step/setup-rule-step.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_shared_services_rules_service__WEBPACK_IMPORTED_MODULE_4__["RulesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], SetupRuleStepComponent);
    return SetupRuleStepComponent;
}());



/***/ }),

/***/ "./src/app/main/setup-rule-step/setup-rule-step.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/setup-rule-step/setup-rule-step.module.ts ***!
  \****************************************************************/
/*! exports provided: SetupRuleStepModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRuleStepModule", function() { return SetupRuleStepModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setup_rule_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-rule-step.component */ "./src/app/main/setup-rule-step/setup-rule-step.component.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");








var routes = [
    {
        path: '',
        component: _setup_rule_step_component__WEBPACK_IMPORTED_MODULE_3__["SetupRuleStepComponent"],
    }
];
var SetupRuleStepModule = /** @class */ (function () {
    function SetupRuleStepModule() {
    }
    SetupRuleStepModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_setup_rule_step_component__WEBPACK_IMPORTED_MODULE_3__["SetupRuleStepComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["PapaParseModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
            ]
        })
    ], SetupRuleStepModule);
    return SetupRuleStepModule;
}());



/***/ }),

/***/ "./src/app/shared/services/rules.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/rules.service.ts ***!
  \**************************************************/
/*! exports provided: RulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesService", function() { return RulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/app-config */ "./src/app/config/app-config.ts");




var RulesService = /** @class */ (function () {
    function RulesService(http) {
        this.http = http;
    }
    RulesService.prototype.getFieldValuesData = function (onloadjson) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'Fieldvalues', onloadjson);
    };
    RulesService.prototype.getExistingData = function (username) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'ExistingDetails', username);
    };
    RulesService.prototype.parseXLSX = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'Excelreturn', data);
    };
    RulesService.prototype.saveData = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'Savedrl', data);
    };
    RulesService.prototype.delete = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'DeleteApi', data);
    };
    RulesService.prototype.uploadExcel = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'ExcelFields', data);
    };
    RulesService.prototype.downLoadExcel = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'DownloadExcel', data);
    };
    RulesService.prototype.uploadExcelStep1 = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'TransformUploadExcel', data);
    };
    RulesService.prototype.downoadExcelStep1 = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'TransformDownload', data);
    };
    RulesService.prototype.downoadPossibleExcel = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'DownloadPossible', data);
    };
    RulesService.prototype.getExistingOutputBuilder = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'OutputBuilderExists', data);
    };
    RulesService.prototype.createSplitter = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'SplitterFields', data);
    };
    RulesService.prototype.postConstructs = function (data) {
        return this.http.post(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].endPoint + 'Constructs', data);
    };
    RulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RulesService);
    return RulesService;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-main-setup-rule-step-setup-rule-step-module.js.map