import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  if (soonGames && onSaleGames) {
    return (
      <>
        <Banner />
        <ProductsList
          title="Promoções"
          background="gray"
          games={onSaleGames}
          id="on-sale"
        />
        <ProductsList
          title="Em breve"
          background="black"
          games={soonGames}
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
