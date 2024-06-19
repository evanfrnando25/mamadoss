<template>
    <div class="banner">
        <div class="banner__wrapper">
            <h1>
                #MakeYourMood<br />
                with <span>Mamoods</span>
            </h1>
        </div>
    </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
    .banner {
        background-image: url('@/assets/img/banner.png');
        height: 100vh;
        background-size: cover;

        &__wrapper {
            padding: 25% 8%;

            @media (max-width: 768px) {
                padding: 40% 5%;
            }

            @media (max-width: 520px) {
                padding: 50% 5%;
            }

            @media (max-width: 450px) {
                padding: 55% 5%;
            }

            @media (max-width: 360px) {
                padding: 70% 5%;
            }

            @media (max-width: 320px) {
                padding: 90% 5%;
            }

            h1 {
                font-size: 80px;
                color: #ffed00;

                @media (max-width: 768px) {
                    font-size: 60px;
                }

                @media (max-width: 520px) {
                    font-size: 50px;
                }

                @media (max-width: 450px) {
                    font-size: 40px;
                }

                @media (max-width: 360px) {
                    font-size: 35px;
                }

                @media (max-width: 320px) {
                    font-size: 25px;
                }

                span {
                    text-decoration: underline;
                    font-weight: 800;
                    font-family: 'Migra', sans-serif;
                    text-shadow: 0 0 5px transparent, 0 0 10px #ffffff, 0 0 15px transparent,
                        0 0 20px transparent, 0 0 25px transparent, 0 0 30px transparent,
                        0 0 35px transparent;
                }
            }
        }
    }
</style>
