import Card from "./components/Card"
import users from "./data"

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    height: "100vh"
  }
  
  return(
    <>
      <div style={containerStyle}>
        {
          users.map((user, index) => 
            <Card
              key={index}
              profileImage= {user.profileImage}
              fullName={user.fullName}
              designation={user.designation}
              phones={user.phones}
              email={user.email}
            />
          )
        }
      </div>
    </>
  )
}
export default App