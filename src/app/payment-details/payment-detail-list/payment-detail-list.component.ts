import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service : PaymentDetailService,public toast : ToastrService,private _router:Router) { }

  enableEdit = true;
  ngOnInit() {
    this.service.refreshList();
  }

  onDelete(cardID){
    const i = this.service.paymentList.findIndex(x=>x.PMId == cardID)
    this.service.paymentList.splice(i,1)
    this.service.deletePaymentItem(cardID).subscribe(
      () => {
        this.toast.success('Deleted Successfully');

        this.service.refreshList();
        
      },
      (err) => {
        console.log('Error Occured'+err);
      }
    );
  }

  onUpdate(list){
    this.enableEdit = true;
    this._router.navigate(['/edit-payment',list]);
    // this.service.updatePaymentDetails(list).subscribe(
    //   () => {
    //     this.toast.success('Updated Successfully');

    //     this.service.refreshList();
        
    //   },
    //   (err) => {
    //     console.log('Error Occured'+err);
    //   }
    // );
  }

  populateForm(list)
  {
    this.service.formData = list;
  }



}
