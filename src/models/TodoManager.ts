import {Todo, priorityTodo} from './Todo';

export class TodoManager  {
    getTodoById(id: number) {
        throw new Error('Method not implemented.');
    }
    private todos: Todo[] = [];
    private nextId: number = 1;

    addTodo(title: string, description: string, priority?: number): void {
       let newTodo: Todo;
       if(priority!==undefined){
              newTodo = new priorityTodo(this.nextId, title, description, priority);
       }
       else {
                newTodo = new Todo(this.nextId, title, description);
       }
         this.todos.push(newTodo);
         this.nextId++;
    }


    getTodos(): Todo[] {
        return this.todos;
    }

    makeTodoAsCompleted(id: number): boolean {
        console.log("Searching for ID:", id, "in todos:", this.todos);
        
        const todo = this.todos.find(todo => todo.id === id);
        console.log("Found Todo:", todo);
    
        if (todo) {
            todo.markAsCompleted();
            return true;
        }
        return false;
    }
    
    

    deleteTodo(id: number): boolean {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) return false;
        this.todos.splice(index, 1);
        return true;
    }

   
}
