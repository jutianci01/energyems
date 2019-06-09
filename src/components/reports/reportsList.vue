<!-- html部分 -->
<template>
	<div id="app">
		<h1>流程作业量对比图</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			年份：<el-date-picker v-model="year" type="year" value-format='yyyy' placeholder="请选择年份" style='width:200px'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<ve-candle :data="chartData"></ve-candle>
		 <h1>设备类别作业量对比图 (单位：万吨)</h1>
		 <ve-radar :data="chartData1"></ve-radar>
		<h1>设备作业量对比图 (单位：万吨)</h1>
		 <ve-waterfall :data="chartData2"></ve-waterfall>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				chartData:{},
				chartData1:{},
				chartData2:{}
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/jobAmount/flowAmount"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData = res.data;
					})
					// 后端网址
					var url1 = this.baseUrl + "/jobAmount/devTypeAmount"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url1, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData1 = res.data;
					})
					
					// 后端网址
					var url2 = this.baseUrl + "/jobAmount/devAmount"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url2, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData2 = res.data;
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
