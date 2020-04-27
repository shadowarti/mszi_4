class Core {
  constructor(taskTime = 0) {
    this.taskTime = taskTime
  }
  solveTask() {
    this.taskTime--
  }
}

module.exports = Core
