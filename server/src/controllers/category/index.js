import usecases from '../../usecases'

import makeCtrlCreateCategory from './ctrl.create-category'
import makeCtrlGetCategory from './ctrl.get-category'
import makeCtrlListCategory from './ctrl.list-category'
import makeCtrlUpdateCategory from './ctrl.update-category'
import makeCtrlDeleteCategory from './ctrl.delete-category'

const ucs = usecases.UcsCategory

const ctrlCreateCategory = makeCtrlCreateCategory({ createCategoryUsecase: ucs.ucCreateCategory })
const ctrlGetCategory = makeCtrlGetCategory({ getCategoryUsecase: ucs.ucGetCategory })
const ctrlListCategory = makeCtrlListCategory({ listCategoryUsecase: ucs.ucListCategory })
const crlUpdateCategory = makeCtrlUpdateCategory({ updateCategoryUsecase: ucs.ucUpdateCategory })
const ctrlDeleteCategory = makeCtrlDeleteCategory({ deleteCategoryUsecase: ucs.ucDeleteCategory })

export default {
  ctrlCreateCategory,
  ctrlGetCategory,
  ctrlListCategory,
  crlUpdateCategory,
  ctrlDeleteCategory
}