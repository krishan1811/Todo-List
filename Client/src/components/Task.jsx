import { useState, useEffect } from "react";
import Icon from "react-crud-icons";
import axios from "axios";

export default function Task() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7500/api/task")
      .then((result) => {
        setData(result.data), console.log(result.data);
      })
      .catch((err) => console.log("get megadabad h daya ", err));
  }, []);

  const handleUpdate = (id) => {
    axios
      .put("http://localhost:7500/api/task/update/" + id)
      .then((result) => console.log(result))
      .catch((err) =>
        console.log("Update ke saath kuch galat ho gya bhai ", err)
      );
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:7500/api/task/delete/" + id)
      .then((result) => console.log(result))
      .catch((error) => console.log("Delete me bhi erroraa gaya ", error));
  };
  return (
    <div className="flex flex-col items-center mt-8">
      {data.length === 0 ? (
        <h2>No Recordes</h2>
      ) : (
        data.map((info) => (
          <div
            className="flex justify-between w-80 bg-red-300 p-1 my-2 hover:bg-red-400"
            key={info._id}
          >
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => handleUpdate(info._id)}
              // {info.status === true && {className={"line-trough"}}}
            />
            <div
              className={`${
                info.status === true ? "line-through" : undefined
              } py-4 text-xl`}
              key={info._id}
            >
              {info.task}
            </div>
            <div className="">
              <Icon
                name="delete"
                tooltip="delete"
                theme="light"
                size="tiny"
                onClick={() => handleDelete(info._id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
