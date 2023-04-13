AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },    
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        clearInterval(timer);        
      }
    }
  },
  isCollided: function (elemntId) {
    const element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#ring")) {
        element.setAttribute("visible", false)
        this.upt()
        this.ups()
      } else {
        this.gm()
      }
    });
  },

  upt:function(){
    const elem = document.querySelector("#targets")
    var count = elem.getAttribute("text").value;
    let curt = parseInt(count)
    curt -= 1
    elem.setAttribute("text", {value:curt})
  },

  ups:function(){
    const elem = document.querySelector("#score")
    var count = elem.getAttribute("text").value;
    let curs = parseInt(count)
    curs += 50
    elem.setAttribute("text", {value:curs})
  },

  gm:function(){
    var plane_el = document.querySelector("#plane_model")
    var elem = document.querySelector("#game_over")
    elem.setAttribute("visible", true)
    plane_el.setAttribute("dynamic-body", {mass:1})
  }
  
});
