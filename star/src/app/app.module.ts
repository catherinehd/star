import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core/core.module';
import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';
import { BaodianModule } from './baodian/baodian.module';
import { PersonModule } from './person/person.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, HomeModule, BrowserAnimationsModule, AppRoutingModule, ArticleModule, BaodianModule, PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
