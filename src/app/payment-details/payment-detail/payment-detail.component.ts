import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService,public toast : ToastrService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?:NgForm)
  {
    if(form !=null)
    form.resetForm();

    this.service.formData = {
      PMId : 0,
      CardNumber:'',
      CardOwnerName:'',
      ExpirationDate:'',
      CVV:''

    }
  }

    onSubmit(form:NgForm){
      if(form.value.PMId != null)
      {
        this.service.updatePaymentDetails(form.value).subscribe(
          success => {
            this.toast.success('Payment Details Updated Successfully');
            this.resetform(form);
            this.service.refreshList();
          },
          error => {
            console.log('Error Occured');
          }
        );
      }
      else {
        this.service.postPaymentDetails(form.value).subscribe(
          success => {
            this.toast.success('Payment Details Saved Successfully');
            this.resetform(form);
            this.service.refreshList();
          },
          error => {
            console.log('Error Occured');
          }
        );
      }


    }
  }

