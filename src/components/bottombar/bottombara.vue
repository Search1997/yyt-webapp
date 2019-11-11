                  
 <template>
	<div class="footer">
		<div v-for='(item,index) of items' :key="index" :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
			<img :src="index===idx?item.iconSelect:item.icon">
			<p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
		</div>
 
	</div>
</template>
 
<script type="text/javascript">
	
	export default{
		props:['idx'],
		data(){
			return {
				items:[{
					cls:"home",
					name:"主页",
					push:"/home",
					icon:require("../../assets/may/00f1.png"),
					iconSelect:require("../../assets/may/00f1a.png")
				},
				{
					cls:"nav",
					name:"商城",
					push:"/nav",
					icon:require("../../assets/may/017a.png"),
					iconSelect:require("../../assets/may/017aa.png")
				},
				{
					cla:"discounts",
					name:"优惠",
					push:"/discounts",
					icon:require("../../assets/may/z6.png"),
					iconSelect:require("../../assets/may/z6a.png")
				},
				{
					cla:"my",
					name:"我的",
					push:"/my",
					icon:require("../../assets/may/810vs.png"),
					iconSelect:require("../../assets/may/810vsa.png")
				}]
			}
		}
	} 
 </script>      
 <style scoped>
 .footer{
    display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	height: 0.7rem;
	background: whitesmoke;
	width: 100%;
	}	
	div{
		flex: 1;
		font-size: 30px;
		   text-align: center;
	}
	div img{
		width: 30px;
		height: 30px;
	}
	div p{
		 font-size: 0.16rem;
         text-align: center;
         color: rgb(51,51,51);
	}
	.on{
		color: red;
	}
 </style>