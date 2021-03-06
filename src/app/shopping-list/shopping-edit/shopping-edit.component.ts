import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output('ingredientAdded') ingredientAddedEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addClicked () {
    var name = this.nameInput.nativeElement.value;
    var amountString = this.amountInput.nativeElement.value;
    var amount = parseInt(amountString, null);
    this.ingredientAddedEmitter.emit(new Ingredient(name, amount));
  }

}
