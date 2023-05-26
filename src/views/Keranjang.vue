<template>
  <div class="keranjang">
    <navbar :updateKeranjang="keranjangs" />
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
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Ket</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/foto/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pesanan }}</td>
                  <td>Rp.{{ keranjang.products.harga }}</td>
                  <td>
                    <strong
                      >Rp.{{
                        keranjang.products.harga * keranjang.jumlah_pesanan
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td>
                    <strong>Rp.{{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama :</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja :</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.noMeja"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success float-right"
              @click="chekout"
            >
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
  name: "KeranJang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios.delete("http://localhost:3000/keranjangs/" + id).then(() => {
        console.log("Berhasil");
      });
      axios
        .get("http://localhost:3000/keranjangs")
        .then((Response) => this.setKeranjangs(Response.data))
        .catch((error) => console.log(error));
    },
    chekout() {
      this.pesan.keranjangs = this.keranjangs;
      axios
        .post("http://localhost:3000/pesanans", this.pesan)
        .then(() => {
          this.keranjangs.map(function (item) {
            return axios.delete("http://localhost:3000/keranjangs/" + item.id);
          });
          this.$router.push({ path: "/pesanan-sukses" });
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((Response) => this.setKeranjangs(Response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pesanan;
      }, 0);
    },
  },
};
</script>

<style></style>
