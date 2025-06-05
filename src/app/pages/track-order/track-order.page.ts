import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
  standalone: false,
})
export class TrackOrderPage implements OnInit {
  constructor() {}
  orderListing = [
    {
      orderId: 'Order#: 999012',
      orderDate: 'Pankha Chair',
      delivery: 'Estimated Delivery on 22 May',
      img: '../../../assets/products/chai-one.jpg',
    },
  ];
  trackSteps = [
    {
      label: 'Order Placed',
      desc: 'We have received your order on 20-may-2025',
      icon: 'cart-outline',
    },
    {
      label: 'Order Confirmed',
      desc: 'Your order is confirmed on 20-may-2025.',
      icon: 'checkmark-done-outline',
    },
    {
      label: 'Order Packed',
      desc: 'Your order is packed.',
      icon: 'cube-outline',
    },
    {
      label: 'Ready to Ship',
      desc: 'Your order is ready for dispatch.',
      icon: 'rocket-outline',
    },
    {
      label: 'Out for Delivery',
      desc: 'Your order is On the way to you.',
      icon: 'bicycle-outline',
    },
  ];

  currentStep = 2;
  ngOnInit() {}
}
