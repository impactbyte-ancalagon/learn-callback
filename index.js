const logName = name => {
  console.log(`My Name is ${name}`)
}

const logNameCooler = name => {
  console.log(`My name is ${name} yo bro!`)
}

const insertCustomName = (callback, name) => {
  callback(name)
}

insertCustomName(logName, "Haidar")
insertCustomName(logNameCooler, "Haidar")
insertCustomName(logNameCooler, "Arsyad")
