import '@babel/polyfill'
import app from './server'
import {connect} from './database'
async function main() {
  await app.listen(3000)
  await connect()
  console.log('running')
}

main()