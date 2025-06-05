import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  constructor() {}
  profileData = [
    {
      icon: 'bag-handle-outline',
      name: 'Upcoming Orders',
      num: 6,
      link: '/my-orders',
    },
    {
      icon: 'location-outline',
      name: 'Manage Address',
    },
    {
      icon: 'gift-outline',
      name: ' Offer Zone ',
      link: '/offers-zone',
    },
    {
      icon: 'help-circle-outline',
      name: ' Help & Support ',
      link: '/support',
    },
  ];
}
