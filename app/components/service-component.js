import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {action} from '@ember/object'
import {tracked} from '@glimmer/tracking'

export default class ServiceComponentComponent extends Component {
  @service todoService;
  @tracked todo = "";

  @action handleAction(e){
    e.preventDefault();
    this.todoService.addTodo(this.todo);
    this.todo = "";
  }
  @action deleteAction(todo){
    this.todoService.deleteTodo(todo);
  }
  @action update(e){
    this.todo = e.target.value;
  }
}
