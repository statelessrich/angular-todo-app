import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from '../shared/models/item';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
    // Event to output to parent todo.component.
    @Output() itemAdded = new EventEmitter(); 
    newItem: Item;
    
    addItem() {
        console.log(this.newItem.text);
        
        // Send new item to parent component.
        this.itemAdded.emit({item: this.newItem});
        
        // Reset new item model.
        this.newItem = new Item();
    }

    constructor() { }

      ngOnInit() {
        this.newItem = {
            text: '',
            done: false
        }
      }
}
