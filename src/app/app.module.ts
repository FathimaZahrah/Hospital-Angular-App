import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { NewdoctorsComponent } from './newdoctors/newdoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SearchdeptComponent,
    NewdoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
