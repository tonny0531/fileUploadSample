import { OriginUploaderComponent } from './origin-uploader/origin-uploader.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxUplodaerComponent } from './ngx-uplodaer/ngx-uplodaer.component';

const routes: Routes = [
  { component: OriginUploaderComponent, path:'origin'},
  { component: NgxUplodaerComponent, path:'ngx'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
