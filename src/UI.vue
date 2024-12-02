<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Navigation</h2>
    </div>
    <div class="sidebar-menu">
      <button class="sidebar-btn" :class="{ active: currentTab === 'Expense' }" @click="showExpense">Expense</button>
      <button class="sidebar-btn" :class="{ active: currentTab === 'Income' }" @click="showIncome">Income</button>
      <button class="sidebar-btn" :class="{ active: currentTab === 'Summary' }" @click="showSummary">Summary</button>
    </div>
  </div>
  <div class="content">
    <component :is="currentComponent" />
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import Expense from './Expense.vue';
  import Income from './Income.vue';
  import Summary from './Summary.vue';
  
  const currentComponent = ref(null);
  const currentTab = ref('');
  
  const showExpense = () => {
    currentComponent.value = Expense;
    currentTab.value = 'Expense';
  };

  const showIncome = () => {
    currentComponent.value = Income;
    currentTab.value = 'Income';
  };

  const showSummary = () => {
    currentComponent.value = Summary;
    currentTab.value = 'Summary';
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    width: 250px;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
    border-right: 1px solid #ccc;
    float: left;
  }
  
  .sidebar-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .sidebar-title {
    margin: 0;
    color: #333;
  }
  
  .sidebar-menu {
    display: flex;
    flex-direction: column;
  }
  
  .sidebar-btn {
    padding: 10px;
    text-align: left;
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .sidebar-btn:hover {
    background-color: #d0d0d0;
  }
  
  .content {
    padding: 20px;
    margin-left: 250px;
  }
  .active {
  background-color: rgb(0, 195, 255); 
}
  </style>
  