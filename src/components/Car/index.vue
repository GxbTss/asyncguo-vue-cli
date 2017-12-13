<template>
  <div class="car">
    <pagination :current-page="currentPage" :total-page="totalPage" @pageChange="getPost"></pagination>
  </div>
</template>

<script>
import Pagination from '@/base/Pagination';
export default {
  components: {
    Pagination
  },
  data () {
    return {
      currentPage: 1,
      totalPage: 121
    }
  },
  methods: {
    getPost (page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="less" scoped>

</style>
