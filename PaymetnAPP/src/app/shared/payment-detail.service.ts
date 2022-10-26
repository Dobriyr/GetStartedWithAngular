import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
import { PaymentDetail } from './payment-detail.model';
@Injectable
  (
    {
      providedIn: 'root'
    }
  )
export class PaymentDetailService {

  constructor(private http: HttpClient) {

  }
  readonly baseUrl = 'https://localhost:7238/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[] | undefined;

  postPaymentDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
   putPaymentDetail() {
     return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
   }
  deletePaypentDetail(id: number)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
