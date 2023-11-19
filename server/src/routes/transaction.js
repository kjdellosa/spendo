import { Router } from 'express'
import controllers from '../controllers/index.js'

import httpAdapter from '../adapters/express.js'

const router = Router({ mergeParams: true })

router.route('/:id')
  .get(httpAdapter(controllers.ctrlTransaction.ctrlGetTransaction))
  .patch(httpAdapter(controllers.ctrlTransaction.ctrlUpdateTransaction))
  .delete(httpAdapter(controllers.ctrlTransaction.ctrlDeleteTransaction))

router.route('/')
  .get(httpAdapter(controllers.ctrlTransaction.ctrlListTransaction))
  .post(httpAdapter(controllers.ctrlTransaction.ctrlCreateTransaction))

export {
  router as transactionRouter
}