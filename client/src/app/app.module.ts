import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HeaderComponent,
    StudentDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
