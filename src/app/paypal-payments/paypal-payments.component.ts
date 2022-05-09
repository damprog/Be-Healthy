import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

declare var paypal: any;

  @Component({
    selector: 'app-paypal-payments',
    templateUrl: './paypal-payments.component.html',
    styleUrls: ['./paypal-payments.component.css']
  })
  export class PaypalPaymentsComponent implements OnInit {
    @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

    product = {
      price: 17.99,
      description: 'Pakiet podstawowy oferuje spersonalizowany plan treningowy',
      img: '../../assets/img/main-bg.jpg'
    }

    paidFor = false;

    constructor(){}

    ngOnInit() {
      paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement)
    }

  }

    