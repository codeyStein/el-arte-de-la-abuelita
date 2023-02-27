// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import masetaData from "../../../data/products/masetas"
import bisuteriaData from "../../../data/products/bisuteria"

const masetas = masetaData.map(item => {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.src
    }
})

const bisuteria = bisuteriaData.map(item => {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.src
    }
})


export default function handler(req, res) {
    const query = req.query;
    const { productType } = query;

        // 'masetas' query
        if (productType=='masetas') {
            res.status(200).json({masetas})
        } // 'bisuteria' query
        else if (productType=='bisuteria') {
            res.status(200).json({bisuteria})
        } // null query
        else if (productType.length==0) {
            res.status(200).json({masetas, bisuteria})
        } // invalid query
        else { res.status(400).send({ error: 'failed to fetch data; invalid endpoint', status: 400 }) }

}
