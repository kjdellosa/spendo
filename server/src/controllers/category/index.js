import usecases from '../../usecases/index.js'

import makeCtrlCreateCategory from './ctrl.create-category.js'
import makeCtrlGetCategory from './ctrl.get-category.js'
import makeCtrlListCategory from './ctrl.list-category.js'
import makeCtrlUpdateCategory from './ctrl.update-category.js'
import makeCtrlDeleteCategory from './ctrl.delete-category.js'

const ucs = usecases.UcsCategory

const ctrlCreateCategory = makeCtrlCreateCategory({ createCategoryUsecase: ucs.ucCreateCategory })
const ctrlGetCategory = makeCtrlGetCategory({ getCategoryUsecase: ucs.ucGetCategory })
const ctrlListCategory = makeCtrlListCategory({ listCategoryUsecase: ucs.ucListCategory })
const ctrlUpdateCategory = makeCtrlUpdateCategory({ updateCategoryUsecase: ucs.ucUpdateCategory })
const ctrlDeleteCategory = makeCtrlDeleteCategory({ deleteCategoryUsecase: ucs.ucDeleteCategory })

export default {
  ctrlCreateCategory,
  ctrlGetCategory,
  ctrlListCategory,
  ctrlUpdateCategory,
  ctrlDeleteCategory
}