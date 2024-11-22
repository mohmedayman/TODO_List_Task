
# To-Do List App

A simple to-do list application that allows users to add, edit, delete, and mark tasks as completed. The app uses a RESTful API for task management and provides a clean, interactive UI with task completion features.

## Features

- **Add tasks**: Add new tasks to the list.
- **Edit tasks**: Edit the task name after it's added.
- **Delete tasks**: Remove tasks from the list.
- **Complete tasks**: Mark tasks as completed, with visual feedback.
- **Responsive design**: Optimized for both desktop and mobile views.

## Setup Instructions

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: Download and install Node.js from [here](https://nodejs.org/).
- **npm**: npm is packaged with Node.js. If you have Node.js installed, npm will be available.

You will also need a backend API running (for example, `localhost:5000/tasks`) to store and manage tasks. If you don't have a backend set up, see the *Backend Setup* section below.

### Clone the Repository

Clone the repository to your local machine.

### Install Dependencies

This project uses **Font Awesome** for UI components, and **Fetch API** for backend communication.

To install the required dependencies, run the following command:

```bash
npm install
```

This will install the necessary npm packages defined in the `package.json` file.

### Run the Application

Once the dependencies are installed, you can run the application locally with:

```bash
npm start
```

This command will start the app and open it in your default web browser at `http://localhost:5000`.

## Design Choices

### Frontend Design

- **Task management UI**: The task list is displayed in a simple, readable format. Tasks can be marked as completed with a checkbox, and each task has a button for editing and deleting.
- **Icons**: The use of Font Awesome icons (`<i class="fas fa-pen"></i>` for editing and `<i class="fas fa-trash"></i>` for deleting) helps create a clear and intuitive interface.

### API Design

- **RESTful API**: The application interacts with a backend using RESTful methods to fetch, create, update, and delete tasks. The API endpoints are:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update a task (mark as completed or edit the name).
  - `DELETE /tasks/:id`: Delete a task.
- **State Management**: The task completion state is managed both on the client-side and server-side to ensure consistency between the UI and the backend.

### Styling

- **Responsive Design**: The app uses simple CSS and Flexbox to ensure the layout works well on both desktop and mobile devices.
- **Task completion**: When a task is marked as completed, a line-through effect is applied to visually indicate that the task is done.

---
