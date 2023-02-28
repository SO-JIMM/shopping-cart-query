import React from "react"
import { Link } from "react-router-dom"
import { fetchAllProductsByCategory } from "../../store/slices/products-slice/productsSlice"
import { useDispatch } from "react-redux"
export const CustomCategoryLink = ({ category, ...props }) => {
  const dispatch = useDispatch()
  return <Link />
}
