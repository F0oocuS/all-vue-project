<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8 col-lg-6">
                <h1>Routing</h1>
                <hr>
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style lang="scss">

</style>
