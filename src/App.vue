<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router="" default-openeds="['1']"
          background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template v-slot:title>
              <i class="el-icon-tickets"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item index="/articles/index">
              <template v-slot:title><span>文章列表</span></template>
            </el-menu-item>
            <el-menu-item index="/articles/create">
              <template v-slot:title><span>新建文章</span></template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: 'App',
    methods: {
      logout() {
        // 清空token
        window.sessionStorage.clear();
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;

    >div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }

</style>
