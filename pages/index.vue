<template>
  <div class="container">
    <p>
      user: {{ $store.getters.getUserName }}
    </p>
    <img :src=" $store.getters.getUserPhoto " />
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>todo</th>
          <th>limit</th>
       </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
          <td>{{todo.todo}}</td>
          <td>{{todo.limit}}</td>
        </tr>
      </tbody>
   </table>
   <div class="field is-grouped">
    <p class="control is-expanded">
      <input v-model="newTodo" class="input" type="text" placeholder="todo">
    </p>
    <p class="control is-expanded">
      <input v-model="newLimit" class="input" type="text" placeholder="limit">
    </p><br>
    <p class="control">
      <a class="button is-primary" @click="addTodo">
        add
      </a>
    </p>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newLimit: ''
    }
  },
  // computed() {
  //   return {
  //     url() {
  //       this.$store.dispatch('getUserPhoto')
  //     } 
  //   }
  // },
  methods: {
    login() {
      this.$store.dispatch('login')    
    },
    addTodo() {
      const todo = this.newTodo
      const limit = this.newLimit

      this.$store.dispatch('addTodo', {todo, limit});
      this.newTodo = '',
      this.newLimit = ''
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>