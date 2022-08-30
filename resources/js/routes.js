import VueRouter from "vue-router"
import Show from "./pages/Show.vue";

export const routes = [
    {    path : "/public/:id" , component : Show , name : 'show' },
    
];