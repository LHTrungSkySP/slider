import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Layout1Component } from './components/layout1/layout1.component';
import { Layout2Component } from './components/layout2/layout2.component';
import { Layout3Component } from './components/layout3/layout3.component';
import { AnimationTextModule } from './share/component/animation-text/animation-text.module';
@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimationTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
