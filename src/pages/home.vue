<template>
  <h1>Home router View</h1>
  <p>{{ firstName }}</p>
  <p>{{ car }}</p>
  <button @click="onChanges">Changes</button>
  <br />
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(custemor, index) in custemotFill" :key="index">
      {{ custemor }}
    </li>
  </ul>
</template>
<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "HomeApp",
  created() {
    console.log(this.$store.state.count); // trả về đối tượng store
  },
  props: {
    theme: {
      type: String,
      required: false,
      default: "Tôi là Props",
    },
  },
  setup(props, context) {
    console.log(props.theme);
    console.log(typeof context); // context: là một đối tượng có nhiều phg thức khác
    const firstName = ref("I am Sky");
    // I am Sky đc lưu vào Object
    let second = ref({
      name: "Haha",
      price: 5000,
    });
    let car = reactive({
      price: 1000,
      name: "Mec",
    });
    function onChanges() {
      console.log(firstName); // ref Object(thay đổi giá trị cả chính nó hiện ở màn hình) do nó có cặp get set ngoài cx nên thay đổi tất cả dl đc thg dug cho string , number
      console.log(car); //Proxy Object get set ở bên trong nên chỉ thay đổi đc giá trị, sd vs array , object chỉ thay đổi từng giá trị, không thay đổi cả cụm lớn
      car = {
        price: 6000,
        name: "Linh",
      };
      console.log(second);
      console.log(car);
      firstName.value = "Tran Toan";
    }
    //Computed
    const searchText = ref("");
    const custemors = reactive(["Something", "Hello", "I am Sky"]);
    const custemotFill = computed(() =>
      custemors
        .map((custemor) => {
          custemor = custemor.toLowerCase();
          return custemor;
        })
        .filter((custemor) => custemor.includes(searchText.value.toLowerCase()))
    );

    // Watch dùng để giám sát sự thay đổi của searchText, pa: giá trị mới, pb giá trị cũ
    watch(searchText, (pa, pb) => {
      console.log(pa, pb);
    });

    //watchEffect:không trả về giá trị
    watchEffect(() => {
      if (searchText.value) {
        console.log("run age...");
      }
    });
    return { searchText, custemotFill, custemors, car, firstName, onChanges };
  },
};
</script>
