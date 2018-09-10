<template>
  <card>
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent"
      @reset="handleReset"
      @query="getList"
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
  methods: {
    getList(){
      let params = [this.currentPage,this.pageSize];
      this.queryList && this.queryList.forEach(item => {
        params.push(item.val)
      })
      this.listApi(...params)
      .then(res => {
        if(res.state == 0){
          this.tableContent = res.data.data.rows;
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
        this.$router.push({name:this.detailPath,query:{id:1}})
      }else if(tag == 'edit'){
        this.$router.push({name:this.editPath})
      }
    }
  }
};
</script>
