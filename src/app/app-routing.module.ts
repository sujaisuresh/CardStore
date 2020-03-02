import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentDetailListComponent} from './/payment-details/payment-detail-list/payment-detail-list.component'
import { EditPaymentComponent } from './edit-payment/edit-payment.component';

const appRoutes: Routes = [
  // { path: 'paymentdetails-list', component: PaymentDetailListComponent },
  // { path: 'edit-payment', component: EditPaymentComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
