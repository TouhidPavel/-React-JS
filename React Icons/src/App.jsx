import Icon from "./components/Icon"

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "wrap",
    gap: "20px",
    height: "100vh"
  }
  
  return(
    <>
      <div style={containerStyle}>
        <Icon />
      </div>
    </>
  )
}
export default App