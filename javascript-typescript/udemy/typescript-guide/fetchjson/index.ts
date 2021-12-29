import axios from "axios";

export interface ITodoModel {
  //   userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data as ITodoModel;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `
          The Todo with Id: ${id}
          Title: ${title}
          finished: ${completed}
          `
  );
};
