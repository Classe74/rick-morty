<template>
    <AppHeader title="Rick and Morty App" />
    <main>
        <AppSearch :serchtype="searchType" />
        <CharacterList :characters="characterList" :loading="loading" />
    </main>

</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';

export default {
    components: {
        AppHeader,
        AppSearch,
        CharacterList
    },
    data() {
        return {
            apiURL: 'https://rickandmortyapi.com/api/character',
            characterList: [],
            loading: false,
            searchType: ''
        }
    },
    methods: {
        getCharacters() {
            this.loading = true;
            axios.get(this.apiURL).then(
                (res) => {
                    this.characterList = [...res.data.results];
                    console.log(this.characterList)
                    this.loading = false;
                }
            ).catch((error) => {
                this.loading = false;
                console.log(error);
            })
        }
    },
    created() {
        this.getCharacters()
    }
}
</script>

<style lang="scss" scoped>

</style>

