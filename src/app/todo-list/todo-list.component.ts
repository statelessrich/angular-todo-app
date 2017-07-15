import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../shared/models/item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    // Get items from parent todo.component.
    @Input() items;

    constructor() { }

    ngOnInit() {
        console.log(this.items);
    }

    deleteItem(item) {
        let index: number = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }      
    }
}
