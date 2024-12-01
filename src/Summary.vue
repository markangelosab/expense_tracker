<template>
    <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg border border-gray-300 Override">
      <h1 class="text-4xl text-center text-gray-800 mb-5 bold">Summary</h1>
      <div class="summary-container border border-gray-300">
        <div class="summary">
          <div class="summary-item">
            <h2 class="summary-title">Total Income:</h2>
            <p class="summary-value">₱{{ parseFloat(totalIncome).toFixed(2) }}</p>
          </div>
          <div class="summary-item">
            <h2 class="summary-title">Total Expense:</h2>
            <p class="summary-value">₱{{ parseFloat(totalExpense).toFixed(2) }}</p>
          </div>
          <div class="summary-item">
            <h2 class="summary-title">Balance:</h2>
            <p class="summary-value">₱{{ parseFloat(balance).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
  import db from './firebase/config';
  
  const expenses = ref([]);
  const incomes = ref([]);
  
  const fetchExpenses = async () => {
      const q = query(collection(db, 'Expense_tracker'), orderBy('dateTime', 'desc'));
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        expenses.value = snapshot.docs
            .map(doc => doc.data())
            .filter(expense => expense.type === 'expense');
      });
  };
  
  const fetchIncomes = async () => {
      const q = query(collection(db, 'Expense_tracker'), orderBy('dateTime', 'desc'));
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        incomes.value = snapshot.docs
            .map(doc => doc.data())
            .filter(expense => expense.type === 'income');
      });
  };
  
  fetchExpenses();
  fetchIncomes();
  
  const totalIncome = computed(() => {
      return incomes.value.reduce((total, income) => total + parseFloat(income.amount), 0);
  });
  
  const totalExpense = computed(() => {
      return expenses.value.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  });
  
  const balance = computed(() => {
      return totalIncome.value - totalExpense.value;
  });
  </script>
  
  <style scoped>
  .summary-container {
    display: flex;
    justify-content: center;
  }

  .Override{
    margin-top: 130px;
  }
  
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .summary-item {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .summary-title {
    font-size: 24px;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 5px;
  }
  
  .summary-value {
    font-size: 28px;
    font-weight: bold;
    color: #007bff;
    font-family: 'Courier New', Courier, monospace;
  }
  </style>
  