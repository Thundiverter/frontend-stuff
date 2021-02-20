let app = new Vue({
    el: '#app',
    data: {
        taskInput: '',
        todos: [
            {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', done: false},
            {title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', done: true},
            {title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', done: false},
        ]
    },
    methods: {
        add: function() {
            if (this.taskInput.length > 0) {
                this.todos.push({title: this.taskInput, done: false});
                this.taskInput = '';
            }
        },
        remove: function(id) {
            this.todos.splice(id, 1);
        },
        done: function(id) {
            this.todos[id].done = !this.todos[id].done;
        }
    }
})
