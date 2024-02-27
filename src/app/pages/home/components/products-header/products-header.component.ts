import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit{
  
  @Output() columnsCountChange = new EventEmitter<number>();
  sort= 'desc';
  itemsShowCount = 12;
  
  ngOnInit(): void {
    
  }

  onSortUpdate(newSort:string): void{
    this.sort = newSort;
  }

  onItemsUpdated(count:number) :void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum:number): void{
    this.columnsCountChange.emit(colsNum);
  }

}
