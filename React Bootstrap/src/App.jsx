import ProductCard from "./components/ProductCard"
import productData from "./ProductData.json"

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
      {
          productData.map((item, index) => 
            <ProductCard
              key = {index}
              productImage = {item.productImage}
              productTitle = {item.productTitle}
              productDescription = {item.productDescription}
              productButton = {item.productButton}
            />
          )
        }
      </div>
    </>
  )
}
export default App