System.register(['@angular/core', '@angular/common/http', '@angular/common'], function (exports, module) {
'use strict';
var Injectable, Component, NgModule, HttpClient, HttpClientModule, CommonModule;
return {
setters: [function (module) {
Injectable = module.Injectable;
Component = module.Component;
NgModule = module.NgModule;
}, function (module) {
HttpClient = module.HttpClient;
HttpClientModule = module.HttpClientModule;
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

var QuotesService = (function () {
    function QuotesService(http$$1) {
        this.http = http$$1;
        this.url = 'https://quotes.rest/qod?category=inspire';
    }
    QuotesService.prototype.getQuotesOfTheDay = function () {
        return this.http.get(this.url);
    };
    QuotesService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], QuotesService);
    return QuotesService;
}());

var WidgetQuotesComponent = (function () {
    function WidgetQuotesComponent(quotesService) {
        this.quotesService = quotesService;
        this.quote = 'loading ...';
    }
    WidgetQuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quotesService.getQuotesOfTheDay().subscribe(function (quotes) { return _this.quote = quotes.contents.quotes[0].quote; });
    };
    WidgetQuotesComponent = __decorate([
        Component({
            selector: 'widget-quotes',
            template: "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div class=\"card-title\">\n        widget-quotes\n      </div>\n      <div class=\"card-text\">\n        {{quote}}\n      </div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [QuotesService])
    ], WidgetQuotesComponent);
    return WidgetQuotesComponent;
}());

var WidgetQuotesModule = (exports('WidgetQuotesModule', function () {
    function WidgetQuotesModule() {
    }
    WidgetQuotesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule
            ],
            declarations: [WidgetQuotesComponent],
            entryComponents: [WidgetQuotesComponent],
            providers: [
                {
                    provide: 'widget-quotes',
                    useValue: WidgetQuotesComponent
                },
                QuotesService
            ]
        })
    ], WidgetQuotesModule);
    return WidgetQuotesModule;
}()));

}
};
});
