import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  // IGNORE CODE
  @Output() dataEvent = new EventEmitter<any>();

  db: any[] = []; // table // local variable => make it global by storing in App Component
  submitForm() {
    var form: any = document.getElementById('add-form');
    var title: any = document.getElementById('todo-title');
    var content: any = document.getElementById('todo-content');
    var checkbox: any = document.getElementById('todo-checkbox');

    this.db.push({
      //row
      title: title.value, //column
      content: content.value,
      checkbox: checkbox.value,
    });
    console.log(this.db);

    console.log(34);
    const todoData = {
      //row
      title: title.value, //column
      content: content.value,
      checkbox: checkbox.value,
    };
    this.dataEvent.emit(todoData);
    console.log(40);
  }

  handleupdate(title: string) {
    console.log('Update Logic');
    this.db.map(( row: any, index) => {
      if (title === row.title) 
        this.db[index].title = title + " updated"
      });
    // title + " Updated"
  }
  handledelete(title: string) {
    console.log('Delete Logic for ', title);

    // loop over DB
    this.db.map(( row: any, index) => {
      console.log(title === row.title)
      if (title === row.title) 
        this.db.splice(index,1)
    });
  }
}
