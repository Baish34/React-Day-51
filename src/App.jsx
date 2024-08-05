import { useState } from "react";
import "./App.css";

const ValidateZipcode = () => {
  const [zipcode, setZipcode] = useState();
  const handleZipcodeInput = (event) => {
    setZipcode(event.target.value);
  };

  const zipcodeBtnHandler = () => {
    const zipcodeLength = zipcode.split("").length;
    if (zipcodeLength > 4 && zipcodeLength < 6) {
      alert("Valid zipcode.");
    } else {
      alert("Invalid zipcode. Please enter 5 digits.");
    }
  };

  return (
    <div>
      <label for="zipcodeInput">Enter your zipcode:</label>
      <input id="zipcodeInput" type="number" onChange={handleZipcodeInput} />
      <button onClick={zipcodeBtnHandler}>Validate Zipcode</button>
    </div>
  );
};

const CapitalizeName = () => {
  const [name, setName] = useState("");

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const NameBtnHandler = () => {
    const nameArray = name.split(" ");
    const capitalizedNames = nameArray
      .map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
      })
      .join(" ");

    if (capitalizedNames) {
      alert(`Capitalized Full Name: ${capitalizedNames}`);
    }
  };

  return (
    <div>
      <label for="nameInput">Enter your full name:</label>
      <input id="nameInput" onChange={handleNameInput} />
      <button onClick={NameBtnHandler}>Capitalize Name</button>
    </div>
  );
};

const SearchTerm = () => {
  const [search, setSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState(true);

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };

  const handleBtn = () => {
    setSearch("");
    setPreviousSearch(false);
  };

  return (
    <div>
      <label for="searchInput">Enter search term:</label>
      <input id="searchInput" onChange={inputHandler} value={search} />
      <button onClick={handleBtn}>Reset Search Term</button>
      <p>{search}</p>
    </div>
  );
};

const ResetAddress = () => {
  const [address, setAddress] = useState("");
  const [previousAddress, setPreviousAddress] = useState(true);

  const inputHandler = (event) => {
    setAddress(event.target.value);
  };

  const handleBtn = () => {
    setAddress("");
    setPreviousAddress(false);
  };

  return (
    <div>
      <label for="addressInput">Enter your address:</label>
      <input id="adddressInput" onChange={inputHandler} value={address} />
      <button onClick={handleBtn}>Reset Address</button>
      <p>{address}</p>
    </div>
  );
};

const ClearMessage = () => {
  const [message, setMessage] = useState();
  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const messageBtnHandler = () => {
    setMessage("");
  };

  return (
    <div>
      <label for="messageInput">Enter a message:</label>
      <input id="messageInput" onChange={handleMessageInput} value={message} />
      <button onClick={messageBtnHandler}>Clear Message</button>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ValidateZipcode />
      <br />
      <CapitalizeName />
      <br />
      <SearchTerm />
      <br />
      <ResetAddress />
      <br />
      <ClearMessage />
    </main>
  );
}
