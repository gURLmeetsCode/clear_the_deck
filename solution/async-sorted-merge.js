'use strict'

module.exports = (logSources, printer) => {
    let promises = logSources.map(source => {
      return source.popAsync()
    })

    Promise.all(promises).then(res => {
      res.sort((a, b) => {
        a = new Date(a.date)
        b = new Date(b.date)
        return a - b
      })

      res.forEach(entry => {
        printer.print(entry)
      })

  		printer.done()
    })
}
