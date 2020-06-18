import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { QuickpanelModule } from '../components/quickpanel/quickpanel.module';
import { ConfigPanelModule } from '../components/config-panel/config-panel.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { ProgressBarModule } from '../components/progress-bar/progress-bar.module';
import { FooterModule } from '../components/footer/footer.module';
import { SearchModule } from '../components/search/search.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    ConfigPanelModule,
    SidebarModule,
    ProgressBarModule,
    FooterModule,
    SearchModule
  ]
})
export class LayoutModule {
}
