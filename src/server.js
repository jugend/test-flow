// @flow
const PORT: number = 9000

// import express, {
//   type $Application,
//   type $Request,
//   type $Response
// } from 'express'

import express from 'express'
import type { $Application, $Request, $Response } from 'express'

import { viewCard } from './controllers/cards'

const app: $Application = express()

app.get('/', viewCard)

app.listen(PORT, () => {
  console.info(`Server listening on PORT ${PORT}`)
})
