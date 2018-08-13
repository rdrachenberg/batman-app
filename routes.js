const routes = module.exports = require('next-routes')()

routes
    .add('home', to='index')
    .add('about')
    .add('contact')