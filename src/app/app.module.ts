import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from 'ng-modal-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
