const random = require("./utils")
const Core = require("./Core")

const tasks = new Array()

const firstCore = new Core()
const secondCore = new Core()

const chance = 99
const maxLength = 100000

console.time("Система умерла за")
while (tasks.length < maxLength) {
  if (random(100) < chance) {
    tasks.push(random(7))
  }
  if (firstCore.taskTime === 0) {
    let coreOne = tasks.shift()
    if (coreOne !== undefined) {
      firstCore.taskTime = coreOne
    }
  } else {
    firstCore.solveTask()
  }
  if (secondCore.taskTime === 0) {
    let firstInQueue = tasks.shift()
    if (firstInQueue !== undefined) {
      secondCore.taskTime = firstInQueue
    }
  } else {
    secondCore.solveTask()
  }
}

console.timeEnd("Система умерла за")
