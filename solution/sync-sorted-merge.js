'use strict'

module.exports = (logSources, printer) => {

  let sorted = logSources.map(source => source.pop()).sort((a, b) => {
    a = new Date(a.date)
    b = new Date(b.date)
    return a - b
  })

  sorted.forEach(logEntry => {
    printer.print(logEntry)
  })

  printer.done()
}
