var app = new Vue({
    el: '#app',
    data: {
        message: '',
        verify:''
    },
    methods: {
        process: function(){
            console.log(this.message);
            this.verify = this.message;
        }
    }
})