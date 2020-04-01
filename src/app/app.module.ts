import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FizzbuzzCheckerComponent } from './components/fizzbuzz-checker/fizzbuzz-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
