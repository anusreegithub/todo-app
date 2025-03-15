# Todo List Application

This is a **TypeScript-based Todo List Application** following the **MVC architecture**. The frontend is built using **Handlebars (HBS)**, and the backend is structured with **Express.js**.

## Features

- Add, update, and delete todos
- Mark todos as completed
- Categorize todos based on priority (High, Medium, Low)
- Separate views for completed and incomplete todos
- Uses **OOP principles** like Encapsulation, Inheritance, and Polymorphism

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Frontend:** Handlebars (HBS), HTML, CSS
- **Architecture:** MVC (Model-View-Controller)

## Folder Structure
```
📂 todo-app
│-- 📂 public
│   │-- 📂 style.css
│-- 📂 src
│   │-- 📂 controllers
│   │   │-- todoController.ts
│   │-- 📂 models
│   │   │-- Todo.ts
│   │-- 📂 routes
│   │   │-- todoRoutes.ts
│   │-- 📂 views
│   │-- 📂 layouts
|   |-- |-- todoRoutes.ts
│   │   │-- index.hbs
│   │-- app.ts
│-- package.json
│-- tsconfig.json
```

## Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/anusreegithub/todo-app.git
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Compile TypeScript
```sh
npm run build
```

### 4️⃣ Start the Application
```sh
npm start
```

### 5️⃣ Open in Browser
```
http://localhost:3000
```

## MVC Architecture

- **Model (`Todo.ts`, `TodoManager.ts`)**: Defines the `Todo` class and manages todos.
- **View (`index.hbs`)**: Displays todos using Handlebars.
- **Controller (`todoController.ts`)**: Handles user requests and logic.
- **Routes (`todoRoutes.ts`)**: Defines API endpoints.

## Object-Oriented Programming (OOP) Implementation

### ✅ Encapsulation
- The `Todo` class encapsulates `id`, `title`, `description`, `completed` properties and methods.

### ✅ Inheritance
- `PriorityTodo` extends `Todo` to add `priority` levels.

### ✅ Polymorphism
- `markAsCompleted()` is overridden in `PriorityTodo` to include custom behavior.

## API Endpoints
| Method | Endpoint      | Description       |
|--------|-------------|------------------|
| GET    | `/`         | Fetch all todos |
| POST   | `/add`      | Add new todo |
| PATCH  | `/complete/:id` | Mark todo as completed |
| DELETE | `/delete/:id` | Delete a todo |

