import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'

import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimlulacao, setGamesSimlulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
  })
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
  })
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimlulacao(res))
  })
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
  })
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  })

  return (
    <>
      <ProductsList title="RPG" background="black" games={gamesRPG} />
      <ProductsList title="Ação" background="gray" games={gamesAcao} />
      <ProductsList title="Luta" background="black" games={gamesLuta} />
      <ProductsList title="Esportes" background="gray" games={gamesEsportes} />
      <ProductsList
        title="Simulação"
        background="black"
        games={gamesSimlulacao}
      />
    </>
  )
}

export default Categories
