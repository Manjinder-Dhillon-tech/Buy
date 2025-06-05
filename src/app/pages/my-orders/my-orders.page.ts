import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
  standalone: false,
})
export class MyOrdersPage implements OnInit {
  constructor() {}
  orderListing = [
    {
      orderId: 'Order#: 999012',
      orderDate: '20-may-2025, 3:00 PM',
      delivery: 'Estimated Delivery on 22 May',
      img: '../../../assets/products/chai-one.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 888011',
      orderDate: '23-may-2025, 1:00 PM',
      delivery: 'Estimated Delivery on 24 May',
      img: '../../../assets/products/chair-two.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 779013',
      orderDate: '25-may-2025, 02:00 AM',
      delivery: 'Estimated Delivery on 27 May',
      img: '../../../assets/products/chair-three.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 666015',
      orderDate: '30-may-2025, 6:00 PM',
      delivery: 'Estimated Delivery on 04 June',
      img: '../../../assets/products/flower.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 999012',
      orderDate: '20-may-2025, 3:00 PM',
      delivery: 'Estimated Delivery on 22 May',
      img: '../../../assets/products/chai-one.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 888011',
      orderDate: '23-may-2025, 1:00 PM',
      delivery: 'Estimated Delivery on 24 May',
      img: '../../../assets/products/chair-two.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 779013',
      orderDate: '25-may-2025, 02:00 AM',
      delivery: 'Estimated Delivery on 27 May',
      img: '../../../assets/products/chair-three.jpg',
      link: '/track-order',
    },
    {
      orderId: 'Order#: 666015',
      orderDate: '30-may-2025, 6:00 PM',
      delivery: 'Estimated Delivery on 04 June',
      img: '../../../assets/products/flower.jpg',
      link: '/track-order',
    },
  ];

  ngOnInit() {}
}
