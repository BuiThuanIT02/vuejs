<template>
  <h1>Transaction....</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: 'transaction-detail-router',
        params: { id: transaction.id },
      }"
    >
      {{ transaction.name }}
    </router-link>
  </div>
</template>
<script>
import userTransations from "../uses/fetchTransactions";
export default {
  name: "TransactionsApp",
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => response.json()) // respon.json mới là promise
  //     .then((data) => (this.transactions = data));
  // },
  setup() {
    console.log(userTransations()); // trả về đối tượng chứa các giá trị trả về
    const { transactions, error, fetchAPI } = userTransations();
    fetchAPI();
    return { transactions, error };
  },
};
</script>
