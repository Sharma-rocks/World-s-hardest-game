var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d8d5bb02-ab11-4dbf-bc37-2e7fc0f9685a","ee0fe1b3-3d2b-4ce1-8758-79f9069a5b74","3cbddb33-431b-4a44-90c0-d06e138db1be","544ea3c6-1a36-4432-ad5c-d4b6e651e944","2b366845-37b9-453e-bf45-699077db712f","46643ca0-17a2-42fc-9e76-7a9467c5517b"],"propsByKey":{"d8d5bb02-ab11-4dbf-bc37-2e7fc0f9685a":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"ee0fe1b3-3d2b-4ce1-8758-79f9069a5b74":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"3cbddb33-431b-4a44-90c0-d06e138db1be":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"544ea3c6-1a36-4432-ad5c-d4b6e651e944":{"name":"kid_22_side_1","sourceUrl":"assets/api/v1/animation-library/gamelab/28BFXdmNhlnz_TpLdw0LxlEFqlIV.uCq/category_people/kid_22_side.png","frameSize":{"x":206,"y":344},"frameCount":1,"looping":true,"frameDelay":2,"version":"28BFXdmNhlnz_TpLdw0LxlEFqlIV.uCq","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":344},"rootRelativePath":"assets/api/v1/animation-library/gamelab/28BFXdmNhlnz_TpLdw0LxlEFqlIV.uCq/category_people/kid_22_side.png"},"2b366845-37b9-453e-bf45-699077db712f":{"name":"court_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png"},"46643ca0-17a2-42fc-9e76-7a9467c5517b":{"name":"castle_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TX47onQcDeWCD0NMFtz6oDfTBCfA7vGB/category_buildings/castle_08.png","frameSize":{"x":250,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"TX47onQcDeWCD0NMFtz6oDfTBCfA7vGB","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TX47onQcDeWCD0NMFtz6oDfTBCfA7vGB/category_buildings/castle_08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var life = 0;
var boundary1, boundary2;


  boundary1 = createSprite(190, 110, 420, 5);
  boundary2 = createSprite(190,280,420,5);
  
  var sam = createSprite(20,190,20,10);
sam.setAnimation("kid_22_side_1");
sam.scale=0.1;
  
  car1= createSprite(100,270,10,10);
car1.setAnimation("car_red_1");
car1.scale= 0.2;

car2= createSprite(200,120,10,10);
car2.setAnimation("car_yellow_1");
car2.scale= 0.2;

car3= createSprite(300,270,10,10);
car3.setAnimation("car_green_1");
car3.scale= 0.2;
  
  
  car1.velocityY = 4;
  car2.velocityY = -4;
  car3.velocityY = 4;
  
  var store= createSprite(375,200,10,10)
store.setAnimation("castle_08_1")
store.scale= 0.5

function draw() {
  background("lightblue");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
 
  
 
  if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  
  if(
     sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3))
    
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
