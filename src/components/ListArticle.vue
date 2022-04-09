<template>
  <el-table :data="articles" style="width: 100%;padding-left:10px;">
    <el-table-column prop="title" label="标题" width="180">
    </el-table-column>
    <el-table-column prop="body" label="内容">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="140">
      <template v-slot="scope">
        <el-button @click="edit(scope.row._id)" type="text">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text">删除</el-button>
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
      fetch() {
        this.$axios.get('/articles').then(res => {
          this.articles = res.data
        })
      },
      edit(id) {
        this.$router.push(`/articles/edit/${id}`)
      },
      remove(id) {
        this.$axios.delete(`/articles/${id}`).then(res => {
          this.$message({
            message: '文章删除成功~',
            type: 'success'
          });
          this.fetch()
        })
      }
    },
    created() {
      this.fetch()
    }
  }
</script>
