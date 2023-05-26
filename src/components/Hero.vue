<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center-align-self-center">
              <h2><strong>Populer Food, </strong> <br />in Internet</h2>
              <p>what you like?</p>
              <router-link class="btn btn-lg btn-success" to="/Makanan">
                <b-icon-arrow-right></b-icon-arrow-right> Buy it
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/foto/hero.svg" width="100%" />
        </div>
      </div>
    </div>

    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-2">
          <img src="../assets/foto/hero.svg" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center-align-self-center">
              <h2><strong>Populer Food, </strong> <br />in Internet</h2>
              <p>what you like?</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right> Buy it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeRo",
};
</script>

<style></style>
