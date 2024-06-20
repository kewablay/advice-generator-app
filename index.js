let BASE_URL = "https://api.adviceslip.com/advice";

console.log("running js");

const showLoading = () => {
  document.querySelector(".advice-text").innerHTML = `
    <p class="bg-[var(--grayish-blue)] rounded-full h-6 w-[20rem] animate-pulse"></p>
    <p class="bg-[var(--grayish-blue)] rounded-full h-6 w-[10rem] animate-pulse mx-auto mt-4"></p>
  `;

  document.querySelector(
    ".advice-id"
  ).innerHTML = `<p class="bg-[var(--grayish-blue)] rounded-full h-5 w-[8rem] animate-pulse"></p>`;
};

// const displayAdvice = () => {
//   showLoading();

//   fetch(BASE_URL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       document.querySelector(".advice-id").innerHTML = "ADVICE #" + data.slip.id;
//       document.querySelector(".advice-text").innerHTML = data.slip.advice;
//     })
//     .catch((error) => {
//       console.error('Fetch error:', error);
//       document.querySelector(".advice-id").innerHTML = `<p class="text-red-400" >Error fetching advice</p>`;
//       document.querySelector(".advice-text").innerHTML = "An unexpected error occurred. Please try again later.";
//     });
// };

// ASYNC AWAIT APPROACH
const displayAdvice = async () => {
  showLoading();

  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    document.querySelector(".advice-id").innerHTML = "ADVICE #" + data.slip.id;
    document.querySelector(".advice-text").innerHTML = data.slip.advice;
  } catch (error) {
    console.error("Fetch error:", error);
    document.querySelector(
      ".advice-id"
    ).innerHTML = `<p class="text-red-400" >Error fetching advice</p>`;
    document.querySelector(".advice-text").innerHTML =
      "An unexpected error occurred. Please try again later.";
  }
};

// Initial call to display advice
displayAdvice();

const button = document.querySelector("button");
button.addEventListener("click", displayAdvice);
