import { Router } from 'express'
import { categoryRouter } from './category.js'
import { transactionRouter } from './transaction.js'

const router = Router()

function buildRoutes() {
  router.use('/api/transaction', transactionRouter)
  router.use('/api/category', categoryRouter)

  router.use('/healthcheck', (req, res) => res.status(204).send())
  router.use('*', (req, res) => res.status(404).send())

  return router
}

export default buildRoutes