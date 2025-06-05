import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.page.html',
  styleUrls: ['./product-listing.page.scss'],
  standalone: false,
})
export class ProductListingPage implements OnInit {
  products = [
    {
      name: 'Pankha Chair',
      price: 1000,
      image: '../../assets/products/chai-one.jpg',
      link: '/product-detail',
    },
    {
      name: 'Ramni Chair',
      price: 1700,
      image: '../../assets/products/chair-two.jpg',
      link: '',
    },
    {
      name: 'Decoration',
      price: 4500,
      image: '../../assets/products/flower.jpg',
      link: '',
    },
    {
      name: 'Table Lamp',
      price: 85000,
      image: '../../assets/products/chair-three.jpg',
      link: '',
    },
    {
      name: 'Sofa Set',
      price: 1500,
      image: '../../assets/products/chair-four.jpg',
      link: '',
    },
    {
      name: 'T Shirt',
      price: 4000,
      image: '../../assets/products/t-shirt.jpg',
      link: '',
    },
    {
      name: 'Shoes',
      price: 2700,
      image: '../../assets/products/shoes.jpg',
      link: '',
    },
    {
      name: 'Wallet',
      price: 1700,
      image: '../../assets/products/football.jpg',
      link: '',
    },
    {
      name: 'Football',
      price: 2000,
      image: '../../assets/products/wallet.jpg',
      link: '',
    },
    {
      name: 'Purse',
      price: 5700,
      image: '../../assets/products/purse.jpg',
      link: '',
    },
  ];
  constructor() {}
  ngOnInit() {}
}
