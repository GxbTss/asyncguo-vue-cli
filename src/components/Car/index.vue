<template>
  <div class="car">
    <pagination :current-page="currentPage" :total-page="totalPage" @pageChange="getPost"></pagination>
    <text-scroll :datalist="data" scrollType="scroll-up"></text-scroll>
  </div>
</template>

<script>
import Pagination from '@/base/Pagination';
import TextScroll from '@/base/TextScroll'
export default {
  components: {
    Pagination,
    TextScroll
  },
  data () {
    return {
      currentPage: 1,
      totalPage: 121,
      data: [
              {id: 1, text: '1'},
              {id: 2, text: '2'},
              {id: 3, text: '3'},
              {id: 4, text: '4'}
            ]
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
