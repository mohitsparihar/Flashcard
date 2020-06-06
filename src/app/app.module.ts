import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { LearnComponent } from './learn/learn.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CreateFormComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
