// Listen to all elements that mouse hovers over (maybe there is more efficient way)
var modal_status = 0;
window.addEventListener("mouseover", function() {
  event.stopPropagation();

  // Get items cursor is currently hovering over
  var target_object = event.target;
  var object_tag = String(target_object.tagName).toLowerCase();

  // Check if currently hovering over desired object
  if (object_tag == "img" && modal_status != 1) {
    console.log(modal_status);
    target_object.classList.add("outline");
    target_object.style.cursor = "zoom-in";

    target_object.addEventListener("mouseout", clearOutline);
    target_object.addEventListener("click", openModal);
  }

  function openModal() {
    event.stopImmediatePropagation();
    target_object.removeEventListener("click", openModal);
    toggleModal(this.src);
  }

  function clearOutline() {
    target_object.classList.remove("outline");
  }
});

function toggleModal(src) {

  if (src) {
    modal_status = 1;

    var root = document.getElementById("root");

    var modal_wrapper = document.createElement("DIV");
    var modal_image_wrapper = document.createElement("DIV");
    var helper = document.createElement("SPAN");
    var modal_image = document.createElement("IMG");
    var modal_shadow = document.createElement("DIV");
    var modal_package = document.createElement("DIV");

    modal_image.src = src;
    modal_wrapper.classList.add("modal--95", "modal__wrapper");
    modal_image_wrapper.classList.add("modal--100", "modal__image__wrapper");
    helper.classList.add("helper");
    modal_image.classList.add("modal__image");
    modal_shadow.classList.add("modal--100", "modal__shadow");
    modal_package.classList.add("modal--100", "modal__package");

    root.parentNode.insertBefore(modal_package, root);
    modal_package.appendChild(modal_shadow);
    
    modal_package.appendChild(modal_wrapper);
    modal_wrapper.appendChild(modal_image_wrapper);

    modal_image_wrapper.appendChild(helper);
    modal_image_wrapper.appendChild(modal_image);

    window.addEventListener("click", function() {
      event.stopImmediatePropagation();
      document.getElementsByClassName("modal__package")[0].remove();
      window.removeEventListener("click", testFunction);
      modal_status = 0;
    });
  }
}
