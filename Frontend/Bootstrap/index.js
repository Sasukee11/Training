const firstName = document.getElementById("firstName");
const firstNameDesc = document.querySelector(".firstNameDesc");
const lastName = document.getElementById("LastName");
const lastNameDesc = document.querySelector(".LastNameDesc");
const email = document.getElementById("inputEmail3");
const emailDesc = document.querySelector(".emailDesc");
const phoneNumber = document.getElementById("phoneNumber");
const phDesc = document.querySelector(".phDesc");
const numberOfPeopleAttending = document.getElementById("peopleAttending");
const numberOfPeopleAttendingDesc = document.querySelector(
  ".peopleAttendingDesc"
);
const address = document.getElementById("address");
const streetAddressDesc = document.querySelector(".streetAddressDesc");
const address1 = document.getElementById("address1");
const cityDesc = document.querySelector(".cityDesc");
const address2 = document.getElementById("address2");
const stateDesc = document.querySelector(".stateDesc");
const address3 = document.getElementById("address3");
const postalDesc = document.querySelector(".postalDesc");
const checkingMember = document.getElementById("checking-member");
const checkingNonMember = document.getElementById("checking-non-member");
const checkingValid = document.querySelector(".checking-order");

const formOnSubmit = document.getElementById("form-submit");

function onSumbitHandler(e) {
  e.preventDefault();

  //First Name

  const firstNameHelper = isNaN(firstName.value);

  const arrFirstName = [...firstName.value].filter((a) => !isNaN(a)).length;
  console.log(arrFirstName !== 0, arrFirstName);

  if (
    firstName.value.trim().length < 3 ||
    !firstNameHelper ||
    arrFirstName !== 0
  ) {
    firstName.classList.add("border-danger");
    firstNameDesc.textContent = "Enter a valid first name";
    firstNameDesc.classList.add("text-danger");

    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    firstName.classList.remove("border-danger");
    firstNameDesc.textContent = "First Name";
    firstNameDesc.classList.remove("text-danger");
  }

  //Last Name

  const lastNameHelper = isNaN(lastName.value);
  const arrLastName = [...lastName.value].filter((a) => !isNaN(a)).length;
  if (
    lastName.value.trim().length < 1 ||
    !lastNameHelper ||
    arrLastName !== 0
  ) {
    lastName.classList.add("border-danger");
    lastNameDesc.textContent = "Enter a valid last name";
    lastNameDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    lastName.classList.remove("border-danger");
    lastNameDesc.textContent = "Last Name";
    lastNameDesc.classList.remove("text-danger");
  }

  //Email

  if (
    !(
      email.value.indexOf("@") &&
      email.value.includes("@") &&
      email.value.slice(email.value.indexOf("@")).length >= 1 &&
      email.value.includes(".com")
    )
  ) {
    email.classList.add("border-danger");
    emailDesc.textContent = "Enter a valid email";
    emailDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    email.classList.remove("border-danger");
    emailDesc.textContent = "example@example.com";
    emailDesc.classList.remove("text-danger");
  }

  //Phone Number

  const phoneNumberHelper = isNaN(phoneNumber.value);
  console.log(phoneNumberHelper);

  if (phoneNumber.value.length !== 10 || phoneNumberHelper) {
    phoneNumber.classList.add("border-danger");
    phDesc.textContent = "Enter a valid phone number";
    phDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    phoneNumber.classList.remove("border-danger");
    phDesc.textContent = "";
    phDesc.classList.remove("text-danger");
  }

  //Number of People Attending

  if (+numberOfPeopleAttending.value <= 0) {
    numberOfPeopleAttending.classList.add("border-danger");
    numberOfPeopleAttendingDesc.textContent =
      "Number of People must be more than one";
    numberOfPeopleAttendingDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    numberOfPeopleAttending.classList.remove("border-danger");
    numberOfPeopleAttendingDesc.textContent = "";
    numberOfPeopleAttendingDesc.classList.remove("text-danger");
  }

  //Address

  if (address.value.trim() === "") {
    address.classList.add("border-danger");
    streetAddressDesc.textContent = "Enter a valid address";
    streetAddressDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    address.classList.remove("border-danger");
    streetAddressDesc.textContent = "Street Address Line 2";
    streetAddressDesc.classList.remove("text-danger");
  }

  if (address1.value.trim() === "") {
    address1.classList.add("border-danger");
    cityDesc.textContent = "Enter a valid city";
    cityDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    address1.classList.remove("border-danger");
    cityDesc.textContent = "City";
    cityDesc.classList.remove("text-danger");
  }

  if (address2.value.trim() === "") {
    address2.classList.add("border-danger");
    stateDesc.textContent = "Enter a valid state";
    stateDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    address2.classList.remove("border-danger");
    stateDesc.textContent = "State / Province";
    stateDesc.classList.remove("text-danger");
  }

  if (address3.value.trim() === "") {
    address3.classList.add("border-danger");
    postalDesc.textContent = "Enter a valid postal code";
    postalDesc.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    postalDesc.classList.remove("border-danger");
    postalDesc.textContent = "Postal / Zip Code";
    postalDesc.classList.remove("text-danger");
  }

  //Checkbox

  if (checkingMember.checked || checkingNonMember.checked) {
    checkingValid.textContent = "";
    checkingValid.classList.remove("text-danger");
  } else {
    checkingValid.textContent = "Please check atleast one";
    checkingValid.classList.add("text-danger");
    firstName.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

formOnSubmit.addEventListener("submit", onSumbitHandler);
