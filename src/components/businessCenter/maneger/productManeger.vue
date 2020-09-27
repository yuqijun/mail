<!--必然是已经登录的了-->
<!--那么必然本地存储了当前商户的id-->
<!--根据商户id获取到所有相关的订单  按时间降序排序-->
<template>
  <el-main>
    <el-input placeholder="请输入内容" style="width:410px;float: left;margin-left: 2.5%" v-model="input1" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="商品名称" value="1"></el-option>
        <el-option label="商品编号" value="2"></el-option>
        <el-option label="商品价格" value="3"></el-option>
      </el-select>
      <!--      <el-button slot="append" icon="el-icon-search" @click="searchRoute"><router-link :to="{name:'pList',params:{reqStr:input1}}">搜索</router-link></el-button>-->
      <el-button slot="append" icon="el-icon-search" >搜索</el-button>
    </el-input>

    <template  style="display: inline">
      <el-radio v-model="orderStatus" @click="filterOrderByStatus()" label="1">已上架</el-radio>
      <el-radio v-model="orderStatus" @click="filterOrderByStatus()" label="2">已下架</el-radio>
    </template>
    </br>
    <div v-for="product in productList" :key="product.id " style="margin-top: 4%;">
<!--      <appBusinessGoods :producte="[product,productList]" v-on:sendPordoctList="pushProductList" ></appBusinessGoods>-->
      <appBusinessGoods :producte="[product]"></appBusinessGoods>
    </div>
  </el-main>
</template>

<script>
    // import appBusinessGoods from '../../../components/business/businessGoods.vue'
    import appBusinessGoods from '../../../components/businessCenter/productList/productGroup.vue'
     export default {
        data(){
            return{
                input1:'',
                select:'',
                orderStatus:"",
                productList:'',
                product:''
                // productList:[
                //     {
                //         name:"汉堡王",
                //         url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                //         number:"2",
                //         price:"3",
                //         totalPrice:"23",
                //         desc:"性价比之王汉堡",
                //         status:"上架"
                //     },
                //     {
                //         name:"汉堡王2",
                //         url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                //         number:"2",
                //         price:"3",
                //         totalPrice:"23",
                //         desc:"豪华旗舰王汉堡",
                //         status:"上架"
                //     }
                // ]
            }
        },
        methods:{
        },
         //这个方法获取productList 然后传入子组件
         pushProductList () {

         },
         mounted () {
            //每次加载此页面就请求一次后端接口获取店铺产品 然后传递给子组件
            const param = {
                shopId:localStorage.getItem("shopId")
            };
             this.axios.post("product/allofshopid",param)
                 .then((res)=>{
                     const {data} = res;
                     if(data.respCode=="000000"){
                         console.log("后端返回的产品列表   商家中心 产品管理"+JSON.stringify(data.info));
                         this.productList = data.info;
                     }else{
                         this.$message.error("接口请求失败...");
                     }
                 })
         },
        components:{
            appBusinessGoods:appBusinessGoods
        },

    }
</script>

<style>

</style>
