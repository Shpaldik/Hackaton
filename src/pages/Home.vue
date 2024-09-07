<script>
import Header from '../components/Header.vue';
import PopularBooks from '../components/PopularBooks.vue';
import Novelties from '../components/Novelties.vue';
import Genres from '../components/Genres.vue';
import Actually from '../components/Actually.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Header,
        PopularBooks,
        Novelties,
        Genres,
        Actually,
        Footer,
    }
}
</script>

<template>

<Header />
<PopularBooks class="mt-28"/>
<Novelties class="mt-10"/>
<Genres class="mt-10"/>
<Actually class="mt-10"/>
<Footer class="mt-10"/>


</template>
