import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}
  trendingProducts = [
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
  ];
  segments = [
    {
      value: 'first',
      id: 'first',
      name: 'All',
    },
    {
      value: 'second',
      id: 'second',
      name: 'Electronics And Appliances',
    },
    {
      value: 'third',
      id: 'third',
      name: 'Men',
    },
    {
      value: 'fourth',
      id: 'fourth',
      name: 'Sports',
    },
    {
      value: 'fifth',
      id: 'fifth',
      name: 'Women',
    },
  ];
  allProducts = [
    {
      name: 'Pankha Chair',
      price: 1000,
      image: '../../assets/products/chai-one.jpg',
      link: '/product-detail',
    },
    {
      name: 'Sofa Set',
      price: 1500,
      image: '../../assets/products/chair-four.jpg',
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
  ];

  electronicProducts = [
    {
      name: 'Tab',
      price: 33000,
      image: '../../assets/products/tab.jpg',
      link: '/product-detail',
    },
    {
      name: 'Watch',
      price: 4500,
      image: '../../assets/products/wathc.jpg',
      link: '',
    },
    {
      name: 'I Phone',
      price: 85000,
      image: '../../assets/products/i-phone.jpg',
      link: '',
    },
    {
      name: 'Laptop',
      price: 65000,
      image: '../../assets/products/laptop.jpg',
      link: '',
    },
  ];
  menProducts = [
    {
      name: 'T-Shirt',
      price: 4000,
      image: '../../assets/products/t-shirt.jpg',
      link: '/product-detail',
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
      image: '../../assets/products/wallet.jpg',
      link: '',
    },
  ];
  sportProducts = [
    {
      name: 'Football',
      price: 2000,
      image: '../../assets/products/football.jpg',
      link: '/product-detail',
    },
  ];
  womenProducts = [
    {
      name: 'T-Shirt',
      price: 4000,
      image: '../../assets/products/t-shirt.jpg',
      link: '/product-detail',
    },
    {
      name: 'Shoes',
      price: 2700,
      image: '../../assets/products/shoes.jpg',
      link: '',
    },
    {
      name: 'Purse',
      price: 5700,
      image: '../../assets/products/purse.jpg',
      link: '',
    },
  ];
}
