<template>
    <img class="img-logo" src="@/assets/logo.png" alt="">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">
                            خانه
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/about">
                            درباره ما
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/rules">
                            قوانین
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/represent">
                            نمایندگی ها
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/products">
                            محصولات
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/interested">
                            علاقه مندی های شما
                        </router-link>
                    </li>
                   
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/questions">
                            سوالی دارید؟
                        </router-link>
                    </li>
                   
                   
                </ul>
                <div class="left_side_nav">
                    <span class="login_span">
                        <router-link to="/login" class="router">
                            <i class="login-logo bi bi-box-arrow-in-right"></i>
                            <p class="mt-2">ورود | ثبت نام</p>
                            <i class="login-logo bi bi-person-plus-fill m-1"></i>
                        </router-link>
                    </span>
                    <span>
                        <router-link to="/card" class="router">
                            <span>سبدخرید</span>
                          <span class="badge rounded-pill bg-primary me-1">{{totalCard}}</span>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
export default {
setup(){
    const store=useStore()
    const totalCard=computed(()=>store.getters.count)
    return {totalCard}
}
}
</script>

<style scoped>
.navbar {
    background-color: #EDEDED;
}

.nav-link:hover {
    border-bottom: 3px solid #000;
}

.img-logo {
    width: 100%;
    object-fit: cover;
}

h1 {
    font-size: 2rem;
    font-weight: bold;
    color: red;
    font-style: italic;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.left_side_nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

.login_span {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(78, 78, 78);
    border-radius: 5px;
    margin-left: 15px;
}

.login-logo {
    font-size: 1.5rem;
    color: rgb(78, 78, 78);
}

.basket {
    font-size: 1.7rem;
    color: rgb(78, 78, 78);
}

.router {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(78, 78, 78);
}
</style>