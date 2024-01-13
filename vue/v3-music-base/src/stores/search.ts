import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            showSearchView: false,
            searchKeyWord: ''
        }
    },
    getters: {
        showHot: state => state.searchKeyWord === ''
    },
    actions: {

    }   
})