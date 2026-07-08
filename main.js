const singleDogButton = document.getElementById("single-dog-button");
const singleDogContainer = document.getElementById("single-dog-container");
const multipleDogsButton = document.getElementById("multiple-dog-button");
const multipleDogsContainer = document.getElementById("multiple-dog-container");

async function getSingleDogImage() {
  singleDogButton.disabled = true;
  try {
    singleDogContainer.innerHTML = "<p>Loading...</p>";
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    singleDogContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "Random dog";
    singleDogContainer.appendChild(img);
  } catch (error) {
    singleDogContainer.innerHTML =
      "<p>Oops! Could not load image. Try again.</p>";
  } finally {
    singleDogButton.disabled = false;
  }
}

async function getMultipleDogsImage() {
  multipleDogsButton.disabled = true;
  try {
    multipleDogsContainer.innerHTML = "<p>Loading...</p>";
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await response.json();
    multipleDogsContainer.innerHTML = "";
    for (let i = 0; i < data.message.length; i++) {
      const img = document.createElement("img");
      img.src = data.message[i];
      img.alt = "Random dogs";
      multipleDogsContainer.appendChild(img);
    }
  } catch (error) {
    multipleDogsContainer.innerHTML =
      "<p>Oops! Could not load image. Try again.</p>";
  } finally {
    multipleDogsButton.disabled = false;
  }
}

singleDogButton.addEventListener("click", getSingleDogImage);
multipleDogsButton.addEventListener("click", getMultipleDogsImage);
