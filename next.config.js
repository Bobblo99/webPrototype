const { ACTION_FAST_REFRESH } = require('next/dist/client/components/router-reducer/router-reducer-types')

/** @type {import('next').NextConfig} */
const nextConfig = {
 webpack(config){
    return config
 }

}

module.exports = nextConfig