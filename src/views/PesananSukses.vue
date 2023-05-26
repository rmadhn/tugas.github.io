<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/foto/menunggu.png" width="300" />
          <h2><strong>Pesanan Berhasil dibuat!!</strong></h2>
          <h4>Sedang diproses<br />Mohon Tunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PesananSukses",
  components: {
    Navbar,
  },
};
</script>

<style></style>
