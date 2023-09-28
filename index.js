require('dotenv').config()
const axios = require('axios')

const {appid, q, limit, url, url2, units, linguagem} = process.env
const end = `${url}?q=${q}&limit=${limit}&appid=${appid}`

async function consultaLatLon(){
    try{
        const resultado = await axios.get(end)
        for (let radar of resultado.data){
            let lat = radar.lat
            let lon = radar.lon
            let nome = radar.name
            console.log(`\nCidade: ${nome}\nLatitude: ${lat} \nLongetude: ${lon}`)
        }

        const lat = resultado.data[0].lat
        const lon = resultado.data[0].lon

        const end2 = `${url2}?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${linguagem}`

        const res = await axios.get(end2)
        let feels = res.data.main.feels_like
        let descricao = res.data.weather[0].description
        console.log(`\nSensação térmica: ${feels}°C \nDescrição: ${descricao}\n`)
        
    }   catch (error) {
    console.log("Não foi possivel consultar a cidade.")
    }
}      
consultaLatLon()