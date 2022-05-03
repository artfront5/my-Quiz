body {
  height: 100%;
  background: linear-gradient(to right, #091d46, #3b3fff) no-repeat;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  text-align: center;
}

.decoration {
  margin-top: 200px;
}

input {
  width: 500px;
  height: 50px;
}

p {
  font-size: 30px;
  color: white;
}

.q1 {
  font-size: 30px;
}

.q2 {
  font-size: 30px;
}

.q3 {
  font-size: 30px;
}

.open {
  background: #ffffff;
  color: #000;
  border-radius: 3px;
  height: 50px;
  width: 280px;

  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 30px;
}

.open:hover {

  box-shadow: 0 0 15px #424de6, 0 0 250px #1307b4;
}

@media (max-width: 767px) {
  input {
    width: 300px;
    height: 40px;
  }

  p {
    font-size: 20px;
  }

  .open {
    width: 200px;
  }

  .q1 {
    font-size: 20px;
  }

  .q2 {
    font-size: 20px;
  }

  .q3 {
    font-size: 20px;
  }
}
