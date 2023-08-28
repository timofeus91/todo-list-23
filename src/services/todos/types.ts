export type TTodosItem = {
  id: string;
  title: string;
  text: string;
  active: boolean;
  date: Date;
};

export type TTodosSlice = {
  preloader: boolean;
  todos: TTodosItem[] | null;
};
