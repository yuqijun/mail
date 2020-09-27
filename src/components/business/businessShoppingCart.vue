<template>
  <div >
  <!--  购物车产品列表-->
    <div>
        <div v-for="product in toProductList[0]" :key="product.id">
          <appSCProduct :product="product" v-on:putTotalPrice="getTotalPrice" ></appSCProduct>
        </div>
    </div>

<!--    <div style="width:200px;height:80px;float: right;border:1px red solid;" >-->
<!--      <span style="display: inline">-->
<!--        订单金额：-->
<!--      </span>-->
<!--      <span style="display: inline">-->
<!--        {{totalPrice}}-->
<!--      </span>-->
<!--    </div>-->


  </div>
</template>

<script>
  import appSCProduct from '../business/shoppingCartProduct.vue'

  export default {
      name:'businessShopppingCart',
      data (){
          return {
              totalPrice : this.toProductList[1]
          }
      },
      mounted(){
          //获取所有价格标签  计算总价
          // this.totalPrice = toProductList[1];
      },
      methods:{
          getTotalPrice (data) {
              this.$emit("toTotalPrice",data);
              // this.totalPrice =  data;
          }
      },
      components:{
          appSCProduct:appSCProduct
      },
      props:['toProductList']
  }
</script>

<style>

</style>
