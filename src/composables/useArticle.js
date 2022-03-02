import { ref } from "vue";
import api from "../apis/api";

export function useArticle() {
  let articles = ref({
    data: [],
  })

  let loading = ref(false);

  function fetchArticles() {
    loading.value = true;
    api.get('/articles')
      .then(res => {
        articles.value = res.data
      })
      .finally(() => loading.value = false);
  }

  return {
    articles,
    fetchArticles,
    loading,
  }
}