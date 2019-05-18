import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PaymentDetailService {
  formData : PaymentDetail;
  paymentList : PaymentDetail[];

  readonly rootURL ='http://localhost:1303/api/Payment';
  
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

}
