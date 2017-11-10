<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }

</script>

<style scoped>
    div {
        margin: 30px auto;
        padding: 30px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        text-align: center;
    }
    h1 {
        color: red;
    }
</style>