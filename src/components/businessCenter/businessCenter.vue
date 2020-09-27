<template>
  <el-container>
    <el-header style="margin-top: -80px">
      <appHeader></appHeader>
    </el-header>
    <el-container>
      <el-aside width="400px">
        <el-row class="tac">
          <el-col :span="12" >
            <h5>管理中心</h5>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
                <el-menu-item-group >
                  <el-menu-item   index="1-1"> <router-link :to="{path:'/productManeger'}">商品管理</router-link></el-menu-item>
                  <el-menu-item   index="1-2"><router-link :to="{path:'/orderManeger',query:{id:businessId}}">订单管理</router-link></el-menu-item>
                  <el-menu-item   index="1-3"><router-link to="#">商户管理</router-link></el-menu-item>
                </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="margin-top: 60px;margin-left: -200px">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import appHeader from '../businessCenter/head/bc_head.vue'

    export default {
        data() {
            return {
                businessId:1,
            }
        },
        methods:{
            getClassType(classType){
                this.classId= classType;
                console.log("classType----------"+classType);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        components:{
            appHeader:appHeader
        }
    }
</script>

<style>

</style>
