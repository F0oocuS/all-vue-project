<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8 col-lg-6">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-lg-6">
                <h1>Custom Directive</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-dir:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-dir': {
                bind(el, binding, vnide) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .container {
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
