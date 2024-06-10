// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                has: [
                    {
                        type: 'cookie',
                        key: 'token',
                    },
                ],
                destination: '/',
                permanent: false,
            },
            {
                source: '/',
                destination: '/login',
                permanent: false,
            },
        ]
    },
}
