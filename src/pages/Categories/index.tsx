import ProductsList from '../../components/ProductsList'

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
        <ProductsList
          title="RPG"
          background="black"
          games={rpgGames}
          id="rpg"
        />
        <ProductsList
          title="Ação"
          background="gray"
          games={actionGames}
          id="action"
        />
        <ProductsList
          title="Luta"
          background="black"
          games={fightGames}
          id="fight"
        />
        <ProductsList
          title="Esportes"
          background="gray"
          games={sportGames}
          id="sports"
        />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
