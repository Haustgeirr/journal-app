const { Task } = require('../src/database/models/taskModel');

const setupDatabase = async () => {
  await Task.deleteMany();
};

export { setupDatabase };
