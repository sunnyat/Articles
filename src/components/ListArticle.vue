<template>
  <el-table :data="articles" style="width: 100%">
    <el-table-column prop="title" label="标题" width="140">
    </el-table-column>
    <el-table-column prop="body" label="内容" width="180">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      edit() {

      },
      remove() {

      }
    },
    created() {
      this.$axios.get('/articles').then(res => {
        this.articles = res.data
      })
    }
  }
</script>

<style lang="less" scoped>

</style>