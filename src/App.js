import { useState } from "react";
import "./App.css";
import illistration from "./images/illustration-sign-up-desktop.svg";
import check from "./images/icon-success.svg";
import { useForm } from "react-hook-form";
function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEmail(data.email);
    setIsSuccess(true);
  };
  return (
    <>
      {!isSuccess && (
        <div className="App">
          <div className="Info">
            <div>
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="InputLabel">
                  <label>Email address</label>
                  {errors.email && (
                    <label className="errorLabel">{errors.email.message}</label>
                  )}
                </div>
                <input
                  id="email"
                  placeholder="email@company.com"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
          <div className="Image">
            <img src={illistration} />{" "}
          </div>
        </div>
      )}
      {isSuccess && email && (
        <div className="successMsg">
          <img src={check} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button onClick={() => setIsSuccess(false)}>Dismiss message</button>
        </div>
      )}
    </>
  );
}

export default App;
