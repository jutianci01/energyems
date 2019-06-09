<!-- html部分 -->
<template>
	<div>
		<h1>成本核算信息:</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			年份：<el-date-picker v-model="year" type="year" value-format='yyyy' placeholder="请选择年份" style='width:200px'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
	<center>
		<el-table :data="list">
			<el-table-column prop="devname" label="devname" width="180"></el-table-column>
			<el-table-column prop="amount" label="amount" width="220"></el-table-column>
			<el-table-column prop="consume" label="consume" width="180"></el-table-column>
			<el-table-column prop="cost" label="cost" width="220"></el-table-column>
		</el-table>
	</center>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				list:[]
	
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/cost "
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.list = res.data;
					})		
			}
		},
		mounted:function(){
			this.search();
			}
		}
	
</script>
<!-- css部分 -->
<style>

</style>
