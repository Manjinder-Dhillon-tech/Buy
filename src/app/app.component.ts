import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  currentRoute: string = '';
  @ViewChild('logoutModal', { static: false }) logoutModal!: IonModal;

  constructor(private router: Router, private menu: MenuController) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.replace(/^\//, '');
      }
    });
  }
  profileData = [
    {
      icon: 'gift-outline',
      name: ' Offer Zone ',
      link: '/offers-zone',
    },
    {
      icon: 'bag-handle-outline',
      name: 'Upcoming Orders',
      link: '/my-orders',
    },
    {
      icon: 'help-circle-outline',
      name: ' Help & Support ',
      link: '/support',
    },
    {
      icon: 'log-out-outline',
      name: 'Logout ',
    },
  ];

  categories = [
    {
      name: 'Beds',
    },
    {
      name: 'Chairs',
    },
    {
      name: 'Sofas',
    },
    {
      name: 'Cabinets',
    },
  ];

  brands = [
    {
      name: 'Edra',
    },
    {
      name: 'Platfrom',
    },
    {
      name: 'Kartel',
    },
    {
      name: 'Herman Miller',
    },
  ];
  closeMenu() {
    this.menu.close();
  }
  closeMenuAndModal() {
    this.logoutModal.dismiss();
    this.menu.close();
  }
  onProfileItemClick(data: any) {
    if (data.name && data.name.trim().toLowerCase() === 'logout') {
      this.logoutModal.present();
    } else {
      this.closeMenu();
    }
  }
  async logoutAndRedirect() {
    await this.logoutModal.dismiss();
    await this.menu.close();
    this.router.navigate(['/login']);
  }
}
