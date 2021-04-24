const { overrideDevServer } = require('customize-cra');

const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            "/graphiql": "http://localhost:8080",
            "/graphql": "http://localhost:8080",
            "/articles": "http://localhost:8080",
            "/user": "http://localhost:8080",
            "/users": "http://localhost:8080",
            "/profiles": "http://localhost:8080",
            "/tags": "http://localhost:8080",
        }

    }
}

module.exports = {
    devServer: overrideDevServer(devServerConfig())
}
