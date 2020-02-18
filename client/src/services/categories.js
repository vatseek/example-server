import { getCategories as getCategoriesAPI } from '../api/category'
import { GetCategoriesStart, GetCategoriesEnd } from '../redux/actions/categoriesActions'

export const getCategories = () => (dispatch) => {
    dispatch(GetCategoriesStart())
    getCategoriesAPI().then(categories => {
        dispatch(GetCategoriesEnd(categories))
    })
}