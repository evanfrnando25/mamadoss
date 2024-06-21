<template>
    <div class="banner">
        <div class="banner__wrapper">
            <h1>
                #MakeYourMood<br />
                with <span>Mamoods</span>
            </h1>
            <span class="banner__icon">
                <Icon name="ic:outline-keyboard-arrow-down" />
            </span>
        </div>
    </div>
    <div class="menu">
        <div class="menu__header">
            <h2>What Boost Your Mood</h2>
        </div>
        <div class="menu__list">
            <transition
                v-for="(items, index) in cardListMenu"
                :key="index"
                name="flip"
                mode="out-in"
            >
                <div
                    :key="items.back"
                    @click="toogleFlipped(items.front)"
                    v-if="currentForm === `${items.front}`"
                >
                    <q-card class="my-card">
                        <q-card-section>
                            <div class="menu__list__card">
                                <span class="menu__list__card__title"> Title </span>
                                <span class="menu__list__card__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laudantium ipsam consequuntur iste distinctio! Neque, doloribus,
                                </span>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div :key="items.front" @click="toogleFlipped(items.front)" v-else>
                    <q-card class="my-card">
                        <q-card-section>
                            <div class="menu__list__wrapper">
                                <div class="menu__list__img">
                                    <img :src="items.image" />
                                </div>
                                <div class="menu__list__title">
                                    <h5>{{ items.name.toUpperCase() }}</h5>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </transition>
        </div>
        <div class="menu__more">
            <span>SEE ALL MENU</span>
        </div>
    </div>
    <div class="contact">
        <div class="contact__wrapper">
            <div class="contact__greetings">
                <h2>SEE YOU SOON!</h2>
            </div>
            <div class="contact__whatsapp">
                <span><Icon name="ic:baseline-whatsapp" /></span>
                <h5>081 234 567 890</h5>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const cardListMenu = ref([
                {
                    id: 1,
                    name: 'kebab',
                    image: '/menu/menu-1.png',
                    front: 'kebabFront',
                    back: 'kebabBack',
                },
                {
                    id: 2,
                    name: 'shawarma',
                    image: '/menu/menu-2.png',
                    front: 'shawarnaFront',
                    back: 'shawarnaBack',
                },
                {
                    id: 3,
                    name: 'kabsah rice',
                    image: '/menu/menu-3.png',
                    front: 'kabsahFront',
                    back: 'kabsahBack',
                },
            ])
            const currentForm = ref<number | null>(null)

            const toogleFlipped = (id: any) => {
                if (currentForm.value === id) {
                    currentForm.value = null
                } else {
                    currentForm.value = id
                }
            }

            return {
                currentForm,
                toogleFlipped,
                cardListMenu,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .menu {
        background-image: url('@/assets/img/bg-menu.png');
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 50px 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 50px;

        @media (max-width: 768px) {
            padding: 50px 10px;
        }

        &__header {
            text-align: center;
            color: #332583;

            h2 {
                font-weight: 500;

                @media (max-width: 768px) {
                    font-size: 28px;
                    font-weight: 700;
                }
            }
        }

        &__list {
            overflow-y: auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5%;
            justify-content: center;
            justify-items: center;
            padding: 0% 5% 0% 5%;

            @media (max-width: 768px) {
                gap: 50px;
                grid-template-columns: repeat(1, 1fr);
            }

            &__description {
                color: #ffed00;
                font-weight: 600;
                letter-spacing: 1px;
            }

            &__wrapper {
                display: flex;
                flex-direction: column;
                padding: 15% 5% 0% 0%;
                gap: 80px;

                @media (max-width: 440px) {
                    padding: 5% 0% 0% 0%;
                    gap: 0px;
                }

                @media (max-width: 768px) {
                    padding: 5% 5% 0% 0%;
                    gap: 40px;
                }

                @media (min-width: 1330px) {
                    gap: 35px;
                }
            }

            &__card {
                display: flex;
                flex-direction: column;
                gap: 20px;

                &__title {
                    font-weight: bold;
                    color: #ffffff;
                }

                &__description {
                    color: #ffed00;
                    letter-spacing: 1px;
                }
            }

            &__img {
                align-content: center;
                align-items: center;
                img {
                    max-width: 100%;
                    max-height: 100%;
                    width: 100%;
                    height: 100%;

                    @media (max-width: 768px) {
                        width: 350px;
                    }
                }
            }

            &__title {
                color: #ffed00;
                text-align: center;

                h5 {
                    font-weight: 700;

                    @media (max-width: 768px) {
                    }
                }
            }
        }

        &__more {
            text-align: center;

            span {
                border: 2px solid #ffed00;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: bold;
                color: #332583;
                font-size: 18px;
                letter-spacing: 2px;
                cursor: pointer;

                @media (max-width: 768px) {
                    font-size: 12px;
                }

                &:hover {
                    color: #ffed00;
                    background: #332583;
                    border: 1px solid #ffffff;
                }
            }
        }
    }

    .flip-enter-active,
    .flip-leave-active {
        transition: all 0.3s;
    }
    .flip-enter,
    .flip-leave-to {
        transform: rotateY(90deg);
        box-shadow: 50px 10px 20px #ffffff; /* Tambahkan shadow effect */
    }

    .banner {
        background-image: url('@/assets/img/banner.png');
        height: 100vh;
        background-attachment: fixed;

        background-size: cover;

        &__wrapper {
            padding: 25% 8%;
            overflow-y: auto;

            @media (max-width: 768px) {
                padding: 40% 5%;
            }

            @media (max-width: 520px) {
                padding: 70% 5%;
            }

            @media (max-width: 450px) {
                padding: 75% 5%;
            }

            @media (max-width: 360px) {
                padding: 80% 5%;
            }

            @media (max-width: 320px) {
                padding: 90% 5%;
            }

            h1 {
                font-size: 80px;
                color: $primary;

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

        &__icon {
            padding: 2.5%;
            display: flex;
            font-size: 60px;
            text-align: center;
            justify-content: center;
            justify-self: center;

            @media (max-width: 768px) {
                padding: 25%;
                font-size: 50px;
            }

            @media (max-width: 500px) {
                padding: 30%;
                font-size: 50px;
            }

            svg {
                cursor: pointer;
                color: #fff;
                background: #000;
                border-radius: 80%;
                border: 1px solid #fff;
                opacity: 0.5;

                &:hover {
                    opacity: 0.1;
                }
            }
        }
    }

    .contact {
        padding: 18% 15%;
        text-align: center;

        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__greetings {
            h2 {
                font-weight: 700;
                color: #0f2863;

                @media (max-width: 768px) {
                    font-size: 30px;
                }
            }
        }

        &__whatsapp {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            cursor: pointer;

            svg {
                font-size: 30px;
            }

            h5 {
                font-weight: 700;
            }
        }
    }

    :deep(.q-card) {
        background-image: url('@/assets/img/bg-cardmenu.png');
        padding: 10% 10% 0% 10%;
        height: 400px;
        width: 100%;
        border-radius: 10%;
        cursor: pointer;
    }
</style>
