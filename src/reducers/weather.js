const initialState = {
	isSearching: false,
	data: null,
	error: null
}

export const weather = (state = initialState, action) => {

	console.log(action);
	switch(action.type) {
		case 'BEGIN_SEARCH':
			return {
				...state,
				isSearching: true
			}
		case 'SEARCH':
			return {
				...state,
			}
		case 'SEARCH_SUCCESS':
			return {
				...state,
				isSearching: false,
				data: action.payload.data
			}
		case 'SEARCH_FAILURE':
			return {
				...state,
				isSearching: false,
				error: action.payload.error
			}
		default:
			return { ...state }
	}
}