// config/auth.js

module.exports = {

    'facebookAuth': {
        'clientID': '835914403741147', // App ID của bản
        'clientSecret': '8d2f8d5dff14e6f77cdb06f058546a2a', // App Secret của bạn
        'callbackURL': 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '416271533234-4jfclogvs9b7c9blj4gg8oh30c6q8umo.apps.googleusercontent.com',
        'clientSecret': 'FLY_Zwyn1uYR7Qc8S7BaqViX',
        'callbackURL': 'http://localhost:3000/auth/google/callback'
    }

};