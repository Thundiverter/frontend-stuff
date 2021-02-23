let HomeComponent = Vue.extend({
    template: '#page-main'
});
let ProjectsComponent = Vue.extend({
    template: '#page-projects'
});
let AboutComponent = Vue.extend({
    template: '#page-about'
});
let ErrorComponent = Vue.extend({
    template: '#page-404'
});

let routes = [
    {path: '/', component: HomeComponent},
    {path: '/projects', component: ProjectsComponent},
    {path: '/about', component: AboutComponent},
    {path: '*', component: ErrorComponent}
];

let router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');