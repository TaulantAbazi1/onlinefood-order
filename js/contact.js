var contactName = document.getElementById("contactName");
var contactEmail = document.getElementById("contactEmail");
var contactPhone = document.getElementById("contactPhone");
var contactMessage = document.getElementById("contactMessage");

function FormcontactName(contactName) {
  if (contactForm.contactName.value.length < 2) {
    alert("Ju lutem shkruani emrin tuaj");
    return false;
  }
}

function FormcontactEmail(contactEmail) {
  if (contactForm.contactEmail.value.length < 1) {
    alert("Ju lutem shkruani emailin tuaj");
    return false;
  }
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      contactForm.contactEmail.value
    )
  ) {
    return true;
  } else {
    alert("Ju lutem shkruani emailin ne format te pershtatshem!");
    return false;
  }
}

function FormcontactPhone(contactPhone) {
  if (contactForm.contactPhone.value.length < 1) {
    alert("Ju lutem shkruani numrin tuaj te telefonit");
    return false;
  }
  if (
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      contactForm.contactPhone.value
    )
  ) {
    return true;
  } else {
    alert("Ju lutem shkruani numrin valid te telefonit tuaj");
    return false;
  }
}

function FormcontactMessage(contactMessage) {
  if (contactForm.contactMessage.value.length < 1) {
    alert("Ju lutem shkruani mesazhin tuaj!");
    return false;
  }
}