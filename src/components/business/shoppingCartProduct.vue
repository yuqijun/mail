<template>

  <el-col :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">

<!--    图片-->
    <div class="productImg" style="margin: 0px 0px;padding:0px 0px">
      <img :src="product.url" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
    </div>

    <!--      产品描述信息-->
    <div style="display: inline;float: left;margin-left: 8%;text-align: left">
        <span>
          {{product.name}}
        </span>
    </div>

    <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:8%;"  id="num">
      <span style="display: inline;margin-bottom: 50%">
        数量：
<!--          <el-input-number  v-model="product.number"  @change="handleChange" style="float: left;margin-left: 75%;margin-top: -15% " :min="0"   label="描述文字">-->
          <el-input-number  v-model="product.number" @change="handleChange" style="float: left;margin-left: 75%;margin-top: -15% " :min="0"   label="描述文字">

          </el-input-number>
      </span>
    </div>

    <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:15%;" id="price">
      <span style="display: inline">
        价格:
      </span>
      <span style="display: inline">
        {{product.price}}
      </span>
    </div>

    <div  style="width: 200px;height: 20px;display: inline;float: right;" >
      <span style="display: inline" >
          商品总价:
      </span>
      <span style="display: inline"  class="cardPrice">
        {{product.price*product.number}}
      </span>
    </div>

  </el-col>

</template>

<script>
    import bus from '../../bus/eventBus.js'
    import $ from  'jquery'
    export default {
        name:'businessShoppingCart',
        data() {
            return {
                num:1,
                totalPrice:''
            };
        },
        props:["product"],
        methods:{

            // 向外传递购物车产品总价
            handleChange(value) {
                this.$nextTick(()=>{
                    var total = document.getElementsByClassName("cardPrice");
                    var totalPrice = 0;
                    for(var n=0;n<total.length;n++){
                        totalPrice += parseInt(total[n].innerHTML);
                    }

                    //向外传递
                    this.$emit("putTotalPrice",totalPrice);

                })
            }

        }

    };
</script>

<style>

</style>
