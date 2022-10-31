import React from "react";

export default function Form2() {
  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  console.log(input);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(input);
    console.log(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={input.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={input.lastName}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={input.email}
      />
      <textarea
        placeholder="Your Comment"
        name="comments"
        onChange={handleChange}
        value={input.comments}
        style={{ fontSize: "20px" }}
      />

      <input
        type="checkbox"
        id="isFiendly"
        name="isFriendly"
        checked={input.isFriendly}
        onChange={handleChange}
      />

      <label htmlFor="isFriendly">are u cool?</label>
      <fieldset>
        <legend>current status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={input.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="part"
          name="employment"
          value="part"
          checked={input.employment === "part"}
          onChange={handleChange}
        />
        <label htmlFor="part">Part-time</label>

        <input
          type="radio"
          id="full"
          name="employment"
          value="full"
          checked={input.employment === "full"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <label htmlFor="favColor">ktory koror?</label>
      <br />

      <select
        id="favColor"
        value={input.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--pick!</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
