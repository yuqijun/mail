<template>
  <div>
  <el-input-number v-model="num" @change="handleChange"  :min="1" :max="10" label="描述文字">
  </el-input-number>
  </div>
</template>
<script>
  import $ from  'jquery'
    export default {
        data() {
            return {
                num: 1,
                productTotalPrice:''
            };
        },
        methods: {
            handleChange(value) {
                console.log("产品id值"+this.date);
                this.productTotalPrice = value*this.date;
                console.log("产品总价："+this.productTotalPrice);
                this.$emit("refreshProductTotalPrice",this.productTotalPrice)
            }
        },
        props:["date"]
    };
</script>
<style>
</style>
