<template>
  <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/home">홈으로</router-link> <br> 
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/list">글보기</router-link> <br> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">글쓰기</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                이녹희는...
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">양갱이와</a></li>
                <li><a class="dropdown-item" href="#">희록재에서</a></li>
              </ul>
            </li>
          </ul>
          <button class="btn btn-outline-success">
              로그인
            </button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name : "NavTop",
}
</script>

<style>

</style>