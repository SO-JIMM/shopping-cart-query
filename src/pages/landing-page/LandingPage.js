import React from "react"
import { ProductCategoriesCarousel } from "../../components/product-categories-carousel/ProductCategoriesCarousel"
import { Container } from "@mantine/core"

const LandingPage = () => {
  return (
    <Container size='lg'>
      <ProductCategoriesCarousel />
    </Container>
  )
}

export default LandingPage
