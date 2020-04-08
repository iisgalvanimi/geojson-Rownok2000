import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDBsA1k21-AbjF8s7G2TN-M29MyuP00S9I'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
