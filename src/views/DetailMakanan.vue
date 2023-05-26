<template>
  <div class="detail-makanan">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Beranda</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/makanan" class="text-dark"
                  >Makanan</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/foto/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesanan">Jumlah</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="ket : Extra Pedas.."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart-plus></b-icon-cart-plus> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailMakanan",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$router.push({ path: "/keranjang" });
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((Response) => this.setProduct(Response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
