<template>
  <h3>Sản phẩm ....</h3>
  <div v-for="transaction in transaction" :key="transaction.index">
    <p>{{ transaction }}</p>
  </div>
</template>
<script>
// import storeApp from "@/store.js";
export default {
  name: "SanPhamApp",
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    console.log(this.$store.state.transaction);
    this.transaction = this.$store.state.transaction;
  },
};
</script>
