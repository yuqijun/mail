<template>
  <form>
    <label>name</label>
    <div class="form-group">
<!--      <label for="exampleInputEmail1">name</label>-->
      <el-input  v-model="fomatData.name"  id="exampleInputEmail1" placeholder="请输入姓名..."  style="width: 300px;"></el-input>
<!--      <input v-model="fomatData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="name">-->
    </div>
    <label>title</label>
    <div class="form-group">
<!--      <label for="exampleInputPassword1">title</label>-->
<!--      <input v-model="fomatData.title" type="text" class="form-control" id="exampleInputPassword1" placeholder="title">-->
      <el-input v-model="fomatData.title" id="exampleInputPassword1"  placeholder="请输入title..."  style="width: 300px;"></el-input>
    </div>
<!--    <button @click="editPerson()" type="submit" class="btn btn-default">Submit</button>-->
    <el-button type="primary" @click="editPerson()" style="width: 300px;">修改</el-button>
  </form>
</template>

<script>
  export  default {
      data () {
          return {
              fomatData: {
                  name:'',
                  title:'',
                  age:'',
                  add:'',
                  id:''
              }
          }
      },
      mounted () {
          this.getById();
      },
      methods : {
          getById () {
              // this.axios.get("http://localhost:3031/posts/"+this.$route.params.id)
              this.axios.get("posts/"+this.$route.params.id)
                  .then((res=>{
                      this.fomatData.name = res.data.name;
                      this.fomatData.title = res.data.title;
                      this.fomatData.age = res.data.age;
                      this.fomatData.add = res.data.add;
                      this.fomatData.id = res.data.id;
                  }))
          },
          editPerson () {
              if(this.fomatData.name==null||this.fomatData.title==null){
                  alert("请补全信息...");
                  return;
              }
              // this.axios.put("http://localhost:3031/posts/"+this.$route.params.id,this.fomatData)
              this.axios.put("posts/"+this.$route.params.id,this.fomatData)
                  .then((res=>{
                      const {status} = res ;
                      if(status !=404&&status!=400&&status!=500&status!=501){
                          alert("Edit success");
                          this.$router.push({name:'list'});
                      }
                  }))
          }
      }
  }
</script>

<style>

</style>
