<!--<template>-->
<!--  <el-row class="tac">-->
<!--    <el-col :span="12">-->
<!--      <h5>美食分类</h5>-->
<!--      <el-menu-->
<!--        default-active="2"-->
<!--        class="el-menu-vertical-demo">-->
<!--&lt;!&ndash;        <el-submenu index="1">&ndash;&gt;-->
<!--          <el-menu-item-group>-->
<!--            <el-menu-item @click="getGoodsInf()" index="1-1" name="店铺id">饮品</el-menu-item>-->
<!--            <el-menu-item @click="getGoodsInf()" index="1-2" name="店铺id">主食</el-menu-item>-->

<!--            <el-menu-item @click="getGoodsInf()" index="1-3" name="店铺id">配菜</el-menu-item>-->
<!--            <el-menu-item @click="getGoodsInf()" index="1-4" name="店铺id">炒菜</el-menu-item>-->
<!--            <el-menu-item @click="getGoodsInf()" index="1-5" name="店铺id">汤羹</el-menu-item>-->

<!--          </el-menu-item-group>-->
<!--&lt;!&ndash;        </el-submenu>&ndash;&gt;-->
<!--      </el-menu>-->
<!--    </el-col>-->

<!--  </el-row>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        methods: {-->
<!--            handleOpen(key, keyPath) {-->
<!--                console.log(key, keyPath);-->
<!--            },-->
<!--            handleClose(key, keyPath) {-->
<!--                console.log(key, keyPath);-->
<!--            },-->
<!--            //参数是 店铺id 和 分类名称-->
<!--            getGoodsInf(shopId,className){-->
<!--                this.$message({-->
<!--                    message:"测试商店 点击分类按钮",-->
<!--                    type:"success"-->
<!--                })-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style>-->

<!--</style>-->


<template>
  <el-row class="tac">
    <el-col :span="12" >
      <h5>美食专栏</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>点击展开</span>
          </template>
          <el-menu-item-group >
            <el-menu-item  @click="getClassType(1)" index="1-1">小吃</el-menu-item>
            <el-menu-item @click="getClassType(2)" index="1-2">糕点</el-menu-item>
            <el-menu-item  @click="getClassType(3)" index="1-3">快餐</el-menu-item>
            <el-menu-item  @click="getClassType(4)" index="1-4">饮品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getClassType(classType){
                this.classId= classType;
                console.log("classType----------"+classType);
            },
        }
    }
</script>

<style>

</style>
