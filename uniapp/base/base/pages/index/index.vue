<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
		
		<song></song>
	</view>
</template>

<script setup>
	import { computed, ref } from 'vue'
	import song from '../../components/song/song.vue'
	
	const title = ref('你好')
	
	const changeTitle = () => {
		title.value = title.value === '你好' ? 'Hello' : '你好'
	}
	
	const reverseTitle = computed(() => {
		return title.value.split('').reverse().join('')
	})
</script>

<style>

</style>
