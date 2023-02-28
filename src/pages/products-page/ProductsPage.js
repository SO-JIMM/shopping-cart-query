import {
  SimpleGrid,
  Card,
  Group,
  Text,
  Image,
  Container,
  Button,
} from "@mantine/core"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import {
  apiSlice,
  useGetProductsByCategoryQuery,
} from "../../store/api/apiSlice"
import { store } from "../../store/store"
const ProductsPage = () => {
  const { category } = useParams()
  // store.dispatch(apiSlice.endpoints.getProductsByCategory.initiate(category))
  console.log(apiSlice)
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsByCategoryQuery(category)
  if (isLoading) return <div>Loading...</div>
  return (
    <Container fluid>
      <SimpleGrid
        cols={3}
        spacing='sm'
        breakpoints={[
          { maxWidth: 900, cols: 3, spacing: "sm" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}>
        {products &&
          products.map((p) => (
            <Card key={p.id} shadow='sm' p='lg' radius='md' withBorder>
              <Card.Section>
                <Link to={`/${category}/${p.id}`}>
                  <Image src={`/img/products/${p.image}`} alt={p.name} />
                </Link>
              </Card.Section>
              <Group>
                <Text>{p.name}</Text>
              </Group>
            </Card>
          ))}
      </SimpleGrid>
    </Container>
  )
}

export default ProductsPage
