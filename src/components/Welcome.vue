<template>


    <div class="w-5/6 mx-auto ">

        <div class="absolute w-5/6 h-[70vh]  welcome-container rounded">
            <div class="filter">

            </div>
        </div>
        <div
            class="w-full px-6 h-[70vh] rounded mx-auto  flex div-img flex-col md:flex-row  justify-between align-center">

            <div class="opacity-100  z-10 flex-1 pt-40 md:pt-0">
                <h3 class="
            py-10
           
            text-yellow-500 font-sans text-center text-5xl md:text-6xl font-extrabold uppercase 2xl:text-7xl">Welcome</h3>

                <p
                    class="text-black bg-white py-5 text-center text-1xl md:text-2xl 2xl:text-4xl font-mono   font-bold p-1 rounded">
                    Immerse yourself in the authentic flavor of our chicha, a traditional drink full of history and
                    tradition.</p>
            </div>


        </div>
    </div>
</template>

<style scoped>
.welcome-container {


    background-image: url('/public/img/chicha-morada.jpg');
    background-size: cover;

    z-index: 1;

}
.filter{
    height: 70vh !important;
    width: 100%;
    z-index: 20;
    background-color: black;
    filter: brightness(0) opacity(0.5);
    border-radius:10px;
}
</style>