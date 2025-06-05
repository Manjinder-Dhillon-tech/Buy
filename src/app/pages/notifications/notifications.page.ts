import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage implements OnInit {
  notifications = [
    {
      img: '../../../assets/notification/congs.png',
      title: 'Cart Alert!',
      description:
        'Woohoo! Your cart is calling.Checkout the latest goodies waiting for you!.',
      time: 'just now',
    },
    {
      img: '../../../assets/notification/bags.png',
      title: 'New Deals!',
      description:
        'New deals just dropped!Dive into your shoping spree and grab the best offers before they vanish!',
      time: '5 minutes ago',
    },
    {
      img: '../../../assets/notification/star.png',
      title: 'Back into stock!',
      description:
        'Guess what?Your favorite team is back in stock, Time to treat yourself!',
      time: 'yesterday',
    },
    {
      img: '../../../assets/notification/cart.png',
      title: 'Checkout Now!',
      description:
        'Ready to checkout?Your cart misses you!Complete your purchase before the magin ends.',
      time: '3 days ago',
    },
    {
      img: '../../../assets/notification/fire.png',
      title: 'Cart Alert!',
      description:
        'Woohoo! Your cart is calling.Checkout the latest goodies waiting for you!.',
      time: '5 days ago',
    },
    {
      img: '../../../assets/notification/star.png',
      title: 'Back into stock!',
      description:
        'Guess what?Your favorite team is back in stock, Time to treat yourself!',
      time: 'yesterday',
    },
    {
      img: '../../../assets/notification/cart.png',
      title: 'Checkout Now!',
      description:
        'Ready to checkout?Your cart misses you!Complete your purchase before the magin ends.',
      time: '3 days ago',
    },
    {
      img: '../../../assets/notification/fire.png',
      title: 'Cart Alert!',
      description:
        'Woohoo! Your cart is calling.Checkout the latest goodies waiting for you!.',
      time: '5 days ago',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
