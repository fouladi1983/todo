import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AppComponent } from './app.component';
import { ToDoModule } from './components/to-do/to-do.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    ToDoModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
