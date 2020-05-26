// Listen to all elements that mouse hovers over (maybe there is more efficient way)
window.addEventListener("mouseover", function() {
  event.stopPropagation();

  // Get items cursor is currently hovering over
  var target_object = event.target;
  var object_tag = target_object.tagName;
  object_tag = object_tag.toLowerCase();

  // Check if currently hovering over desired object
  if (object_tag == "img") {
    target_object.classList.add("outline");
    target_object.style.cursor = "zoom-in";

    target_object.addEventListener("mouseout", function() {
      target_object.classList.remove("outline");
    });
    
    target_object.addEventListener("click", function() {
      event.stopImmediatePropagation();
      toggleModal(this.src);
    });
  }
});

function toggleModal(src) {
  var body = document.getElementsByTagName("BODY")[0];
  var root = document.getElementById("root");
  var modal_wrapper = document.createElement("DIV");
  var modal_image = document.createElement("DIV");
  var modal_shadow = document.createElement("DIV");
  var modal_package = document.createElement("DIV");

  modal_image.style.background = "url('" + src + "')";

  modal_wrapper.classList.add("modal--95", "modal__wrapper");
  modal_image.classList.add("modal--100", "modal__image");
  modal_shadow.classList.add("modal--100", "modal__shadow");
  modal_package.classList.add("modal--100", "modal__package");

  root.parentNode.insertBefore(modal_package, root);
  modal_package.appendChild(modal_shadow);
  modal_package.appendChild(modal_wrapper);
  modal_wrapper.appendChild(modal_image);

  window.addEventListener("click", function() {
    document.getElementsByClassName("modal__package")[0].remove();
  });
}