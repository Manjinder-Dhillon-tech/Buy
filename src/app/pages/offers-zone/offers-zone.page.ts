import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-zone',
  templateUrl: './offers-zone.page.html',
  styleUrls: ['./offers-zone.page.scss'],
  standalone: false,
})
export class OffersZonePage implements OnInit {
  constructor() {}
  products = [
    {
      name: 'Pankha Chair',
      oldPrice: 1000,
      image: '../../assets/products/chai-one.jpg',
      link: '/product-detail',
      off: '40%',
    },
    {
      name: 'Ramni Chair',
      oldPrice: 1700,
      image: '../../assets/products/chair-two.jpg',
      link: '',
      off: '10%',
    },
    {
      name: 'Decoration',
      oldPrice: 4500,
      image: '../../assets/products/flower.jpg',
      link: '',
      off: '20%',
    },
    {
      name: 'Table Lamp',
      oldPrice: 85000,
      image: '../../assets/products/chair-three.jpg',
      link: '',
      off: '10%',
    },
    {
      name: 'Sofa Set',
      oldPrice: 1500,
      image: '../../assets/products/chair-four.jpg',
      link: '',
      off: '70%',
    },
    {
      name: 'T Shirt',
      oldPrice: 4000,
      image: '../../assets/products/t-shirt.jpg',
      link: '',
      off: '40%',
    },
    {
      name: 'Shoes',
      oldPrice: 2700,
      image: '../../assets/products/shoes.jpg',
      link: '',
      off: '10%',
    },
    {
      name: 'Wallet',
      oldPrice: 1700,
      image: '../../assets/products/football.jpg',
      link: '',
      off: '50%',
    },
    {
      name: 'Football',
      oldPrice: 2000,
      image: '../../assets/products/wallet.jpg',
      link: '',
      off: '30%',
    },
    {
      name: 'Purse',
      oldPrice: 5700,
      image: '../../assets/products/purse.jpg',
      link: '',
      off: '10%',
    },
  ];
  getDiscountedPrice(product: any): number {
    const discount = parseFloat(product.off) / 100;
    return Math.round(product.oldPrice * (1 - discount));
  }
  ngOnInit() {}
}
