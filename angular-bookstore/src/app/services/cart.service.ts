import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    let alreadyExistsInCar: boolean = false;
    let existinCartItem: CartItem = undefined;

    if(this.cartItems.length > 0){
      existinCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      alreadyExistsInCar = (existinCartItem != undefined)
    }

    if(alreadyExistsInCar){
      existinCartItem.quantity++;
    }else{
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice();

  }
  calculateTotalPrice() {
   let totalPriceValue: number = 0;
   let totalQuantityValue: number = 0;

   for(let currentCartItem of this.cartItems){
     totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
     totalQuantityValue += currentCartItem.quantity;
   }

   console.log(`toatl price: ${totalPriceValue}, total quantity: ${totalQuantityValue}`);

   this.totalPrice.next(totalPriceValue);
   this.totalQuantity.next(totalQuantityValue);

  }
}
