var checkOffersExist = setInterval(function() {
  if (document.getElementById("offers")) {
    clearInterval(checkOffersExist);
    insertAcceptAllOffersButton();
  }
}, 400);

function insertAcceptAllOffersButton() {
  var elem = `
  <div id="add-all-amex-offers-wrapper" class="card-block border-b">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <button style="background-color:#FF7777;" class="btn btn-sm btn-fluid btn-primary" id="add-all-amex-offers">Add all offers</button>
      </div>
      <div class="col-sm-12 col-md-9">
        <p class="hidden" style="color:#FF7777" id="hang-tight-message">Offers are being added! Hang tight!</p>
      </div>
    </div>
  </div>`;

  document.getElementById("offers-nav").insertAdjacentHTML('beforebegin', elem);

  document.getElementById("add-all-amex-offers").onclick = function() {
    clickOffer();

    // Don't think the math.random on the timer really matters but just to be safe
    setInterval(clickOffer, 4000 + Math.random() * 4000);

    revealHangTightMessage();
  }
}

function clickOffer() {
  var button = document.querySelector(".offers-list button.offer-cta.btn-secondary")
  if (!!button) {
    button.click()
  }
}

function revealHangTightMessage() {
    document.getElementById("hang-tight-message").className = "";
}