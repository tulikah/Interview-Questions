const Modal = () => {
const style = `{
    body {
        font-family: sans-serif;
      }
      
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
      
      .btn {
        margin: 10px;
        padding: 5px;
        cursor: pointer;
      }
      .close {
        cursor: pointer;
      }
      .modal-container {
        background-color: rgb(0, 0, 0, 0.5);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        display: none;
      }
      .model {
        background-color: white;
        margin: 60px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: -10px 10px 30px rgb(0, 0, 0, 0.3);
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding: 2px;
      }
      
      .modal-content {
        margin: 10px;
        padding: 10px;
        max-height: 70%;
        overflow: auto;
      }
      
}`
const showModal = document.querySelectorAll("[data-target-modal]");
const modal = document.querySelectorAll(".modal-container");
const close = document.querySelectorAll(".close");

showModal.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const id = event.currentTarget.getAttribute("data-target-modal");
    const elem = document.getElementById(id);
    elem.style.display = "block";
  });
});

modal.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const id = event.currentTarget.id;
    const elemModal = document.getElementById(id);
    if (event.currentTarget === event.target) {
      elemModal.style.display = "none";
    }
  });
});

close.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const id = event.currentTarget.closest(".modal").id;
    console.log("id-->", event.currentTarget.id);
    const elemId = document.getElementById(id);
    elemId.style.display = "none";
  });
});

// close.addEventListener("click", (event) => {
//   console.log("target", event.target.className);
//   console.log("current target", event.currentTarget.className);
//   modal.style.display = "none";
// });
// modal.addEventListener("click", (event) => {
//   console.log("target", event.target.className);
//   console.log("current target", event.currentTarget.className);
//   if (event.currentTarget === event.target) {
//     modal.style.display = "none";
//   }
// });


    return (
        <div id="app">
      <div>
        <button data-target-modal="model1" class="btn">Show Modal1</button>
        <button data-target-modal="model2" class="btn">Show Modal2</button>
        <button data-target-modal="model3" class="btn">Show Modal3</button>
      </div>
      <div class="modal-container" id="model1">
        <div class="model">
          <div class="modal-header">
            <h1>Modal1</h1>
            <div class="close">&times;</div>
          </div>
          <div class="modal-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ad
            repellendus deserunt quia minima sequi, dolores porro optio, sunt
            perferendis accusantium repudiandae error, vitae animi eligendi
            ipsam! Placeat, dignissimos error.
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
      <div class="modal-container" id="model2">
        <div class="model">
          <div class="modal-header">
            <h1>Modal2</h1>
            <div class="close">&times;</div>
          </div>
          <div class="modal-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ad
            repellendus deserunt quia minima sequi, dolores porro optio, sunt
            perferendis accusantium repudiandae error, vitae animi eligendi
            ipsam! Placeat, dignissimos error.
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
      <div class="modal-container" id="model3">
        <div class="model">
          <div class="modal-header">
            <h1>Modal3</h1>
            <div class="close">&times;</div>
          </div>
          <div class="modal-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ad
            repellendus deserunt quia minima sequi, dolores porro optio, sunt
            perferendis accusantium repudiandae error, vitae animi eligendi
            ipsam! Placeat, dignissimos error.
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
    )
}