<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'transaction-router' }">Tin tức</router-link>
    <router-link to="/">Liên hệ</router-link>
    <slot name="header"></slot>
    <router-link to="/san-pham">Sản phẩm</router-link>
    <router-link to="/trang-tri">Trang trí</router-link>
  </nav>
</template>
<script>
export default {
  name: "NavApp",
};
</script>
