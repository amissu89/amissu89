<template>
  <div class="card mb-3">
    <img src="../assets/img/logo.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">
        {{item.content}}
      </p>
      <p class="card-text">
        <small class="text-muted">{{item.date}}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name : "Article",
  props : {
    item : Object,
  }
};
</script>

<style>
.card-title{
  color : black;
}
.card-text {
  color : black;
}

.card-img-top{
  width : 400px;
  display: block;
  margin-left : auto;
  margin-right : auto;
}
</style>