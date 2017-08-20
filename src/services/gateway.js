const imageAssets = [
    {id:"city", src:"assets/city.jpg" },
    {id:"city-thumb", src:"assets/thumb-city.jpg"},
    {id:"cubes", src:"assets/cubes.jpg"},
    {id:"cubes-thumb", src:"assets/thumb-cubes.jpg"},
    {id:"sechelt", src:"assets/sechelt.jpg"},
    { id:"sechelt-thumb", src:"assets/thumb-sechelt.jpg"}
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