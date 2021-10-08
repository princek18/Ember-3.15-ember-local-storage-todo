import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object'
import {inject as service} from '@ember/service';

export default class TodosComponentComponent extends Component {
  @service store;
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
