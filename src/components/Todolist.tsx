import useFetcher from '../hook/useFetcher';

interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const todoList: TodoModel[] = useFetcher(
    'https://jsonplaceholder.typicode.com/todos'
  );

  return (
    <>
      <h2>Todo</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};
