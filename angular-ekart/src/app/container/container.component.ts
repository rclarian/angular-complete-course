import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {NgFor, NgForOf, CommonModule} from "@angular/common";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, NgForOf, ProductListComponent, ProductDetailComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];

  //2nd-#28 parent
  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }
}
