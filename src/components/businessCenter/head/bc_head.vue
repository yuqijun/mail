<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item  index="2"  style="margin-left: 30% ;padding-top: 1%;border: none"  ></el-menu-item>
    <el-menu-item index="3"  style="margin-left: 71%">处理中心</el-menu-item>
    <el-menu-item index="4" >消息中心</el-menu-item>
    <el-menu-item @click="redirectOrderList()" index="5">我的订单</el-menu-item>


    <el-menu-item index="6" style="float: right;margin-right: 5%">
      <el-avatar :size="size" :src="circleUrl" ></el-avatar>
    </el-menu-item>
    <el-menu-item v-if="role=='business'" index="7" @click="toBusinessCenter()" >商家中心</el-menu-item>
    <el-menu-item index="8"    style="float: right;" @click="reBackHome()" >首页</el-menu-item>
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
