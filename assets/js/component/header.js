import html from "../core.js";

function header() {
    return html`
        <header class="header">
            <span class="title">My todo list</span>
            <div class="todo-work">
                <input type="text" class="input-todo" autofocus placeholder="Add a task...">
                <button 
                    title="Add task" 
                    class="add"
                    onclick="dispatch('add', document.querySelector('.input-todo').value)"    
                >
                Add task
                </button>
            </div>
            <button title="Change theme" class="theme" onclick="dispatch('changeTheme')">
                <div class="light">
                    <i class="fa-solid fa-sun"></i>
                </div>
                <div class="dark">
                <i class="fa-solid fa-moon"></i>
                </div>
            </button>
        </header>
    `
}

export default header