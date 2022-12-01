const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

let Menupopupup = document.getElementById("dropdownheadernav");
function opendropdownheadernav() {
  Menupopupup.classList.add("Openmenudrops");
  document.body.style.overflow = "hidden";
}

function closedropdownheadernav() {
  Menupopupup.classList.remove("Openmenudrops");
  document.body.style.overflow = "auto";
}

// let ethpopupup = document.getElementById("smarteth");
// function opensmarteth() {
//   ethpopupup.classList.add("OPEN-ETH-WALLETS");
// }

// function closesmarteth() {
//   ethpopupup.classList.remove("OPEN-ETH-WALLETS");
// }
// let btcpopupup = document.getElementById("smartbtc");
// function opensmartbtc() {
//   btcpopupup.classList.add("OPEN-BTC-WALLETS");
// }

// function closesmartbtc() {
//   btcpopupup.classList.remove("OPEN-BTC-WALLETS");
// }

// $(document).ready(function () {
//   $(".ethclikbtn").click(function () {
//     $(".wijet-wrap2").slideToggle();
//   });
// });
// $(document).ready(function () {
//   $(".btcclikbtn").click(function () {
//     $(".wijet-wrap2a").slideToggle();
//   });
// });
const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnOpenModal1 = document.querySelector(".show-modal1");

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal1.addEventListener("click", openModal1);

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});
// ===========================COPY-WALLET-ETH===============================
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500);
});
// ====================================COPY-WALLET-BTC=================================

document
  .querySelectorAll(".Click-CopyWallet-Addres-BTC")
  .forEach((CopyContainerETH) => {
    const InputField = CopyContainerETH.querySelector(".textbtc");

    const CopyButton = CopyContainerETH.querySelector(".clone-btn");

    InputField.addEventListener("focus", () => InputField.select());

    CopyButton.addEventListener("click", () => {
      const text = InputField.value;

      InputField.select();
      navigator.clipboard.writeText(text);

      InputField.value = "Copied!";
      setTimeout(() => (InputField.value = text), 2000);
    });
  });
