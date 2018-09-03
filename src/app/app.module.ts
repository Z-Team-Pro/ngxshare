import { masterRoutes } from './app.routes';
import { NgxshareService } from 'ngxshare';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { RouterModule } from '@angular/router';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(masterRoutes)
  ],
  providers: [ NgxshareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
