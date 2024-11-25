import html from "../core.js"
import header from "../component/header.js"
import todoList from "../component/todoList.js"
import footer from "../component/footer.js"
import { connect } from "../store.js"


function app() {
    return html`
       ${header()}
       ${todoList()}
       ${footer()}
    `
}

export default connect()(app)