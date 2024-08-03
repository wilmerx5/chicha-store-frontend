<script setup>

</script>
<template>

    <footer class="footer  mt-14 flex justify-between">
        <div class="gradient translate-y-20 md:max-h-25vh">

        </div>

        <div class="flex flex-col justify-end ">
            <img src="/img/indigena.png" alt="" class="w-30vw md:w-35vw">
        </div>
        <div class="flex flex-col justify-end flex-2">
            <p class=" text-sm"> &copy; CHICHA STORE 2024 ...</p>
        </div>
        <div class="flex flex-col justify-end flex-2">
            <div class="flex gap-2 pr-6 pb-2">
                <i class="fab fa-twitter text-white"></i>
                <i class="fab fa-facebook text-white"></i>
                <i class="fab fa-instagram text-white"></i> <!-- Icono de Twitter -->
            </div>

        </div>


    </footer>
</template>

<style scoped>
.footer {
    height: 25vh;
}

.gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 20vh;
    transform: translateY(5vh);

    z-index: -1;
    background: rgb(196, 140, 40);
    background: linear-gradient(135deg, rgba(196, 140, 40, 1) 36%, rgba(223, 211, 33, 1) 62%);
}

img {
    max-width: 29vh;
}

@media (max-width:500px) {
    .gradient {
        max-height: 10vh;
        background-color: red !important;
        transform: translateY(15vh);


    }
}
</style>
