import { ref } from "vue";
export default function () {
  const transactions = ref([]);
  const error = ref(null);
  console.log("Mảng Transactions: " + Array.isArray(transactions.value)); // true
  const fetchAPI = async () => {
    try {
      const respone = await fetch("http://localhost:3000/transactions");
      if (!respone.ok) {
        throw new Error("Something went Erro.");
      } // await chờ đợi chuyển từ JSON sang JSON
      transactions.value = await respone.json(); // respone.json() trả về đtg Promise , await chờ chuyển về js (đỡ phải sd .then)
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };
  return { transactions, error, fetchAPI }; //dùng cái nào thì return cái đó
}
