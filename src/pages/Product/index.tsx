import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import R4 from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação no universo de Harry Potter.
          Desenvolvido pela Portkey Games, leva os jogadores à Hogwarts do
          século XIX. Eles criam um personagem, escolhem uma casa e exploram um
          mundo mágico com missões, magias e escolhas que moldam a história. Os
          jogadores podem reviver a magia de Hogwarts, desvendar segredos e
          enfrentar desafios mágicos neste jogo envolvente.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Disponível em várias plataformas, incluindo PC,
          PlayStation e Xbox. <br /> <b>Desenvolvedor:</b> Portkey Games <br />
          <b>Editora:</b> Warner Bros. Interactive Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a vários idiomas, incluindo
          inglês, espanhol, francês, entre outros.
        </p>
      </Section>
      <Gallery name="Jogo teste" defaultCover={R4} />
    </>
  )
}

export default Product
