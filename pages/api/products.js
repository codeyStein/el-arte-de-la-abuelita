// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productData from "../../data/products/masetas.js"

const products = productData.map(item => {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.src
    }
})

export default function handler(req, res) {
  res.status(200).json({
      products
  })
}
