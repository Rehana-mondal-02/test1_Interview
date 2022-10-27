import React from "react";
import "./Home.css";
import profile_image from "../images/andrew-power-y9L5-wmifaY-unsplash.jpg";
import button_3 from "../images/button.png";

function Home() {
  return (
    <>
      <div className="home__container">
        <div className="home__left">
          <h1 className="back__home">Back</h1>
        </div>

        <div className="login__container">
          <div className="profile__image">
            <img src={profile_image} />
          </div>
          <div className="profile__info">
            <p>Personal Account</p>
            <h1>Andrew@Polka.io</h1>
          </div>
          <form className="form__password">
            <h5>Password</h5>
            <input
              className="input__password"
              type="password"
              placeholder="andrew@polka|"
            />
            <img className="button_3" src={button_3} />
          </form>
          <div className="Password__info">
            <p>Forgot password?</p>
            <p style={{ color: "blue" }}>Reset</p>
          </div>
          <div className="submit__section">
            <div className="check">
              <input type="checkbox" />
              <p style={{ marginTop: "10px", marginLeft: "10px" }}>
                Stay Signed in
              </p>
            </div>
            <button>Sign in</button>
          </div>
        </div>
        <hr style={{ color: "grey", border: "1px solid #E6E6E6" }} />
        <div className="footer">
          <p>This site is protected by reCAPTCHA and the Google</p>
          <p>Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
