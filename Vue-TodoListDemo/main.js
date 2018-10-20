let lists = Vue.component('todo-item',{
    props: ['content','index'],
    template: '<li @click="handleClick">{{index+1}}.{{ content }}</li>',
    methods: {
        handleClick: function(){
            this.$emit('delete',this.index)
        }
    }
});



let todolist = new Vue({
    el: '#root',
    data: {
        inputValue: '',
        list: []
    },
    methods: {
        handleSubmit: function() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        handleDelete: function(index) {
            this.list.splice(index,1)
        }
    }
});