const cc = require('camera-capture');
const fs = require('fs');
const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/r6BBk-hiN/"
});

model.classify({
  imageUrl: "https://media-blog.sashido.io/content/images/2020/09/SashiDo_Dog.jpg",
}).then((predictions) => {
  console.log("Predictions:", predictions);
}).catch((e) => {
  console.log("ERROR", e);
});
const initialize = async () => {

    const c = new cc.VideoCapture({
        mime: 'image/png'
    });
      
    await c.initialize();

    let f = await c.readFrame();
    fs.writeFileSync('tmp.png', f.data);
    f = await c.readFrame('image');
    fs.writeFileSync('tmp2.png', f.data);
}

initialize()
// f = await c.readFrame('image/jpeg') // jpeg
// writeFileSync('tmp.jpg', f.data)
// f = await c.readFrame('rgba')       // raw image data (as default)
// writeFileSync('tmp-8bit-200x200.rgba', f.data)