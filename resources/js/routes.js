import VueRouter from "vue-router"
import Show from "./pages/Show.vue";
import Test from "./pages/Test.vue";

export const routes = [
    {    path : "/" , component : Test , name : 'test' },
    {    path : "/public/:id" , component : Show , name : 'show' },
    {    path : "/public/test" , component : Show , name : '22' },
    
];