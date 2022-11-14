<template>
    <section class="container">
        <div v-if="loading">
            Sto caricando i dati
        </div>
        <div class="row" v-if="!loading">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in characters" :key="item.id">
                <CardComponent :character="item" />
            </div>
        </div>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    name: "CharacterList",
    props: ["characters", "loading"],
    components: { CardComponent }
}
</script>

<style lang="scss" scoped>

</style>