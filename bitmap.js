/**
 * @author Denysaw
 */
'use strict'

const read = () => {
  return new Promise(
    (resolve) => {
      let cases = []
      let [c, n, m] = [0]

      require('readline').createInterface({
        input: process.stdin
      }).on('line', (line) => {
        if (!cases.length) {
          while (line--) cases.push([])
        } else if (!n) {
          [n, m] = line.split(' ')
        } else if (!line) {
          n = m = 0
          c++
        } else if (cases[c].length < n) {
          cases[c].push(line.split('').slice(0, m))
        }
      }).on('close', () => {
        resolve(cases)
      })
    }
  )
}

const iterate = (bitmap, callback) => {
  bitmap.forEach((row, i) => {
    Object.values(row).forEach((bit, j) => {
      callback(i, j, Number(bit), bitmap)
    })
  })
}

const closestWhite = (i1, j1, bit1, bitmap) => {
  if (i1 && !j1) output()
  if (j1) output(' ')

  if (bit1) {
    output(0)
  } else {
    let d = []

    iterate(bitmap, (i2, j2, bit2) => {
      if (bit2) {
        d.push(Math.abs(i1 - i2) + Math.abs(j1 - j2))
      }
    })

    output(Math.min(...d))
  }
}

const output = (mixed = '\n') => {
  process.stdout.write(String(mixed))
}

module.exports.process = cases => {
  while (cases.length) {
    iterate(cases.shift(), closestWhite)
    output()

    if (cases.length) output()
  }
}

read().then(exports.process)
