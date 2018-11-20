/**
 * Set existing vendor modules into SystemJS registry.
 * This way SystemJS won't make HTTP requests to fetch imported modules
 * needed by the dynamicaly loaded Widgets.
 */
import { System } from 'systemjs';
declare const SystemJS: System;

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularCommonHttp from '@angular/common/http';
import * as angularForms from '@angular/forms';
import * as angularAnimations from '@angular/animations';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';

SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/common/http', SystemJS.newModule(angularCommonHttp));
SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
SystemJS.set('@angular/animations', SystemJS.newModule(angularAnimations));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));
SystemJS.set('@angular/platform-browser-dynamic', SystemJS.newModule(angularPlatformBrowserDynamic));

SystemJS.config({ meta: { '*': { authorization: true } } });
/** --------- */

import { AfterViewInit, Component, Compiler, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { WidgetConfig } from '../widget-config.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(private compiler: Compiler, private dashboardService: DashboardService,
    private injector: Injector) { }

  ngAfterViewInit() {
    this.loadWidgets();
  }

  private async loadWidgets() {
    const widgets = await this.dashboardService.getWidgetConfigs().toPromise();
    widgets.forEach((widget) => this.createWidget(widget));
  }

  private async createWidget(widget: WidgetConfig) {
    // import external module bundle
    console.log(`Importing module bundle: ${widget.moduleBundlePath}`);
    const module = await SystemJS.import(widget.moduleBundlePath);

    // compile module
    const moduleFactory = await this.compiler.compileModuleAsync(module[widget.moduleName]);

    // resolve component factory
    const moduleRef = moduleFactory.create(this.injector);
    const componentProvider = moduleRef.injector.get(widget.name);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentProvider);

    // compile component
    console.log(`Creating widget: ${widget.name}`);
    this.content.createComponent(componentFactory);
  }

}
