<template>
  <el-container>


    <el-header style="margin-top: -80px">


      <appHeader>
      </appHeader>


    </el-header>
<!--    </appHeader>-->
    <el-container>
      <el-aside width="400px">
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
                  <el-menu-item   index="1-1"> <router-link :to="{name:'productList',params:{num:1}}">小吃</router-link></router-link></el-menu-item>
                  <el-menu-item   index="1-2"><router-link :to="{name:'productList',params:{num:2}}">糕点</router-link></el-menu-item>
                  <el-menu-item   index="1-3"><router-link :to="{name:'productList',params:{num:3}}">快餐</router-link></el-menu-item>
                  <el-menu-item   index="1-4"><router-link :to="{name:'productList',params:{num:4}}">饮品</router-link></el-menu-item>


                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="margin-top: 60px;margin-left: -200px">
<!--        产品显示区域-->
       <router-view/>
<!--        <foodList :classTypeId="classId">-->
<!--        </foodList>-->


        <el-footer>
          <el-pagination
            style="margin-top:4%; margin-left:60%;padding-bottom: 2%"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[50, 100, 150, 200, 250, 300, 350, 400]"
            :page-size="50"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-footer>


      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import productList from '../productList/foodList.vue'
  import appHeader from '../header/header.vue'
  import appSlider from '../business/businessSlider.vue'
  import foo from '../foo/foo.vue'
    export default {
        methods: {
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
            },
            search (){
                console.log("输入框搜索....")
            }
        },
        data () {
            return {
                classId:'1',
                input1: '',
                input2: '',
                input3: '',
                select: '',
                circleUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            }
        },
        components:{
            productList:productList,
            appHeader:appHeader,
            appSlider:appSlider,
        }
    }
</script>

<style>

</style>
