<template>
    <div class="main">
        <div class="wrapper">
            <div class="header">
                <CommonHeader />
            </div>
            <div class="content">
                <slot />
            </div>
            <div class="footer">Footer</div>
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
    }
</style>
