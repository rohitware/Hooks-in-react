import { useState } from "react";

function PersonForm() {
  const [person, setPerson] = useState({
    name: "Rohit",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  return (
    <>
          <h3>UseState with Nested object form</h3>

      <p>{JSON.stringify(person)}</p>

      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>

      <label>
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>

      <label>
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
    </>
  );
}
export default PersonForm;
