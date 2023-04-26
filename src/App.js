import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpenses } from "./components/NewExpenses/NewExpenses";
import { Header } from "./components/header/Header";
import { ExpensesForm } from "./components/ExpensesForm/ExpensesForm";
import { useEffect } from "react";
const productDate = [
  {
    title: "Apple",
    price: 180,
    date: new Date(2021, 6, 19),
    id: "1",
  },
  {
    title: "Banana",
    price: 300,
    date: new Date(2023, 5, 21),
    id: "2",
  },
  {
    title: "Mandarin",
    price: 280,
    date: new Date(2022, 6, 19),
    id: "3",
  },
];
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((resonse) =>
      resonse.json().then((dataObject) => setData(dataObject))
    );
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [newProduct, setNewProduct] = useState(productDate);
  const [users, setUsers] = useState(false);

  function openUsers() {
    setUsers(true);
  }
  useEffect(() => {
    const localIsLogin = localStorage.getItem("Auth");
    setIsLogin(localIsLogin);
  }, [isLogin]);

  function addNewExpensesHandler(data) {
    setNewProduct((prev) => {
      return [data, ...prev];
    });
  }

  function loginHandler() {
    setIsLogin(true);
    localStorage.setItem("Auth", !isLogin);
  }

  function logOutHandler() {
    setIsLogin(false);
    localStorage.clear();
  }
  return (
    <div className="App">
      {users ? (
        <>
          <div className="usersDataContainer">
            {data.map((el) => (
              <div className="usersData">
                <div className="id">
                  <strong>ID</strong> <span className="red">{el.id}</span>
                </div>
                <div className="name">
                  <strong>Name:</strong> <span className="red">{el.name}</span>
                </div>
                <div className="userName">
                  <strong>UserName:</strong>
                  <span className="red">{el.username}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {isLogin ? (
            <>
              <Header onClick={openUsers} logOut={logOutHandler} />
              <ExpensesForm
                onClick={loginHandler}
                onSubmit={addNewExpensesHandler}
              />
              <Expenses data={newProduct} />
            </>
          ) : (
            <NewExpenses onLogin={loginHandler} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
