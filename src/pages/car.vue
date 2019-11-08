<template>
 <div id="cart" class="product_b" style="padding:0;background: #fff;">
			<table id="goods_table" class="shoplist margincenter">
				<tr class="trnone"></tr>
				<tr class="toptr">
					<td width="40">
						<input type="checkbox" id="checkA" v-on:click="checkAll($event.currentTarget)"/><label for="checkA"></label>
					</td>
					<td width="100">全选</td>
					<td width="540">商品信息</td>
					<td width="100">单价</td>
					<td width="160">数量</td>
					<td width="100">小计</td>
					<td width="100">操作</td>
				</tr>
				<tr class="trnone"></tr>
				<tr v-for="(item,index) in list" :key="index">
					<td>
						<input type="checkbox" :id="'check'+index" name="checkboxs" v-model="checkeds[index]" />
						<label :for="'check'+index"></label>
					</td>
					<td>
						<img :src="'路径前缀/'+item.subimage1Filename" />
					</td>
					<td style="text-align:left;">
						<p>{{item.goodsTitle}}</p>
						<p>规格：{{item.specifications}}</p>
					</td>
					<td>￥{{item.unitPrice}}</td>
					<td class="adddel">
						<em v-on:click="minius(index)">-</em>
						<input type="number" v-model.number="item.purchaseQuantity" />
						<em v-on:click="add(index)">+</em>
					</td>
					<td>￥{{item.unitPrice * item.purchaseQuantity}}</td>
					<td>
						<button v-on:click="del(index)">删除</button>
					</td>
				</tr> 
				<tr class="trbottom">
					<td colspan="2">已选（{{checkNum}}）</td>
					<td colspan="5">
						<i>商品合计金额：</i>
						<em>￥{{sum.toFixed(2)}}</em>&nbsp;&nbsp;&nbsp;&nbsp;
						<button>下单</button>
					</td>
				</tr>
			</table>
		</div>
</template>
<script>
 
//   export default { 
      
      var cart; //Vue对象
		function createVue(list) {
			cart = new Vue({
				el: '#cart',
				data() {
					return {
						list: list,
						checkeds: new Array(list.length)
					}
				},
				computed: {
					sum: function () {
						let sum = 0;
						for (let i in this.list) {
							if (this.checkeds[i])
								sum += this.list[i].unitPrice * this.list[i].purchaseQuantity;
						}
						return sum;
					},
					checkNum: function () {
						let num = 0;
						for (let i in this.checkeds) {
							if (this.checkeds[i]) {
								num++;
							}
						}
						return num;
					}
				},
				methods: {
					del: function (index) {
						this.list.splice(index, 1);
						this.checkeds.splice(index,1); //同时删除对应的选中状态标识
					},
					add: function (index) {
						this.list[index].purchaseQuantity++;
					},
					minius: function (index) {
						if (this.list[index].purchaseQuantity > 1) {
							this.list[index].purchaseQuantity--;
						}
					},
					checkAll: function (event) {
						if (event.checked) {
							for (let i = 0; i < this.checkeds.length; i++) {
								Vue.set(this.checkeds, i, true);
							}
						} else {
							for (let i = 0; i < this.checkeds.length; i++) {
								Vue.set(this.checkeds, i, false);
							}
						}
					}
				}
			});
		}
		window.onload =	function () {
				//请求后台代码   。。。。
				//请求成功后将获得的list赋值给cart的list
				let list = [
					{
						goodsTitle: "卫龙辣条",							//商品名
						specifications: "大包",							//商品规格
						unitPrice: "5",									//商品单价
						subimage1Filename :"20180317eeftyd.jpg",		//商品图片名
						purchaseQuantity: 6								//商品数量
					}, 
					{
						goodsTitle: "雕牌洗衣粉",
						specifications: "大包",
						unitPrice: "13",
						subimage1Filename: "20180317ggptfg.jpg",
						purchaseQuantity: 1
					}, 
					{
						goodsTitle: "旺仔牛奶",
						specifications: "20盒装",
						unitPrice: "45",
						subimage1Filename: "20180317feftyp.jpg",
						purchaseQuantity: 1
					}
				]
				createVue(list);
			}
</script>
<style scoped>
    .container{width:100%; height:100%;font-size: 0.16rem}
    .title{font-size:16px;padding:10px;border-bottom : 1px solid #ddd;}
    .list{margin: 10px;box-sizing: border-box;}
    .item-li{margin: 10px 0;padding: 10px;background: #fff;box-shadow: 1px 0 5px rgba(0,0,0,.2)}
    .item{display: flex;align-items: center;justify-content: space-between;}
    .item-check{width: 20px;height: 20px;border:1px solid #333}
    .check-true {background: crimson}
    .item-image{width: 120px;height: 120px;padding: 10px;}
    .item-image img{width: 100%}
    .item-content{flex: 1}
    .item-quantity{background: cornflowerblue;height: 30px;display: flex;}
    .item-quantity span{display: inline-block;width: 30px;background: #ddd;font-size: 20px;text-align: center}
    .item-input{width: 50px;height: 100%;padding:0 5px;vertical-align: middle;display: inline-block;color: #fff;border:none;background: none;outline: none;}
    .list-bottom{position:fixed;bottom:0;height: 50px;width: 100%;display: flex;background: cornsilk;align-items: center;justify-content: space-between;}
    .list-bottom-left{padding:0 10px;display: flex;align-items: center;}
    .list-bottom-right{padding:0 10px;display: flex;align-items: center;background: darkorange;height: 50px;}
    .list-bottom-check{margin:10px;}
</style>
