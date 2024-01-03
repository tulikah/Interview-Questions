
const Accordion = () => {
    const accordianss = document.querySelectorAll(".accordian");

    accordianss.forEach((element) => {
      element.addEventListener("click", (ele) => {
        element.classList.toggle("active");
        let accordianBtn = element.getElementsByClassName("btn");
        console.log("accordianBtn", accordianBtn);
        if (accordianBtn.values === "+") {
          accordianBtn.textContent = "_";
        } else {
          accordianBtn.textContent = "-";
        }
      });
    });

    const style= `
    body {
        font-family: sans-serif;
        background-color: #333;
      }
      
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
      
      .accordian-container {
        padding: 60px;
      }
      
      .accordian {
        /* width: 350px;
        height: 150px;
        border: 1px solid black; */
      }
      
      .accordian-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: #eee;
        padding: 12px;
        transition: background-color 2s;
      }
      
      .accordian-header:hover {
        background-color: #ccc;
      }
      .accordian-body {
        padding: 12px;
        background-color: white;
        display: none;
      }
      
      button {
        border: none;
        background-color: transparent;
        font-size: large;
      }
      
      .accordian.active .accordian-body {
        display: block;
      }
      
      /* .accordian.active .accordian-header .btn {
        content: "\2212";
      } */
      
    
    `
    
    return (
        <div id="app">
        <div class="accordian-container">
          <div class="accordian">
            <div class="accordian-header">
              <h3>Accordian</h3>
              <button class="btn">+</button>
            </div>
            <div class="accordian-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
                consequatur aperiam nobis, illo exercitationem, molestiae
                molestias quo recusandae rerum, quia distinctio doloribus beatae
                nisi? Deserunt sequi eaque error consequatur optio!
              </p>
            </div>
          </div>
          <div class="accordian">
            <div class="accordian-header">
              <h3>Accordian</h3>
              <button class="btn">+</button>
            </div>
            <div class="accordian-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
                consequatur aperiam nobis, illo exercitationem, molestiae
                molestias quo recusandae rerum, quia distinctio doloribus beatae
                nisi? Deserunt sequi eaque error consequatur optio!
              </p>
            </div>
          </div>
        </div>
      </div>
        
    )
}




