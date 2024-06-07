import Task from "../models/task.model.js";

const getTask = async (req, res) => {
  await Task.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err, "Error aa get request me"));
};

const postTask = async (req, res) => {
  const add = req.body.inTask;
  await Task.create({ task: add })
    .then((result) => res.status(201).json(result))
    .catch((err) => console.log(err, "Post request me error ho gya"));
};

const putTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate({ _id: id }, { status: true })
    .then((result) => res.status(202).json(result))
    .catch((err) => console.log(err, "error aa gaya update karte time"));
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((err) => console.log(err, "delete me error ho gya"));
};

export { getTask, postTask, putTask, deleteTask };
