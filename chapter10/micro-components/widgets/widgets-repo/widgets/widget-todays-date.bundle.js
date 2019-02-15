System.register(['@angular/core', '@angular/common'], function (exports, module) {
'use strict';
var Component, NgModule, CommonModule;
return {
setters: [function (module) {
Component = module.Component;
NgModule = module.NgModule;
}, function (module) {
CommonModule = module.CommonModule;
}],
execute: function () {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var WidgetTodaysDateComponent = (function () {
    function WidgetTodaysDateComponent() {
        this.currentDate = new Date();
    }
    WidgetTodaysDateComponent.prototype.ngOnInit = function () {
    };
    WidgetTodaysDateComponent = __decorate([
        Component({
            selector: 'widget-todays-date',
            template: "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div class=\"card-title\">\n        widget-todays-date\n      </div>\n      <div class=\"card-text\">\n        {{currentDate | date}}\n      </div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], WidgetTodaysDateComponent);
    return WidgetTodaysDateComponent;
}());

var WidgetTodaysDateModule = (exports('WidgetTodaysDateModule', function () {
    function WidgetTodaysDateModule() {
    }
    WidgetTodaysDateModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [WidgetTodaysDateComponent],
            entryComponents: [WidgetTodaysDateComponent],
            providers: [{
                    provide: 'widget-todays-date',
                    useValue: WidgetTodaysDateComponent
                }]
        })
    ], WidgetTodaysDateModule);
    return WidgetTodaysDateModule;
}()));

}
};
});
