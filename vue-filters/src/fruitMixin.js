export const fruitMixins = {
    data() {
        return {
            fruits: ['Mango', 'Banana', 'Melon', 'Apple'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};