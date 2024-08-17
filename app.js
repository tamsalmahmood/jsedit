// function swapPic()
// {
//     document.getElementById("before").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIZgsflyd1YiDYZDYAti86gBy31voZnPEwA&s"
// }

// function againSwap()
// {
//     document.getElementById("before").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZw2XA4elocGYYnP0QthDiKZt-dsvDCSXJOg&s"
// }

// function swapPic(id,newImg)
// {
//     document.getElementById(id).src=newImg
// 

function changeContent ()
{
    document.getElementById('img').className='edit'
}

function getAddress() {
     var link = document.getElementById("link1");
     var address = link.getAttribute("href");
     console.log (address)
     }