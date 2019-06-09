<template>
	<div>
		<h1 style="text-align: center">设备类别信息</h1>
			<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='类别名称' v-model='search_cname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="userid" label="ID" width="180"></el-table-column>
				<el-table-column prop="cname" label="名字" width="220"></el-table-column>
					<el-table-column prop="username" label="用户名" width="180"></el-table-column>
				<el-table-column prop="password" label="密码" width="220"></el-table-column>
					<el-table-column prop="telno" label="电话" width="180"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="220"></el-table-column>
					<el-table-column prop="sex" label="性别" width="180"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="id" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.userid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_cname:'',
				list:[]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'usertypeEdit',params:{row:row}})
			},
			del(userid){
				// 后端网址
				var url = this.baseUrl+"/baseUser/delete"
				// 传递给后端的数据
				var data = {userid:userid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/userAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/search"
				// 传递给后端的数据
				var data = {cname:this.search_cname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
		
	}
</script>

<style>

</style>
