import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    apiURL: 'https://rickandmortyapi.com/api/',
    characterList: [],
    loading: false,
    params: {},
    // search: {
    //     status: '',
    //     name: ''
    // },
    errormessage: '',
    // getCharacters(endpoint) {
    //     this.errormessage = '';
    //     this.loading = true;
    //     const params = { ...this.params }
    //     axios.get(this.apiURL + endpoint, { params }).then(
    //         (res) => {
    //             this.characterList = res.data.results;
    //             this.loading = false;
    //         }
    //     ).catch((error) => {
    //         this.characterList.length = 0;
    //         this.loading = false;
    //         this.errormessage = error.message
    //     })
    // }
});