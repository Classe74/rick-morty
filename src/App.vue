<template>
    <!-- {{ status }} -->
    <AppHeader title="Rick and Morty App" />
    <main>
        <AppSearch />
        <CharacterList />
        <div v-if="store.errormessage">
            <h1> Opps ! Qualcosa è andato storto</h1>
            <p>{{ store.errormessage }}</p>
        </div>

        <ResultCount />
    </main>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';
import ResultCount from './components/ResultCount.vue';

import { store } from './store';

export default {
    components: {
        AppHeader,
        AppSearch,
        CharacterList,
        ResultCount
    },
    data() {
        return {
            store,
        }
    },
    // watch: {
    //     'store.params'(newVal, oldVal) {
    //         console.log(newVal);
    //         console.log(oldVal);
    //         this.getCharacters();
    //     }
    // },
    // computed: {
    //     status() {
    //         return (store.params.status) ? store.params.status.toUpperCase() : 'Non esiste';
    //     }
    // },
    methods: {
        // getCharacters() {
        // store.errormessage = '';
        //const apiaurl = (status) ? this.apiURL + '?status=' + status : this.apiURL;
        //let options = null
        //  const params = store.params;
        // Passando SOLO i parmetri che hanno un valore (versione con $EMIT)
        // if (store.search.status && store.search.name) {
        //     options = {
        //         params: {
        //             status: store.search.status,
        //             name: store.search.name
        //         }
        //     }
        // } else if (store.search.status) {
        //     options = {
        //         params: {
        //             status: store.search.status
        //         }
        //     }
        // } else if (store.search.name) {
        //     options = {
        //         params: {
        //             name: store.search.name
        //         }
        //     }

        // }

        // Passando tutti i parmetri (versione con $EMIT)
        // if (store.search.status || store.search.name) {
        //     options = {
        //         params: {
        //             ...store.search
        //         }
        //     }
        // }
        // store.loading = true;
        // const apiurl = store.apiURL + this.endPoint;
        // axios.get(apiurl, { params }).then(
        //     (res) => {
        //         store.characterList = res.data.results;
        //         store.loading = false;
        //     }
        // ).catch((error) => {
        //     store.characterList.length = 0;
        //     store.loading = false;
        //     store.errormessage = error.message
        // console.log(error.message);
        // console.log(error.response.status);
        //     })
        // }
    },
    created() {
        store.endPoint = 'character';
        store.getCharacters();
        //this.getCharacters()
    }
}
</script>

<style lang="scss" scoped>

</style>

