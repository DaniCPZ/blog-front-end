<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Articles" />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">
    <Articles layout="grid" :show-view-all="false" :articles="articles.data" />

    <div class="mt-8 sm:mt-12">
      <button
        class="
          px-4
          py-2
          sm:px-6
          bg-primary
          text-white
          rounded
          focus:outline-none
        "
      >
        <span v-if="loading">Loading...</span>
        <span v-else>View More</span>
      </button>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "../../components/InnerPageHero.vue";
import Articles from "../../components/Articles";
import { useArticle } from "../../composables/useArticle";
export default {
  components: {
    InnerPageHero,
    Articles,
  },

  props: {},

  setup() {
    let { fetchArticles, loading, articles } = useArticle();
    fetchArticles();

    return {
      articles,
      loading,
    };
  },
};
</script>