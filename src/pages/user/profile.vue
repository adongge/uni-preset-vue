<template>
	<view class="content">
		<!-- 头像 -->
		<view class='avator-area' v-if="user.id>-1">
			<!-- <image class='avator' :src="`https://static.app.com/app1/avator/${user.id}.png`"></image> -->
		</view>
		<!-- 头像 end -->
		
		<!-- 昵称 -->
		<view class="nickname">
			<text class='nickname-text'>{{user.nickname}}</text>
		</view>
		<!-- 昵称 end -->


		<!-- 功能列表 -->
		<viev class="list">
			<!-- 关于 -->
			<view class="list-item">
				<view class="item-icon">
					<uni-icons type="info" size="20" color="#7980ff"></uni-icons>
				</view>
				<view class="item-text">
					<text class='list-item-text'>关于</text>
				</view>
				<view class="item-action">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			<!-- 关于 end -->
		
			<!-- 功能1 -->
			<view class="list-item">
				<view class="item-icon">
					<uni-icons type="compose" size="20" color="#7980ff"></uni-icons>
				</view>
				<view class="item-text">
					<text class='list-item-text'>功能1</text>
				</view>
				<view class="item-action">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			<!-- 功能1 end -->
		
			<!-- 功能2 -->
			<view class="list-item">
				<view class="item-icon">
					<uni-icons type="gear" size="20" color="#7980ff"></uni-icons>
				</view>
				<view class="item-text">
					<text class='list-item-text'>功能2</text>
				</view>
				<view class="item-action">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			<!-- 功能2 end -->

		</viev>
		<!-- 功能列表 end -->

		<!-- 广告 -->
		<!-- 广告 end -->
		
	</view>
</template>

<script>
import { utils } from '@/common/utils'
import { profile } from '@/api/user'
export default {
	data() {
		return {
			user: {
				id: -1,
				nickname: '微信用户'
			}
		}
	},
	onLoad() {
	},
	onShow() {
		utils.setTabbar(1)

		this.user = {
			id: utils.getUserId(),
			nickname: '微信用户'
		}

		profile().then((res) => {
			console.log(res)
		})
		
	},
	methods: {
	},
}
</script>

<style>
	page{background: #ffffff;}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-top: 1px solid rgba(49, 57, 79, 0.08);
	}
	
	.avator-area{
		background-color: #ffffff;
		border-radius: 100%;
		text-align: center;
		overflow: hidden;
		width: 80px;
		height: 80px;
		margin-top: 32px;
	}
	
	.avator{
		width: 80px;
		height: 80px;
	}

	.nickname{
		margin-top: 20px;
	}

	.nickname-text{
		color: #31394f;
    	font-weight: 700;
	}
	
	.list{
		margin-top: 32px;
		width: 90%;
	}
	.list .list-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 16px 0;
		border-bottom: 1px solid rgba(49, 57, 79, 0.08);
	}
	.list .list-item .item-icon{
		width: 36px;
		height: 36px;
		border-radius: 12px;
		background-color: #f6f5f7;
		display: flex;
    	align-items: center;
    	justify-content: center;
		margin-right: 10px;
	}
	.list .list-item .item-text{
		flex: 1;
	}
	.list .list-item .item-action{
		width: 30px;
	}
	.list .list-item .item-action .list-item-text{
		color: #31394f;
		font-weight: 700;
	}
</style>
