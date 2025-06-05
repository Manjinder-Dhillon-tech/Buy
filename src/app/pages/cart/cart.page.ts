import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
  standalone: false,
})
export class CartPage {
  constructor(private menu: MenuController) {}
  cartData = [
    {
      name: 'Pankha Chair',
      price: 1000,
      image: '../../assets/products/chai-one.jpg',
    },
    {
      name: 'Table Lamp',
      price: 85000,
      image: '../../assets/products/chair-three.jpg',
    },
    {
      name: 'Decoration',
      price: 45000,
      image: '../../assets/products/flower.jpg',
    },
  ];
}
