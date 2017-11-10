<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="item in filteredFruits">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixins } from './fruitMixin'

    export default {
        mixins: [fruitMixins]
    }
</script>

<style lang="scss">
</style>
