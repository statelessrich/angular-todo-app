import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/item';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
    items: Item[];
    
    constructor() { }

      ngOnInit() {
        this.items = [];
      }
    
      onItemAdded(event) {
        this.items.push(event.item);
      }
}
