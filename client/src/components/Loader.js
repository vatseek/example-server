import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { getCategories } from '../services/categories' 

const Loader = ({ user, getCategories }) => {
    useEffect(() => {
        if (true) {
            getCategories()
        }     
    }, [user])

    return null
}

export default connect((state) => ({ user: state.user.data }), {getCategories})(Loader)