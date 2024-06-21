<template>
    <div class="main">
        <div class="wrapper">
            <div class="header">
                <CommonHeader />
            </div>
            <div class="content">
                <slot />
            </div>
            <div class="footer">
                <div class="footer__wrapper">
                    <div class="footer__logo">
                        <img src="@/assets/img/logo.png" />
                    </div>
                    <div class="footer__socialmedia">
                        <span>
                            <Icon name="mdi:instagram" />
                        </span>
                        <span>
                            <Icon name="ic:baseline-whatsapp" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main {
        .wrapper {
        }

        .header {
            position: absolute;
            width: 100%;
        }

        .footer {
            &__wrapper {
                display: flex;
                justify-content: space-between;
                padding: 1% 6%;
                align-items: center;
                background: #332583;

                @media (max-width: 768px) {
                    padding: 2% 10%;
                }
            }

            &__logo {
                img {
                    width: 60px;
                }
            }

            &__socialmedia {
                display: flex;
                gap: 20px;

                svg {
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 30px;

                    @media (max-width: 768px) {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
