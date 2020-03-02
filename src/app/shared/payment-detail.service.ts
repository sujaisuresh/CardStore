import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentDetailService {
  formData : PaymentDetail;
  paymentList : PaymentDetail[];

  readonly rootURL ='https://cardstorev2.azurewebsites.net/api/Payment';
  
  constructor(private http: HttpClient) { 

  }

  postPaymentDetails(formData:PaymentDetail)
  {
    return this.http.post(this.rootURL +'/SavePayment' ,formData);

  }

  refreshList()
  {
    return this.http.get(this.rootURL +'/GetAllPayments')
    .toPromise()
    .then(result => this.paymentList = result as PaymentDetail[]);

  }

  getPaymentDetailById(id)
  {
    return this.http.get(this.rootURL +'/GetPersonById/'+id)
    .toPromise()
    .then(result => this.paymentList = result as PaymentDetail[]);

  }

  deletePaymentItem(cardID) :Observable<void>
  {
    return this.http.delete<void>(this.rootURL +'/DeletePaymentDetails?cardID='+cardID);
  }

  updatePaymentDetails(formData : PaymentDetail) :Observable<void>
  {
    return this.http.put<void>(this.rootURL +'/UpdatePaymentDetails',formData);
  }

}
