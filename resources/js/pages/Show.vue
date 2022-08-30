<template>
    <div>
        {{post}}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: {},
        };
    },

    mounted() {
        console.log(this.$route)
        axios.get("/api/posts/" + this.$route.params.id).then((resp) => {
            const data = resp.data;
            this.post = data;
        });
    },
};
</script>

<style lang="scss" scoped></style>
