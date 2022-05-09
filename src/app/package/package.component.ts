import { Component, OnInit } from '@angular/core';
import { PaypalPaymentsComponent } from '../paypal-payments/paypal-payments.component';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Witajcie"
}
