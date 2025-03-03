import dotenv from 'dotenv'

dotenv.config()

const config = {
    
    url_cors: process.env.URL_CORS,
    port: process.env.PORT,
    jwt_hash: process.env.JWT_HASH,
    dbConfig: {
        url: process.env.URL_DATABASE
    }
}

export default config;
