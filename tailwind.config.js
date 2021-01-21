module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts', './projects/**/*.html', './projects/**/*.ts'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('assets/HeroImagesm.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  variants: {},
  plugins: [],
 }