<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='设备名称' v-model='devname'></el-input> </el-col>
		</el-row>
		
		<el-row>
		<el-col :span="12"><el-select v-model='typeid' style='width: 300px; margin-top: 20px;' placeholder='设备类别'>
		<el-option v-for='(item,index) in baseDevtype' :value="item.typeid" :key="item.typeid" :label='item.typename'>{{item.typename}}</el-option>
		</el-select></el-col>
		</el-row>
		
		
		<el-row>
		<el-col :span="12"><el-select v-model='compid' style='width: 300px; margin-top: 20px;' placeholder='所属企业'>
		<el-option v-for='(obj,index) in baseCompany' :value="obj.compid" :key="obj.compid" :label='obj.compname' >{{obj.compname}}</el-option>
		</el-select></el-col>
		</el-row>
		
		<el-row>
		<el-col :span="12"><el-date-picker style='width: 300px; margin-top: 20px;' v-model="devdate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"> </el-date-picker> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='责任人' v-model='devuser'></el-input> </el-col>
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
				devname:'',
				baseDevtype:[],
				baseCompany:[],
				devdate:'',
				devuser:'',
				typeid:'',
				compid:'',
				devid:''
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,devdate:this.devdate,devuser:this.devuser,typeid:this.typeid,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
		var url = this.baseUrl+"/baseCompany/list"
		this.$axios.post(url,{
			headers: {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(res=>{
			this.baseCompany = res.data;
		})
		
		
		var url = this.baseUrl+"/baseDevtype/list"
		// 传递给后端的数据
		this.$axios.post(url,{
			headers: {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(res=>{
			// res是后端的响应
			this.baseDevtype = res.data;
		})
		
		
		//接收路由传递的数据
		var devid = this.$route.params.row;
		// 后端网址
		var url = this.baseUrl+"/baseDevice/load";
		// 传递给后端的数据
		var data = {devid:devid};
		this.$axios.post(url,this.$qs.stringify(data),{
			headers: {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(res=>{
			var obj = res.data;
			this.devid = obj.devid;
			this.devuser = obj.devuser;
			this.devname = obj.devname;
			this.devdate = obj.devdate;
			this.typeid = obj.typeid;	
			this.compid = obj.compid;
		})
	}
	}
</script>
<!-- css部分 -->
<style>

</style>