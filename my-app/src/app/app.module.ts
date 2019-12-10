import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './route/home/home.component';
import { AboutComponent } from './route/about/about.component';
import { NotFoundComponent } from './route/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
