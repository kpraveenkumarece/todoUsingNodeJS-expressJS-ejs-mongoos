const Task = require('../models/task');

// controller for home page
exports.home = async (req, res) => {
  try {
    // fetching data from database
    const tasks = await Task.find({});
    res.render('home', {
      title: 'Doo Itt!',
      todo_list: tasks,
    });
  } catch (err) {
    console.log('Error in fetching list from db:', err);
    res.status(500).send('Internal server error');
  }
};

// controller for adding task
exports.add = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    console.log(task);
    res.redirect('/');
  } catch (err) {
    console.log('Error in creating the list:', err);
    res.status(500).send('Internal server error');
  }
};

// controller for deleting task
exports.delete = async (req, res) => {
  const ids = Object.keys(req.query);
  try {
    // delete all tasks with the given ids
    await Task.deleteMany({ _id: { $in: ids } });
    res.redirect('back');
  } catch (err) {
    console.log('Error in deleting the item:', err);
    res.status(500).send('Internal server error');
  }
};
