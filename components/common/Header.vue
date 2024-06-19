<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <img src="@/assets/img/logo.png" />
            </div>
            <div class="header__navbar">
                <span class="header__navbar__list" v-for="items in listNavigation" :key="items.id">
                    {{ items.name }}
                </span>
                <span class="header__navbar__toolbar"><Icon name="raphael:list" /></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const listNavigation = ref([
                {
                    id: 1,
                    name: 'HOME',
                    href: '/',
                },
                {
                    id: 2,
                    name: 'MENU',
                    href: '/menu',
                },
                {
                    id: 3,
                    name: 'ABOUT US',
                    href: '/about',
                },
                {
                    id: 4,
                    name: 'RESERVE',
                    href: '/reserve',
                },
            ])

            return {
                listNavigation,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .header {
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2% 2%;

            @media (min-width: 768px) {
                padding: 2% 4%;
            }
        }

        &__logo {
            img {
                width: 120px;
            }
        }

        &__navbar {
            display: flex;
            gap: 100px;
            color: $basic;
            font-weight: bold;
            margin-right: 8%;

            &__list {
                display: none;

                @media (min-width: 768px) {
                    display: block;
                }
            }

            &__toolbar {
                display: none;
                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
    }
</style>
