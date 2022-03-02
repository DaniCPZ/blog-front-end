import { ref } from "vue";
import api from "../apis/api";

export function useArticle() {
  let articles = ref({
    data: [],
    links: {},
    meta: {},
  })

  let loading = ref(false);

  function fetchArticles(params = {}) {
    let { page = 1, showMore = false } = params;

    loading.value = true;
    api.get('/articles', { params: { page } })
      .then(res => {
        if (showMore) {
          articles.value = {
            ...res.data,
            data: [...articles.value.data, ...res.data.data],
          }
        } else {
          articles.value = res.data
        }
      })
      .finally(() => loading.value = false);
  }

  return {
    articles,
    fetchArticles,
    loading,
  }
}