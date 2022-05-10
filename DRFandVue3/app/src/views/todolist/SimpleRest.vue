<template>
<div class="view-todolist-simple-rest page-view simple-rest text-left">
  <div class="title">{{ info.view_title }}</div>

  <q-input type="text" class="new-todo" 
    v-model="new_todo" :label="new_todo_label"
    @keyup.enter="addTodo" @keyup.escape="cancelTodo">
    <template v-slot:before>
      <q-checkbox v-model="toggle_all_state" @click="toggleAll"
        checked-icon="task_alt" unchecked-icon="radio_button_unchecked"/>
    </template>
    <template v-slot:append>
      <q-btn round dense flat icon="add" @click="addTodo"/>
    </template>
  </q-input>

  <div class="text-right">
    <q-radio v-for="key in Object.keys(info.todo_group)" :key="key"
      v-model="select_todo_group" :class="key" class="filter"
      :val="key" :label="info.todo_group[key]"/>
  </div>

  <q-list v-if="filtered_todos.length" class="todo-list">
    <q-item clickable 
      class="items-center todo-item"
      :class="{ completed: todo.is_completed }"
      v-for="todo in filtered_todos" :key="todo.id">
      <q-item-section side>
        <q-checkbox v-model="todo.is_completed"
          checked-icon="task_alt" unchecked-icon="radio_button_unchecked"
          @click="toggleTodo(todo)"/>
      </q-item-section>
      <q-item-section>
        <div>
          {{ todo.title }}
        </div>
      </q-item-section>
      <q-item-section side>
        <q-btn flat dense round icon="delete" size="12px"
          @click="deleteTodo(todo)"/>
      </q-item-section>
    </q-item>
  </q-list>
  <div v-else class="non-todo-list text-center">
    {{ info.empty_todos }}
  </div>

  <!-- Modal Dialog -->
  <q-dialog v-model="error_dialog" 
    persistent transition-show="scale"
    transition-hide="scale">
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6 items-center row">
          <q-icon name="new_releases" size="23px"/> &nbsp; {{ error_display.title }}
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ error_display.message }}
      </q-card-section>
      <q-card-actions align="center" class="bg-white text-teal"
        style="cursor: pointer">
        <q-icon size="30px" clickable name="check_circle" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>

</div>
</template>


<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import axios from 'axios'

const info = {
  view_title: 'Simple Todo List Using REST API',
  new_label_empty: '이곳에 새로운 일정을 입력하세요.',
  new_label: '새 일정:',
  empty_todos: '등록된 일정이 없습니다.',
  todo_group: { all: '모두', active: '진행 중', completed: '완료' },
}

const new_todo = ref('')
const todos = ref([])
const new_todo_label = ref(info.new_label_empty)
const toggle_all_state = ref(false)
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

const addTodo = async (e) => {
  if (!new_todo.value.length) return;

  const new_obj = {
    title: new_todo.value,
  }

  await axios
    .post('/api/simple-todo/', new_obj)
    .then(response => {
      // 무조건 배열의 0번째 항목으로 입력함.
      todos.value.unshift(response.data);
    })
    .catch(error => {
      errorHandling(error);
    })

  e.target.focus()
  new_todo.value = ''
}

const cancelTodo = () => {
  new_todo.value = '';
}

const toggleAll = () => {
  filtered_todos.value.forEach((todo) => {
    todo.is_completed = toggle_all_state.value;
    toggleTodo(todo);
  });
}

const toggleTodo = async (todo) => {
  await axios
    .put(`/api/simple-todo/${todo.id}/`, todo)
    .then()
    .catch(error => {
      errorHandling(error);
    });
}

const deleteTodo = async (todo) => {
  todos.value.splice(todos.value.indexOf(todo), 1);
  todo.is_deleted = true;
  await axios
    .put(`/api/simple-todo/${todo.id}/`, todo)
    .then()
    .catch(error => {
      errorHandling(error);
    });
}

const getAllFromServer = async () => {
  await axios
    .get('/api/simple-todo/')
    .then(response => {
      todos.value = response.data;
    })
    .catch(error => {
      errorHandling(error);
    });
}

onMounted(() => {
  getAllFromServer()
});

const error_display = ref({ 
  title: '시스템 오류', 
  message: '시스템에 장애가 발생하였습니다. 관리자에게 문의하세요.',
});
const error_dialog = ref(false);
const errorHandling = (error) => {
  console.log(error)
  error_dialog.value = true;  
}
</script>