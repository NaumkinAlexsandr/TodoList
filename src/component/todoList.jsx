import { useSelector } from "react-redux";
import { TodoItem } from "./todoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} index={index} {...todo} />
      ))}
    </ul>
  );
};

export { TodoList };
