import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Container } from '@mantine/core';

export default function BookCarousel(this: any){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const carouselData = [
        {"imageUrl": "https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789985772973_1.jpg"},
        {"imageUrl": "https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789985772973_1.jpg"},
        {"imageUrl": "https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789985772973_1.jpg"}
    ]
    return(
        <Container  size="75rem">
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
      >
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Carousel>
      </Container>
    )
}