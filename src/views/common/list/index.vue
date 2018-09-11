<template>
  <card>
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :pageTotal="pageTotal"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent"
      @reset="handleReset"
      @query="getList"
      @size-change="val => pageSize=val"
      @page-change="val => currentPage=val"
      @show-view="row => showChildCom('detail',row)"
      @show-edit="row => showChildCom('edit',row)">
    </list-page>
  </card>
</template>

<script>
// @ is an alias to /src
import apiList from '@/api/common/list';
import queryList from './data/queryList'
import tableHeader from './data/tableHeader'
import editPath from './data/editPath'
import detailPath from './data/detailPath'

export default {
  data(){
    let pathName = this.$route.name
    return{
      currentPage:1,
      pageSize:10,
      pageTotal:0,
      queryList: queryList[pathName],
      tableHeader:tableHeader[pathName],
      editPath:editPath[pathName],
      detailPath:detailPath[pathName],
      listApi:apiList.list[pathName],
      editApi:apiList.edit[pathName],
      detailApi:apiList.detail[pathName],
      tableContent: [],
      comContent:''
    }
  },
  mounted(){
    this.getList();
  },
  watch:{
    'currentPage': 'getList',
    'pageSize': 'getList'
  },
  methods: {
    getList(){
      let params = [this.currentPage,this.pageSize];
      this.queryList && this.queryList.forEach(item => {
        params.push(item.val)
      })
      this.listApi(...params)
      .then(res => {
        if(res.state == 0){
          this.tableContent = $utils.getDeepKey(res,'data.data.rows');
          this.pageTotal = $utils.getDeepKey(res, 'data.data.pageCount') * 10;
          if(this.tableContent.length){
            this.tableContent.forEach(item => {
              // 链接加参数
              for(let key in this.tableHeader){
                if(this.tableHeader[key].query){
                  this.tableHeader[key].params = {}
                  this.tableHeader[key].query.forEach(val => {
                    this.tableHeader[key].params[val.name] = item[val.field]
                  })
                }
              }
              // 操作加参数
              let arr = [this.editPath,this.detailPath];
              arr.forEach(val => {
                if(val.query){
                  val.params = {}
                  val.query.forEach(val1 => {
                    val.params[val1.name] = item[val1.field]
                  })
                }
              })
            })
          }
        }
      })
    },
    handleReset(){
      this.queryList && this.queryList.forEach(item => {
        item.val = ''
      })
    },
    showChildCom(tag,row){
      if(tag == 'detail'){
        this.$router.push({name:this.detailPath.pathName,query:this.detailPath.params})
      }else if(tag == 'edit'){
        this.$router.push({name:this.editPath.pathName,query:this.editPath.params})
      }
    }
  }
};
</script>
