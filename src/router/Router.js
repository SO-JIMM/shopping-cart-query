import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landing-page/LandingPage"
import NoMatchPage from "../pages/no-match-page/NoMatchPage"
import ProductsPage from "../pages/products-page/ProductsPage"
import ProductItemPage from "../pages/product-item-page/ProductItemPage"
import { Container } from "@mantine/core"

export const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <Container size='lg'>
            <Outlet />
          </Container>
        }
        path='/'>
        <Route index element={<LandingPage />} />
        <Route path='/:category' element={<ProductsPage />} />
        <Route path='/:category/:id' element={<ProductItemPage />} />

        <Route path='*' element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}
