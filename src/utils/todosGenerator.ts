import { TTodosItem } from '../services/todos/types';

const generateTodoItem = (title: string): TTodosItem => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    title: title,
    active: true,
    date: new Date(),
    text: 'Its very big text for text in TodosItem',
  };
};

export const generateTodosList = (count: number): TTodosItem[] => {
  const todos: TTodosItem[] = [];

  for (let i = 0; i < count; i++) {
    todos.push(generateTodoItem(`Task ${i + 1}`));
  }

  return todos;
};
