import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae
      quasi quo maxime dolor ipsam nostrum facere eveniet itaque dicta vero nam
      quam, iste eaque placeat dolorem eum pariatur beatae.
    </Descricao>
  </Card>
)

export default Product
