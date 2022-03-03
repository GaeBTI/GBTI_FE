const BGImgLength= 9;
let BackgroundImgList=[];
for(var i =0;i<BGImgLength;i++){
  BackgroundImgList.push({name:`배경 ${i}`,url:`bg${i}.png`});
}
export { BackgroundImgList };