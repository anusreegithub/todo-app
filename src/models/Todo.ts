export class Todo {
    id:number;
    title:string;
    description:string;
    completed:boolean;

    constructor(id:number, title:string, description:string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    markAsCompleted():void {
        this.completed = true;
    }
}

export class priorityTodo extends Todo {
    priority:number;
    constructor(id:number, title:string, description:string, priority:number) {
        super(id, title, description);
        this.priority = priority;
    }

    markAsCompleted(): void {
        console.log("Priority task completed!");
        super.markAsCompleted(); 
     }
     
}