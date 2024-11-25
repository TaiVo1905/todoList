const TODOS_STOEAGE_KEY = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOS_STOEAGE_KEY)) || []
    }, 
    set(todos) {
        return localStorage.setItem(TODOS_STOEAGE_KEY, JSON.stringify(todos))
    }
}