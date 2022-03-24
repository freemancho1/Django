<template>
<div class="view-todolist-simple-rest page-view simple-rest text-left">
  <div class="title">{{ info.view_title }}</div>

  <q-input type="text" class="new-todo" 
    v-model="new_todo" :label="new_todo_label"
    @keyup.enter="addTodo" @keyup.escape="cancelTodo">
    <template v-slot:before>
      <q-checkbox v-model="toggle_all" @click="toggleAll"
        checked-icon="task_alt" unchecked-icon="radio_button_unchecked"/>
    </template>
    <template v-slot:append>
      <q-btn round dense flat icon="add" @click="addTodo"/>
    </template>
  </q-input>

  <div class="select-todo-group text-right">
    <q-radio v-for="key in Object.keys(info.todo_group)" :key="key"
      v-model="select_todo_group" 
      :val="key" :label="info.todo_group[key]"/>
  </div>

  <q-list v-if="filtered_todos.length" class="todo-list">
    <q-item clickable v-for="todo in filtered_todos" :key="todo.id">
      <q-item-section side>
        <q-checkbox v-model="todo.is_completed"
          checked-icon="task_alt" unchecked-icon="radio_button_unchecked"
          @click="toggleTodo(todo)"/>
      </q-item-section>
      <q-item-section>
        <div class="todo-item" :class="{ completed: todo.is_completed }">
          {{ todo.title }}
        </div>
      </q-item-section>
      <q-item-section side>
        <q-btn flat dense round icon="delete" size="15px"
          @click="deleteTodo(todo)"/>
      </q-item-section>
    </q-item>
  </q-list>
  <div v-else class="non-todo-list">{{ info.empty_todos }}</div>

</div>
</template>


<script setup>
import { ref, watch, computed } from 'vue'

const info = {
  view_title: 'Simple Todo List Using REST API',
  new_label_empty: '이곳에 새로운 일정을 입력하세요.',
  new_label: '새 일정:',
  empty_todos: '등록된 일정이 없습니다.',
  todo_group: { all: '모두', active: '진행 중', completed: '완료' },
}
let todo_id = 0
const new_todo = ref('')
const todos = ref([])
const new_todo_label = ref(info.new_label_empty)
const toggle_all = ref(false)
watch(new_todo, (newNewTodo) => {
  new_todo_label.value = newNewTodo.length ? 
                         info.new_label : info.new_label_empty
})

const select_todo_group = ref(Object.keys(info.todo_group)[0])
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.is_completed ),
  completed: (todos) => todos.filter((todo) => todo.is_completed ),
}
const filtered_todos = computed(() => filters[select_todo_group.value](todos.value))

const addTodo = (e) => {
  if (!new_todo.value.length) return 
  const new_obj = {
    id: todo_id++,
    title: new_todo.value,
    is_completed: false,
  }
  todos.value.push(new_obj)

  e.target.focus()
  new_todo.value = ''
}
const cancelTodo = () => {}
const toggleAll = () => {}
const toggleTodo = (todo) => {console.log(todo)}
const deleteTodo = (todo) => {console.log(todo)}
</script>