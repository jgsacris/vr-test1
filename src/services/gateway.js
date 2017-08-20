const imageAssets = [
    {id:"city", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" },
    {id:"city-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"},
    {id:"cubes", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"},
    {id:"cubes-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"},
    {id:"sechelt", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"},
    { id:"sechelt-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"}
]

const thumbnails = [
    {id: "1", srcId : "city-thumb", imgId: "city"},
    {id: "2", srcId : "cubes-thumb", imgId: "cubes"},
    {id: "3", srcId : "sechelt-thumb", imgId: "sechelt"}

]

export function getAssetsService(){
    return new Promise((resolve, reject) =>{
        resolve({
            assets: {
                images: imageAssets
            },
            thumbnails: thumbnails
        });
    });
}