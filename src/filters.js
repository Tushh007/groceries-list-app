const filters = {
    user: '',
    searchText: '',
    sortBy: 'byEdited'
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.user === 'string') {
        filters.user = updates.user
    }

    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if (typeof updates.sortBy === 'string') {
        filters.sortBy = updates.sortBy
    }
}

export { getFilters, setFilters }