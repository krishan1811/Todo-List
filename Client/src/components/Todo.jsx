import { useState } from "react";
import axios from "axios";

function InputWithButton() {
  const [inTask, setInTask] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    // console.log(inTask);
    await axios
      .post("http://localhost:7500/api/task/post", { inTask })
      .then((result) => console.log(result), window.location.reload)
      .catch((err) => console.log("Post me error ho gya", err));
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <input
            type="text"
            className="py-2 px-4 rounded-l-md focus:outline-none focus:border-blue-500"
            placeholder="Enter task"
            value={inTask}
            onChange={(e) => setInTask(e.target.value)}
          />
          <button
            type="submit"
            onClick={handlePost}
            className="py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default InputWithButton;
