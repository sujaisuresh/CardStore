import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {

  constructor(public service:PaymentDetailService,public toast : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  @Input() editPaymentList ;
  
}
