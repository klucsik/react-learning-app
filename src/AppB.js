import React from "react";
import Button from "@material-ui/core/Button";
import Basic from "./components/LoginForm";
async function loginUser() {
  const rawResponse = await fetch(
    "https://hovadobjam-test.herokuapp.com/api/login",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kkp",
        password: "1"
      }),
      credentials: "include"
    }
  );
  const content = await rawResponse.json();
  console.log(content);
  console.log(document.cookie);
}

function checkCookie() {
  fetch(" https://hovadobjam-test.herokuapp.com/api/showmycookies", {
    method: "get",
    credentials: "include"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(document.cookie);
}

function checkAuth() {
  fetch(" https://hovadobjam-test.herokuapp.com/api/testlogin", {
    method: "get",
    credentials: "include"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(document.cookie);
}

function AppB() {
  return (
    <div className="App">
      <Button size="small" color="primary" onClick={() => loginUser()}>
        login
      </Button>
      <Button size="small" color="primary" onClick={() => checkAuth()}>
        checkAuth
      </Button>
      <Button size="small" color="primary" onClick={() => checkCookie()}>
        checkCookie
      </Button>
      <Basic />
    </div>
  );
}

export default AppB;
