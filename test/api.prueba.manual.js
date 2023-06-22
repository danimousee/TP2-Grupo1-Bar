import axios from "axios";

const pruebaServidorConAxios = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    try {
        const rta = await axios(url)
        const { status, data:body } = rta
        
        console.log('status code', status)
        console.log('body', body)
    }
    catch(error) {
        console.log('error:', error.message)
    }
}
pruebaServidorConAxios()