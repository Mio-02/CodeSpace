<script setup>
// 以组件为开发单元
import TodoList from './components/TodoList.vue'
import {ref} from 'vue'
// const todos = ref([
//   {text: 'hello'}
// ])
// todos 来到 可以用vuex的mapState 或者pinia
import { useTodoStore } from './store/todo'
const todoStore = useTodoStore()
const { todos, addTodo } = useTodoStore()
// console.log(todoStore.todos);
</script>

<template>
  <div>
    <TodoList 
      :todos="todoStore.todos"
      :addTodo="todoStore.addTodo"/>
  </div>
</template>

<style scoped>

</style>
