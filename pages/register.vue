<template>
    <section>
        Register
        {{ greeting }}
    </section>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'Hello World'
        }
    },
    mounted() {
        this.$store.dispatch({
            type: 'getTest'
        });
        console.log(this.$store.state.name)
    }
}
</script>
