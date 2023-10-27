import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Categorias</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Novidades</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Promoções</a>
        </LinkItem>
      </Links>
    </nav>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header