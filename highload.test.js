const bitmap = require('./bitmap')

let output = ''
let storeLog = inputs => (output += inputs)

test('Highload test', () => {
  process.stdout.write = jest.fn(storeLog)
  bitmap.process(
    Array.from(
      { length: 1000 },
      () => Array.from(
        { length: 182 },
        () => Array.from(
          { length: 182 },
          () => Math.round(Math.random())
        )
      )
    )
  )

  expect(output.split('\n').length).toBe(183000)
})
