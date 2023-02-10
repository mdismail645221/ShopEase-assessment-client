const ImgUploadBB = async(imgFile) => {
    console.log("imgFile", imgFile)
    try{
        const url = `https://api.imgbb.com/1/upload?key=ce047b9889c0df917aff170b7da91ab9`
        const fromData = new FormData();
        fromData.append("image", imgFile);
        const res = await fetch(url, {
            method: 'POST',
            body: fromData
        }) 
        const data = await res.json();
        console.log("imgfile data", data)
        return data;
    }
    catch{(error)=>{
        console.log(error)
    }}
};

export default ImgUploadBB;

