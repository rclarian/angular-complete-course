import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //name:string = "John Doe";
  addToCart:number = 0;
  product = {
    name: 'iPhone 13',
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any) {
    //this.name = event.target.value;
  }

  decrementCartValue() {
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }

}
