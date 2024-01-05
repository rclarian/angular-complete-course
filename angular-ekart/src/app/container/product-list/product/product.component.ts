import { Component, Input } from '@angular/core';
import {NgFor, NgForOf, CommonModule} from "@angular/common";
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
