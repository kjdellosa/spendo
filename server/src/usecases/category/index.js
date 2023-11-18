import database from '../../database'

import makeGetCategory from './uc.get-category'
import makeCreateCategory from './uc.create-category'
import makeUpdateCategory from './uc.update-category'
import makeDeleteCategory from './uc.delete-category'
import makeListCategory from './uc.list-category'

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