import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  // IGNORE CODE
  @Output() dataEvent = new EventEmitter<any>();

  db: any[] = []; // table // local variable => make it global by storing in App Component

  popupVisible = 'hide-popup';

  submitForm() {
    var form: any = document.getElementById('add-form');
    var title: any = document.getElementById('todo-title');
    var content: any = document.getElementById('todo-content');
    var checkbox: any = document.getElementById('todo-checkbox');

    this.db.push({
      //row
      id: this.db.length + 1,
      title: title.value, //column
      content: content.value,
      checkbox: checkbox.value,
    });

    console.log(this.db);
  }

  handleupdate(id: string) {
    console.log('Update Logic');
    var newtitle: any = document.getElementById('popup-title');
    var newcontent: any = document.getElementById('popup-content');

    console.log(newtitle.value)
    console.log(newcontent.value)

    this.db.map((row: any, index) => {
      if (id === row.id) {
        this.db[index].title = newtitle.value;
        this.db[index].content = newcontent.value;
        this.popupVisible = 'hide-popup';
        return;
      }
    });

    // close popup
    // popclass = hide
  }
  handledelete(id: string) {
    console.log('Delete Logic for ', id);

    // loop over DB
    this.db.some((row: any, index) => {
      console.log(index);
      if (id === row.id) {
        console.log('L71');
        this.db.splice(index, 1);
        return;
      }
    });
  }

  showPopup() {
    this.popupVisible = 'show-popup';
  }

  hidePopup() {
    this.popupVisible = 'hide-popup';
  }
}
