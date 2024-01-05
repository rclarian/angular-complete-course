import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //1.Create an event, (1st-#28 child)
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argument of @ViewChild()
  //1. read = use it to read the different token from the queried elements.
  //2. static = determines when the query is resolved.
  //TRUE - is when the view is initialized (before the first change detection) for the first time.
  //FALSE - if you want it to be resolved after every change detection
  
  //@ViewChild('searchInput', {static: true}) searchInputEl: ElementRef; //example code with static
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {
    
  }

  updateSearchText(){
    //this.searchText = event.target.value;
    //console.log(inputEL.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
