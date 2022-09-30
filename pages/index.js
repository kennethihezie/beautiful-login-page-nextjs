import Card from "../components/card/card"
import CloseButton from "../components/close-button/close-button"
import LeftSide from "../components/left-side/left-side"
import RightSide from "../components/right-side/right-side"

const Home = () => {
  return (
     <Card>
      <LeftSide />
      <RightSide />

      <CloseButton />
     </Card>
  )
}

export default Home