import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SlidersComponent } from './content/sliders.component';
import { ContentComponent } from './content/content.component';
import {MyDataService} from "app/content/my-data.service";


@NgModule({
  declarations: [
    AppComponent,
    SlidersComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyDataService],
  bootstrap: [SlidersComponent]
})
export class AppModule { }
