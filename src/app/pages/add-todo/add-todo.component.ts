import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  // IGNORE CODE
  @Output() dataEvent = new EventEmitter<any>();

  db: any[] = [
    {
      //row
      title: 'test', //column
      content: 'test',
      checkbox: 'test',
    },
  ]; // table // local variable => make it global by storing in App Component

  popupVisible = 'hide-popup';

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
    var newtitle: any = document.getElementById("popup-title");
    var newcontent: any = document.getElementById("popup-content");

    this.db.map((row: any, index) => {
      if (title === row.title) {
        this.db[index].title = newtitle.value;
        this.db[index].content = newcontent.value;
      }
    
    });
   this.popupVisible = 'hide-popup';
    // close popup
    // popclass = hide
  }
  handledelete(title: string) {
    console.log('Delete Logic for ', title);

    // loop over DB
    this.db.map((row: any, index) => {
      console.log(index);
      if (title === row.title) this.db.splice(index, 1);
    });
  }

  showPopup() {
    this.popupVisible = 'show-popup';
  }

  hidePopup() {
    this.popupVisible = 'hide-popup';
  }
}
