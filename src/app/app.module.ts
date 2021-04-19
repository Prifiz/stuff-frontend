import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StuffComponent } from './stuff/stuff.component';
import { AddStuffComponent } from './add-stuff/add-stuff.component';
import { FormsModule } from '@angular/forms';
import { TableDataComponent } from './table-data/table-data.component';
import { UpcomingMaintenanceComponent } from './upcoming-maintenance/upcoming-maintenance.component';
import { DataPropertyGetterPipe } from './data-property-getter-pipe/data-property-getter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFormComponent,
    StuffComponent,
    AddStuffComponent,
    TableDataComponent,
    UpcomingMaintenanceComponent,
    DataPropertyGetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
