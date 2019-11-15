import React from "react";
import Button from "@material-ui/core/Button";

async function loginUser() {
  const rawResponse = await fetch(
    "https://hovadobjam-test.herokuapp.com/api/auth",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kkp",
        password: "1"
      })
    }
  );
  const content = await rawResponse.json();
  console.log(content);
  console.log(document.cookie);
}

function checkCookie() {
  fetch(" https://hovadobjam-test.herokuapp.com/api", {
    method: "get"
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
  fetch(" https://hovadobjam-test.herokuapp.com/api/test", {
    method: "get"
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
    </div>
  );
}

export default AppB;
