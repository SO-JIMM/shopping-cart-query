import React from "react"
import { Carousel } from "@mantine/carousel"
import { Text, Title, Image } from "@mantine/core"
import { Link } from "react-router-dom"

export const ProductCategoriesCarousel = () => {
  return (
    <Carousel
      withIndicators
      slideSize='25%'
      slideGap='md'
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%" },
      ]}
      align='start'>
      <Carousel.Slide>
        <Link to='/mascara'>
          <Image
            className='HvrScale'
            src='img/categories/lipsticks.jpg'
            alt='First slide'
          />
        </Link>
        <Title>Mascara</Title>
        <Text>Nulla vitae elit libero, a pharetra augue mollis interdum.</Text>
      </Carousel.Slide>
      <Carousel.Slide>
        <Link to='/moisturiser'>
          <Image
            className='HvrScale'
            src='img/categories/suncream.jpg'
            alt='Second slide'
          />
        </Link>

        <Title>Moisturiser</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Carousel.Slide>
      <Carousel.Slide>
        <Link to='/suncream'>
          <Image
            className='HvrScale'
            src='img/categories/moist.jpg'
            alt='Third slide'
          />
        </Link>

        <Title>Suncream</Title>
        <Text>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </Text>
      </Carousel.Slide>
      <Carousel.Slide>
        <Link to='/soap'>
          <Image
            className='HvrScale'
            src='img/categories/soap.jpg'
            alt='Fouter slide'
          />
        </Link>

        <Title>Body Wash</Title>
        <Text>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </Text>
      </Carousel.Slide>
    </Carousel>
  )
}
