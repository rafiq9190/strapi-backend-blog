module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://arcane-savannah-49551.herokuapp.com/'), // Sets the public URL of the application.
    app: { 
      keys: env.array('APP_KEYS')
    },
});