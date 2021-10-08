import Controller from '@ember/controller';
import {tracked} from'@glimmer/tracking';
import {action} from '@ember/object'

export default class TodosController extends Controller {
  @tracked todo = "";

  @action handleAction(e){
    e.preventDefault();
    let todo = this.store.createRecord('todo', {title: this.todo});
    todo.save();
    this.todo = "";
  }

  @action deleteAction(todoD){
    let todo = this.store.peekRecord('todo', todoD.id);
    todo.deleteRecord();
    todo.save();
  }

  @action update(e){
    this.todo = e.target.value;
  }
}
