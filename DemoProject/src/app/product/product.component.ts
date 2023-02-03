import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      name: 'Soccer Ball',
      description: 'High quality soccer ball with a durable exterior and a textured surface for improved grip.',
      image: '/assets/images/ball.jpeg',
      price: 49.99
    },
    {
      name: 'Adidas X Speedportal.3 Laceless firm ground boots',
      description: 'Unlock multidimensional speed in adidas X Speedportal. Additional forefoot studs on the lightweight outsole of these soccer cleats ensure rapid reactions on firm ground.',
      image: '/assets/images/cleats.jpeg',
      price: 99.99
    },
    // Add more products here
  ];
}
