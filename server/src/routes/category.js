import { Router } from 'express'
import controllers from '../controllers/index.js'

import httpAdapter from '../adapters/express.js'

const router = Router({ mergeParams: true })

router.route('/:id')
  .get(httpAdapter(controllers.ctrlCategory.ctrlGetCategory))
  .patch(httpAdapter(controllers.ctrlCategory.ctrlUpdateCategory))
  .delete(httpAdapter(controllers.ctrlCategory.ctrlDeleteCategory))

router.route('/')
  .get(httpAdapter(controllers.ctrlCategory.ctrlListCategory))
  .post(httpAdapter(controllers.ctrlCategory.ctrlCreateCategory))

export {
  router as categoryRouter
}