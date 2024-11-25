import html from "../core.js";
import { connect } from "../store.js"

function footer({todos}) {
    let value = 0 + '%'
    if (todos.length > 0) {
        value = ((todos.filter(todo => todo.completed).length / todos.length) * 100).toFixed(1) + '%'
    }

    return html`
    <footer class="footer">
        <span class="text-completed">Task completed</span>
        <div class="progress-bar">
            <div class="progress-bar--completed" style="width: ${value}"></div>
            <span class="number-completed">${value}</span>
        </div>
    </footer>
    `
}

export default connect()(footer)
