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

  let articleDetail = ref({ category: {} });
  let articleDetailLoading = ref(true);

  function fetchArticleDetail(slug) {
    articleDetailLoading.value = false;
    api.get(`articles/${slug}`)
      .then(res => {
        articleDetail.value = res.data.data;
      })
      .finally(() => articleDetailLoading.value = true)
  }

  return {
    articles,
    fetchArticles,
    loading,
    articleDetail,
    articleDetailLoading,
    fetchArticleDetail,
  }
}