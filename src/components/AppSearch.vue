<template>
    <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchCharacters">
            <div class="col-12">
                <label class="visually-hidden" for="charactername">Search name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Search name"
                    v-model.trim="search.name">
            </div>

            <div class="col-12">
                <label class="visually-hidden" for="searchStatus">Search status</label>
                <select class="form-select" id="searchStatus" v-model="search.status">
                    <option selected value="">Choose...</option>
                    <option :value="status" v-for="(status, index) in statusOptions" :key="index">{{ status }}</option>
                </select>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>

            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="resetSearch">Reset</button>
            </div>
        </form>
    </div>

</template>

<script>
import { store } from '../store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            statusOptions: [
                'alive',
                'dead',
                'unknown'
            ],
            search: {
                status: '',
                name: ''
            }


        }
    },
    methods: {
        searchCharacters() {
            //store.params = { ...this.search };
            //facciamo una copia di this.earch per non cancellarne le proprietà
            const search = { ...this.search }
            //cicliamo sull'array delle chiavi dell'oggetto e se il valore è vuoto cancelliamo la proprietà
            Object.keys(search).forEach((val) => {
                if (!search[val]) delete search[val]
            })
            //cloniamo in params l'oggetto con le proprietà valorizzate
            store.params = { ...search };
            //console.log(store.params)
            store.getCharacters()
            //this.$emit('filterchar');

        },
        resetSearch() {
            this.search.status = '';
            this.search.name = '';
            store.params = {};
            store.getCharacters()
            // store.search.status = '';
            // store.search.name = '';

            //this.$emit('filterchar')
        }
    }
    // props: {
    //     searchStatus: String
    // },


}
</script>

<style lang="scss" scoped>

</style>