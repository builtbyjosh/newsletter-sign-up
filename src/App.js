import "./App.css";
import illistration from "./images/illustration-sign-up-desktop.svg";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
  );
}

export default App;
