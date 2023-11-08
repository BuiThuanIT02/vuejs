import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 10,
      transaction: null,
      transactions: [1, 2, 3, 4],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransactions(state, transactionPayLoad) {
      state.transaction = transactionPayLoad;
    },
  },
  getters: {
    transactionFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 == 0);
    },
  },
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransactions", data);
    },
    testTransaction(ctx) {
      // ctx: lấy ra đối tượng getters chứa commit
      console.log(ctx);
    },
  },
});
export default store;
