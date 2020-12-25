import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { OriginUploaderComponent } from './origin-uploader/origin-uploader.component';
import { NgxUplodaerComponent } from './ngx-uplodaer/ngx-uplodaer.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginUploaderComponent,
    NgxUplodaerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    FilePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
