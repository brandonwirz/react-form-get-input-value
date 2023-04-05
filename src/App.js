import { useState } from "react";
import Message from "./Message";
export default function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    setMessage(`Hello ${firstName} ${lastName} ${email}!`);

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <input type="text" id="email" name="email" placeholder="Email" />

        <button type="submit">Submit</button>
      </form>
      {/* <h2>{message}</h2> */}
      <Message myMessage={message} />
    </div>
  );
}
