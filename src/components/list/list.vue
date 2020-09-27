<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a  href="javascript:void(0);"  @click="showAddHtml()"  class="btn btn-success" >Add</a>
    <div class=table-responsive>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>address</th>
          <th>title</th>
          <th>potion</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(v,i) in list ":key="i" >
          <td>{{v.name}}</td>
          <td>{{v.age}}</td>
          <td>{{v.add}}</td>
          <td>{{v.title}}</td>
          <td>
            <a href="#" @click="listEdit(v.id)">edit/</a>
            <a href="#" @click ='listDelete(v.id)'>delete</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      // this.axios.get('http://localhost:3031/posts').then((res)=>{
      this.axios.get('posts').then((res)=>{
        console.log("res====="+res.data[1].name);
        this.list = res.data;
      })
    },
    listDelete (Id) {
      if(confirm("Sure?")){
          // this.axios.delete("http://localhost:3031/posts/"+Id)
          this.axios.delete("posts/"+Id)
              .then((res=>{
                  this.getData();
              }))
      }
    },
    showAddHtml () {
        console.log("点击了跳转页面");
        this.$router.push({name:'add'});
    },
    listEdit  (ID) {
        console.log("点击了跳转至  edit页面按钮");
        this.$router.push({name:"edit",params:{id:ID}});
    }
  }
}
</script>

<style>

</style>
