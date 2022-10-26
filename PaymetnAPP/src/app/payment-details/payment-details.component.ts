import { PaymentDetail } from './../shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaypentDetail(id)
        .subscribe(

        res => {
          this.toastr.error("Delete Successfully", 'Payment Detail Register');
          this.service.refreshList();
        },

        err => { console.log(err); }

      );
    }
  }


}
