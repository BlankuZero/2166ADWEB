import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpclientComponent } from './httpclient/httpclient.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HttpclientComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

//imported automatically by Angular
import { AppComponent } from "./app.component";
import { HttpclientService } from "./httpclient.service";
import {HttpclientComponent} from "./httpclient/httpclient.component"

//Import HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";

    @NgModule({
      declarations:[
        AppComponent,
        HttpclientComponent
      ],

      //Add HttpCLientModule in the imports
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ],
      //Add HttpclientService in providers
      providers: [HttpclientService],
      bootstrap: [AppComponent]
    })

    export class AppModule{}