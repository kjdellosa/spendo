import database from '../../database/index.js'

import makeGetCategory from './uc.get-category.js'
import makeCreateCategory from './uc.create-category.js'
import makeUpdateCategory from './uc.update-category.js'
import makeDeleteCategory from './uc.delete-category.js'
import makeListCategory from './uc.list-category.js'

const ucGetCategory = makeGetCategory({ categoryDb: database.categoryDb })
const ucCreateCategory = makeCreateCategory({ categoryDb: database.categoryDb })
const ucUpdateCategory = makeUpdateCategory({ categoryDb: database.categoryDb })
const ucDeleteCategory = makeDeleteCategory({ categoryDb: database.categoryDb })
const ucListCategory = makeListCategory({ categoryDb: database.categoryDb })

export default {
  ucGetCategory,
  ucCreateCategory,
  ucUpdateCategory,
  ucDeleteCategory,
  ucListCategory,
}