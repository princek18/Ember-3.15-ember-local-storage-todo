import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking'
import {action} from '@ember/object'

export default class IndexController extends Controller {
  @tracked todo = "";
  @tracked todos = [];

  @action handleSubmit(e){
    e.preventDefault();
    this.todos.pushObject(this.todo);
    this.todo = "";
  }

  @action deleteTodo(e){
    let remain = this.todos.filter((todo) => todo !== e);
    this.todos = remain;
  }

  @action update(e){
    this.todo = e.target.value;
  }
}
