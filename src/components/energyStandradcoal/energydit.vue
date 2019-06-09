<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改折标煤系数信息</h1>	
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='能源类别' v-model='energetype'></el-input> </el-col>
		</el-row>
				
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='系数' v-model='ratio'></el-input> </el-col>
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				sid:'',
				energetype:'',
				ratio:''
			};
		},
		methods:{
				saveAdd(){
		// 后端网址
		var url = this.baseUrl+"/energyStandradcoal/update"
		// 传递给后端的数据
		var data = {sid:this.sid,energetype:this.energetype,ratio:this.ratio};
		this.$axios.post(url,this.$qs.stringify(data),{
			headers: {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(res=>{
			// res是后端的响应
			this.$message("更新成功");
			this.$router.push({path:'/energyList'});
		})
	},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){

				//接收路由传递的数据
			var sid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/energyStandradcoal/load"
			// 传递给后端的数据
			var data = {sid:sid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.sid = obj.sid;
				this.energetype = obj.energetype;
				this.ratio = obj.ratio;
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>