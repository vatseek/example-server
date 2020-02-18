import { fetchCategories, deleteCategory as deleteCategoryAPI } from '../api/category'
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  removeCategorySuccess,
  removeCategoryFailure,
} from '../redux/actions/categoriesActions'

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesStart())
  fetchCategories()
    .then((categories) => {
      dispatch(getCategoriesSuccess(categories))
    })
    .catch((err) => {
      dispatch(getCategoriesFailure(err))
    })
}

export const deleteCategory = (id) => (dispatch) => {
  deleteCategoryAPI(id)
    .then((res) => {
      dispatch(removeCategorySuccess(id))
    })
    .catch((err) => {
      dispatch(removeCategoryFailure(err))
    })
}
