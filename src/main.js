// SELECTORS
const form = document.querySelector(".form-js");
const firstName = document.querySelector(".firstName-js");
const lastName = document.querySelector(".lastName-js");
const age = document.querySelector(".age-js");
const email = document.querySelector(".email-js");
const position = document.querySelector(".position-js");
const cardUser = document.querySelector(".card-user-js");
const resetBTN = document.querySelector(".resetBTN-js");

// CREATE REGISTERED USERS ELEMENT
const createRegisteredElement = function (user) {
  const card = document.createElement("ul");

  card.classList.add("bg-gray-100", "p-3", "rounded-2xl", "grid", "gap-y-1.5");

  card.innerHTML = `
    <li>First Name: ${user.firstName}</li>
    <li>Last Name: ${user.lastName}</li>
    <li>Age: ${user.age}</li>
    <li>Email: ${user.email}</li>
    <li>Position: ${user.position}</li>
  `;
  return card;
};

// RENDERING USER + STATE OF RESET BTN
const renderUsers = function (
  users = JSON.parse(localStorage.getItem("users")) || [],
) {
  cardUser.innerHTML = "";

  // CONDITION FOR RESET AND EMPTY STATE
  if (users.length === 0) {
    resetBTN.classList.add("hidden");

    cardUser.innerHTML = `<p class="font-bold text-indigo-700 mt-28 text-center bg-gray-100 rounded-lg mx-auto py-1 px-3">
    No users registered yet!
    </p>`;
    return;
  }
  resetBTN.classList.remove("hidden");

  // GETTING DATA TO THE CARD <li>
  users.forEach((user) => {
    const card = createRegisteredElement(user);
    cardUser.appendChild(card);
  });
};

// EVENT IN FORM'S SUBMIT
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    age: age.value,
    email: email.value.trim(),
    position: position.value.trim(),
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  renderUsers(users);
  form.reset();
});

renderUsers();

// EVENT IN RESET BTN
resetBTN.addEventListener("click", () => {
  localStorage.removeItem("users");

  renderUsers([]);
});
