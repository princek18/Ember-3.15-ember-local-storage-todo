import Service from '@ember/service';
import {tracked} from '@glimmer/tracking'

export default class TodoServiceService extends Service {
  @tracked todos = [];

  addTodo(todo){
    this.todos.pushObject(todo);
  }
  deleteTodo(todoD){
    this.todos = this.todos.filter((todo) => todo !== todoD);
  }
}
