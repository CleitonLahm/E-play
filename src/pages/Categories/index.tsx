import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'

import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && fightGames && simulationGames && sportGames && rpgGames) {
    return (
      <>
        <ProductsList title="RPG" background="black" games={rpgGames} />
        <ProductsList title="Ação" background="gray" games={actionGames} />
        <ProductsList title="Luta" background="black" games={fightGames} />
        <ProductsList title="Esportes" background="gray" games={sportGames} />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
