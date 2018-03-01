const tape = require('tape')
const dhc = require('../')

tape('tests', t => {
  const pass = dhc.compileHsToWasm('main = putStr "test"')
  t.true(Array.isArray(pass), 'should compile valid input')

  const fail = dhc.compileHsToWasm()
  t.true(fail.includes('unexpected'), 'should fail on invalid input')

  const fail2 = dhc.compileHsToWasm('main = 5')
  t.true(fail2.includes('mismatch'), 'should fail on type errors')

  const fail3 = dhc.compileHsToWasm('main = putStrLn')
  t.true(fail3.includes('undefined'), 'should fail on undefined')

  t.end()
  process.exit()
})
