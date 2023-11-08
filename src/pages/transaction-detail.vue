<template>
  <div v-if="transactions != null">
    <h3>Transaction detail is here....</h3>
    <h2>ID: {{ $route.params.id }}</h2>
    <h2>{{ $route }}</h2>
    <p>Name: {{ transactions.name }}</p>
    <p>Price: {{ transactions.price }}</p>
  </div>
  <div v-else>
    <p>Loading transaction {{ $route.params.id }} ...</p>
  </div>
</template>

<script>
export default {
  name: "transaction-detail",
  // data() {
  //   return {
  //     transactions: null,
  //   };
  // },
  computed: {
    transactions() {
      return this.$store.state.transaction;
    },
  },
  created() {
    fetch(" http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
    this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
    this.$store.dispatch("testTransaction"); // chuyển từ commonent Vuex sang action bằng dispatch
  },
};
</script>
