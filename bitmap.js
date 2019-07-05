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

const output = (mixed = '\n') => {
  process.stdout.write(String(mixed))
}

const makeWhitesMap = c => {
  let whites = []

  iterate(c, (i, j, bit) => {
    if (bit) {
      whites.push([i, j])
    }
  })

  return whites
}

module.exports.process = cases => {
  while (cases.length) {
    let c = cases.shift()
    let map = makeWhitesMap(c)

    iterate(c, (i, j, bit) => {
      if (i && !j) output()
      if (j) output(' ')

      if (bit) {
        output(0)
      } else {
        let d = []

        for (let white of map) {
          d.push(Math.abs(i - white[0]) + Math.abs(j - white[1]))
        }

        output(Math.min(...d))
      }
    })

    output()

    if (cases.length) output()
  }
}

read().then(exports.process)
