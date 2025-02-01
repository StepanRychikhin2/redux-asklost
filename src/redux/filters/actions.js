// 	function filterChange(repla) {
// 		console.log(repla)
// 		dispatch({
// 			type: 'filterRepla',
// 			param: repla,
// 		})
// 	}
import { createAction } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const filterChange = createAction('filterRepla', (repla) => {
    return {
        payload: {
        	param: repla,
    }
    }
    

})

export { filterChange }
