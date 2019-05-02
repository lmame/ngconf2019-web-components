import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardTileComponent } from './dashboard-tile.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardTileComponent
  ],
  exports: [
    DashboardTileComponent
  ],
  entryComponents: [
    // Component name
    DashboardTileComponent
  ]
})
export class DashboardTileModule {

  constructor(private injector: Injector) {
    // Creating the web component and registerting it.
    // Those are web browser apis.
    const tileElm = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileElm);
  }

}
