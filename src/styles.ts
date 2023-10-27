import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  branca: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
