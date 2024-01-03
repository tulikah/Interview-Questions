const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function () {
    const input = document.getElementById("text");
    const suggestion = document.getElementById("suggestions");
  
    const onFocus = () => {
      suggestion.style.display = "block";
      suggestion.style.cursor = "pointer";
    };
  
    const onBlur = (e) => {
      if (e.target !== suggestion) {
        suggestion.style.display = "none";
      }
    };
  
    const onKeyUp = (e) => {
      getData(e.target.value);
    };
  
    const onClick = (e) => {
      console.log("e", e.target.innerText);
      input.value = e.target.innerText;
      suggestion.innerText = "";
      input.focus();
      suggestion.style.display = "none";
    };
  
    const getData = async (text) => {
      if (!text) return;
      try {
        const data = await getSuggestions(text);
        if (data.length > 0) {
          suggestion.innerText = "";
          const ul = document.createElement("ul");
          data.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item;
            ul.appendChild(li);
          });
          suggestion.appendChild(ul);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    input.addEventListener("keyup", onKeyUp);
    input.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    suggestion.addEventListener("click", onClick);
  })();
  