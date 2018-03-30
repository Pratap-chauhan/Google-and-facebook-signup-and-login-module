import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.route';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WINDOW_PROVIDERS, WINDOW } from "../window.service";
import { FooterComponent } from './footer/footer.component';
import { GoogleIntergationService } from './services/google-intergation.service';
import { ApicallService } from './services/apicall.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginpermissionsService } from './services/loginpermissions.service';
import {Http, Headers, HttpModule, URLSearchParams} from '@angular/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    HttpModule
  ],
  providers: [ WINDOW_PROVIDERS ,GoogleIntergationService,ApicallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
