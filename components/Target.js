AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 30 + -10;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 30 + -10;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  },

  createRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 });
    ringEl.setAttribute("gltf-model", "./assets/bit_coin/scene.gltf");
    ringEl.setAttribute("animation-mixer", {})

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },
});
