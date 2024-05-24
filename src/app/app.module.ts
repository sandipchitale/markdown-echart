import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from "@angular/common/http";

import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { appMarkdownEchartsMarkedExtension } from "./app.markdown-echarts-marked.extension";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedExtensions: [appMarkdownEchartsMarkedExtension()]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
