import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksWebAppComponent } from './books-web-app.component';
import { BookWebHeaderComponent } from './books-web-header.component';
import { BookWebFooterComponent } from './booksweb-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksWebAppComponent,
    BookWebHeaderComponent,
    BookWebFooterComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
