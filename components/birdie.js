AFRAME.registerComponent("birdies",{
    init: function(){
     for(var i = 1; i<30; i++){
        var id = `bird${i}`
        var posX = (Math.random() * 3000 + (-1000))
        var posY = (Math.random() * 2 + (-10))
        var posZ = (Math.random() * 3000 + (-1000))

        var position ={
           x:posX,
           y:posY,
           z:posZ 
        }
        this.summonBirds(id, position);


     }   
    },
    summonBirds : function(id,position){
        var terrainEl = document.querySelector('#terrain')
        var birdEl = document.createElement("a-entity");
        birdEl.setAttribute("id",id)
        birdEl.setAttribute("position", position)
        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("scale", {x:500, y:500,z:500})
        birdEl.setAttribute("animation-mixer",{})
        terrainEl.appendChild(birdEl);

    }
})