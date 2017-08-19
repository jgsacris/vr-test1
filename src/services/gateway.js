const imageAssets = [
    {id:"city", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" },
    {id:"city-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"},
    {id:"cubes", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"},
    {id:"cubes-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"},
    {id:"sechelt", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"},
    { id:"sechelt-thumb", src:"https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"}
]

export function getAssetsService(){
    return new Promise((resolve, reject) =>{
        resolve({
            images: imageAssets
        });
    });
}