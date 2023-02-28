import { Card, Container, Image } from "@mantine/core"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "../../store/api/apiSlice"

const ProductItemPage = () => {
  const { id, category } = useParams()

  const { data: product } = useGetProductByIdQuery({ category, id })

  return (
    <Container>
      <Card>
        <Card.Section>
          {product && (
            <Image src={`/img/products/${product.image}`} alt='Curretn Item' />
          )}
        </Card.Section>
      </Card>
    </Container>
  )
}

export default ProductItemPage
