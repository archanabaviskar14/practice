import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Array<any>=[
   // {name:"Vanilla Cake" , price:4 , description:"Vanilla Fruit Cake with strawberry toppings", imgpath:"assets/images/1.jpeg"},
    //{name:"Fruit Cake" , price:50 , description:"Vanilla Fruit Cake with strawberry toppings", imgpath:"assets/images/2.jpeg"},
    //{name:"Banana Cake" , price:30 , description:"Vanilla Fruit Cake with strawberry toppings", imgpath:"assets/images/3.jpeg"},
    //{name:"Chochlate Cake" , price:100 , description:"Vanilla Fruit Cake with strawberry toppings", imgpath:"assets/images/4.jpeg"}

  ];

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.ps.getAllProducts().subscribe(data=>this.products=data);
  }

  addToCart(index){
    console.log("Added to the cart",this.products[index]);
  }

}
