// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import  "@/assets/style/color.scss";',
                },
            },
        },
    },
    css: ['@/assets/style/index.scss'],
    modules: ['nuxt-quasar-ui', 'nuxt-icon', '@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Inter: '200..700',
        },
    },
})
