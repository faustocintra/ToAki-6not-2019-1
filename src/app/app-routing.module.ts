import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoLocComponent } from './geo-loc/geo-loc.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';


const routes: Routes = [
  { path: 'geo-loc', component: GeoLocComponent },
  { path: 'leitor-qr-code', component: LeitorQrCodeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
