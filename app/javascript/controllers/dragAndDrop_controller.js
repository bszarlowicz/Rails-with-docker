import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello");
  }

  onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
    event
        .currentTarget
        .style
        .border = 'none';
  }
}
