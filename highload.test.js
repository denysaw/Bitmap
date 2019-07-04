const bitmap = require('./bitmap')

let output = ''
let storeLog = inputs => (output += inputs)

test('Task test', () => {
  process.stdout.write = jest.fn(storeLog)
  bitmap.process([
    [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0]
    ]
  ])

  expect(output).toBe('3 2 1 0\n2 1 0 0\n1 0 0 1\n')
})

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
