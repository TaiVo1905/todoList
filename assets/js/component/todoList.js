import html from "../core.js";
import todoItem from "../component/todoItem.js";
import {connect} from "../store.js"

function todoList({todos}) {
    return html`
    <section class="main">
        <span class="sub-title">Task</span>
        <ul class="todo-list">
            ${todos.map((todo, index) => todoItem({todo, index}))}
        </ul>
    </section>
    `
}

export default connect()(todoList)