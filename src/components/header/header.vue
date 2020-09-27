<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item  index="2"  style="margin-left: 38% ;padding-top: 3%;border: none"  >
      <el-input placeholder="请输入内容" style="width:410px" v-model="input1" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchRoute"><router-link :to="{name:'pList',params:{reqStr:input1}}">搜索</router-link></el-button>
      </el-input>
    </el-menu-item>
    <el-menu-item index="3"  style="margin-left: 66%">处理中心</el-menu-item>
    <el-menu-item index="4" >消息中心</el-menu-item>
    <el-menu-item @click="redirectOrderList()" index="5">订单管理</el-menu-item>
<!--    <el-menu-item @click="reBackHome()" index="1" style="float: left;margin-left: -75.5%">首页</el-menu-item>-->
    <el-menu-item index="6" style="float: right;margin-right: 5%">
      <el-avatar :size="size" :src="circleUrl" ></el-avatar>
    </el-menu-item>
    <el-menu-item v-if="role=='1'" index="7" @click="toBusinessCenter()" >商家中心</el-menu-item>
    <el-menu-item  @click="reBackHome()" index="8" style="float: left;">首页</el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        data(){
            return{
                input1:'',
                select: '',
                circleUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                activeIndex: '1',
                activeIndex2: '1',
                size:'large',
                role: localStorage.getItem("perm")
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            redirectOrderList () {
                //跳转至订单列表页面
                this.$message({
                    message: '跳转至该用户订单列表页面....',
                    type: 'success'
                });
                this.$router.push({path:'/orderList'})
            },
            reBackHome () {
                //返回首页
                this.$router.push({name:"home"})
            },
            searchRoute () {
                console.log("触发搜索框按钮..........."+this.input1)
                // localStorage.setItem("searchProductName",this.input1);
                this.$store.commit("setSearchProductName",this.input1)
            },
            searchOrder () {

            },
            toBusinessCenter () {
                this.$router.push({name:"businessCenter"})
            }
        }
    }
</script>


<style>

</style>
