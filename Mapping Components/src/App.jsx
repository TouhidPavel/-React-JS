import Card from "./components/Card"
import cardData from "./data"

{/*
const cardItems = []
for(let i=0; i<cardData.length; i++){
  cardItems.push(
    <Card
      key = {i}
      cardImage = {cardData[i].cardImage}
      cardTitle = {cardData[i].cardTitle}
      cardDescription = {cardData[i].cardDescription}
      cardButton = {cardData[i].cardButton}
    />
  ) 
}
*/}

function App() {
  return(
    <>
      <div style={
        { 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "50px auto"
        }
      }>
        {
          cardData.map((item, index) => 
            <Card
              key = {index}
              cardImage = {item.cardImage}
              cardTitle = {item.cardTitle}
              cardDescription = {item.cardDescription}
              cardButton = {item.cardButton}
            />
          )
        }
      </div>
    </>
  )
}
export default App