<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="@/assets/img/lgtv.png" class="d-block w-100" alt="...">

            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/img/A-71.png" class="d-block w-100" alt="...">

            </div>
            <div class="carousel-item">
                <img src="@/assets/img/samsunglebas.png" class="d-block w-100" alt="...">

            </div>
            <div class="carousel-item">
                <img src="@/assets/img/lg-side.png" class="d-block w-100" alt="...">

            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.container-fluid {
    width: 100%;
    height: 80vh;
}

img {
    height: 70vh;
    object-fit: contain;
}

.carousel {
    width: 100%;
    background: #D8D9CF;
}

.carousel-control-prev-icon {
    color: #000;
}
</style>