<template>
  <form class="navbar-form navbar-left" role="search">
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
      <span class="input-group-btn">
      </span>
          <input v-model="fomatData.name" type="text" class="form-control" id="name" placeholder="name...">
        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="input-group">
          <input v-model="fomatData.title" type="texit" class="form-control" id="title" placeholder="title...">
          <span class="input-group-btn">
      </span>
        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    <button class="btn btn-success"  @click="addPer()">Add</button>
  </form>
</template>

<script>
import $ from 'jquery'
export default {
    data () {
        return {
            fomatData:{
                name:'',
                age:'19',
                add:'郑州',
                title:'',
                option:'默认'
            }
        }
    },
    methods:{
        addPer () {
            alert("触发了添加按钮");
            var name = $("#name").val();
            var title = $("#title").val();

            console.log("title=="+title);
            console.log("name=="+name);

            if(name==null||title==null){
                alert("信息不完整");
                return;
            }else{
                //将数据存入到数据库
                // this.axios.post("http://localhost:3031/posts",this.fomatData).then((res=>{
                this.axios.post("posts",this.fomatData).then((res=>{
                    const {status} = res;
                    console.log("add person status :"+status);
                        this.$router.push({name:"list"});
                }))
            }
        }
    }
}
</script>

<style>

</style>
