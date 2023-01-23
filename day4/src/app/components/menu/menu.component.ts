import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from 'src/app/models/imenu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemId: number;
  menu: IMenuItem[];
  constructor(public activatedRoute: ActivatedRoute) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    ///////////////////////////////////////////////////////
    this.menu = [
      {
        img: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
        name: 'Burger',
        description: 'Lorem ipsum dolor sit amet consectetur sit consectetur.',
        price: 15,
      },
      {
        img: 'https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/3:4/w_1998,h_2665,c_limit/ba-recipe-pasta-al-limone.jpg',
        name: 'Lemon Pasta',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 40,
      },
      {
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
        name: 'Pizza',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 35,
      },
      {
        img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-chicken-potato-soup%2Fchicken-potato-soup-2',
        name: 'Creamy Chicken Soup',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 25,
      },
      {
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg?resize=768,574',
        name: 'Red Sauce Pasta',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 45,
      },
    ];
  }
  ngOnInit(): void {}
}
