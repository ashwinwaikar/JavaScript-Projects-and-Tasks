let submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  let mobileNo = document.getElementById("mobileNo");
  if (mobileNo.value.length !== 10) {
    let message1 = document.getElementById("message1");
    message1.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>INVALID MOBILE NO! </strong>Mobile no must be 10 digit
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                         </div>`;
    setTimeout(() => {
      message1.innerHTML = " ";
    }, 3000);
  }
}
