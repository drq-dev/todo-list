import { TodoList } from "./components/TodoList";

export default function App() {
  //   display: flex;
  // place-content: center;
  // justify-content: center;
  // align-items: center;
  return (
    <main className="flex justify-center items-center min-w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <TodoList></TodoList>
    </main>
  );
}
