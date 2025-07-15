import User from "./User";
function App() {
  const userData = {
    name: "sugan", 
    age: 23,
    phone: 9843312345,
    email: "sugan123@gmail.com",
};

  return (
    <div>
      <h1>Hello World!</h1>
      <User
        //name={userData.name}
        //age={userData.age}
        //phoneno={userData.phone}
        //email={userData.email } 
        {...userData} />
    </div>
  );
}

export default App;