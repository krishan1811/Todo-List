import InputWithButton from "./components/Todo";
import Task from "./components/Task";

function App() {
  return (
    <>
      <h2 className="flex justify-center my-8 font-medium	text-6xl">
        To-do List
      </h2>
      <InputWithButton></InputWithButton>
      <Task />
    </>
  );
}

export default App;
