<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8 col-lg-6">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="item in filteredFruits">{{ item }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixins } from './fruitMixin';

    export default {
        data() {
            return {
                text: 'Hello there'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        },
        mixins: [fruitMixins]
    }
</script>

<style lang="scss">
    .container {
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
