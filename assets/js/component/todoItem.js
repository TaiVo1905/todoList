import html from "../core.js";
import { connect } from "../store.js";

function todoItem({todo, index, editIndex}) {
    return html`
        <li class="${editIndex === index && 'editing'}">
            <div class="view">
                <div class="view-left">
                    <input 
                        type="checkbox" 
                        class="toggle"
                        ${todo.completed && 'checked'}
                        onclick="dispatch('toggle', ${index})"
                    >
                    </input>
                    <p class="content">${todo.content}</p>
                </div>
                <div class="actions">
                    <button 
                    title="Download"
                        class="action download"
                        onclick="dispatch('download', ${index})"
                    >
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </button>
                    <button
                    title="Edit"
                         class="action edit"
                         onclick="dispatch('startEdit', ${index})"
                    >    
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button 
                    title="Delete"
                        class="action delete"
                        onclick="dispatch('delete', ${index})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="container-edit">
                <input 
                    type="text" 
                    class="input-edit" 
                    value="${todo.content}">
                <div class="actions">
                    <button 
                    title="Cancel"
                    class="cancel"
                    onclick="dispatch('cancel')"
                    >
                    Cancel
                    </button>

                    <button 
                    title="Save"
                    class="save"
                    onclick="dispatch('endEdit', document.querySelectorAll('.input-edit')[${index}].value)"
                    >
                    Save
                    </button>
                </div>
            </div>
        </li>
    `
}

export default connect()(todoItem)