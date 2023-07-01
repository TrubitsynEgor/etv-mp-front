import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Default = styled.div`
  background-color: red;
  height: 20px;
`

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home - ETV-Marketplace</title>
      </Helmet>
      <Default>Home</Default>
    </>
  )
}
