let btnEncode = document.getElementById('btnEncode')
let encodedResult = document.getElementById('encodedResult')
let encodedQuery = document.getElementById('encodedQuery')
let btnDecode = document.getElementById('btnDecode')
let decodedImage = document.getElementById('decodedImage')
let encodedData

const uploadFile = (imageTag) => {
    let file = imageTag.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        encodedData = reader.result
    }
    reader.readAsDataURL(file)
}

btnEncode.onclick = () => {
    encodedResult.value = encodedData
}

btnDecode.onclick = () => {
    let imageSource = encodedQuery.value
    decodedImage.setAttribute('src', imageSource)
}

