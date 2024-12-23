import Card from "./components/Card"
function App() {
  return(
    <>
      <div style={
        { 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "100vh"
        }
      }>
        <Card
          cardImage = "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
          cardTitle = "Just Simple Card Title"
          cardDescription = "This is a simple card example with a caption."
          cardButton = "Learn More"
        />

        <Card
          cardImage = "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
          cardTitle = "Just Simple Card Title"
          cardDescription = "This is a simple card example with a caption."
          cardButton = "Learn More"
        />

        <Card
          cardImage = "https://images.pexels.com/photos/7974/pexels-photo.jpg"
          cardTitle = "Just Simple Card Title"
          cardDescription = "This is a simple card example with a caption."
          cardButton = "Learn More"
        />
      </div>
    </>
  )
}
export default App