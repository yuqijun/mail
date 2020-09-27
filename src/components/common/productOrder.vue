<template>
<div>
  <el-col :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">
    <div class="productImg" style="margin: 0px 0px;padding:0px 0px">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
    </div>
    <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:10%;"  id="num">
      <span style="display: inline;margin-bottom: 50%">
        数量：
          <el-input-number  v-model="num" style="float: left;margin-left: 75%;margin-top: -15% " :min="1" @change="handleChange"   label="描述文字">
          </el-input-number>
      </span>
    </div>
    <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:15%;" id="price">
      <span style="display: inline">
        价格:
      </span>
      <span style="display: inline">
        {{date.price}}
      </span>
    </div>
    <div v-model="date.productTotalPrice" style="width: 200px;height: 20px;display: inline;float: left;margin-left:5%;" id="price2">
      <span style="display: inline" >
          商品总价:
      </span>
      <span style="display: inline"  class="tagPrices">
        {{date.price*num}}
      </span>
    </div>
  </el-col>

</div>
</template>

<script>
    import $ from  'jquery'
    export default {
        data() {
            return {
                num: 1,
                totalPrice:''
            };
        },
        methods: {
            handleChange(value) {
                this.$nextTick(() => {
                var price = this.num*this.date.price;
                console.log("price--"+price);
                var arrayPrice = document.getElementsByClassName("tagPrices");
                var totalPriceer = parseInt(0);
                for(var i=0;i<arrayPrice.length;i++){
                    totalPriceer+=parseInt(arrayPrice[i].innerHTML);
                }
                this.$emit("returnTotalPrice",totalPriceer)
                })
            }
          },
        props:["date"],
        mounted () {
            this.handleChange()
        }
    };
</script>

<style>

</style>
