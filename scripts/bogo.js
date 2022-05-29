
async function isorted(arr){
        let s;
        for(let f = 0; f < arr.length; f++){
            s = f + 1;
          if(parseInt(arr[s].style.height) - parseInt(arr[f].style.height) < 0) return false;
            // if(arr[s]-arr[f]<0) return false;
        }
        return true;
    }

async function bogo(){
    const ele=document.querySelectorAll(".sort");
    while(await isorted(ele)==false){
            for(let i=0;i<ele.length;i++){
                ele[i].style.background="red";
                let r=Math.floor(Math.random()*(ele.length-1))+1;
                
                ele[r].style.background="red";
                let temp=ele[i].style.height;
                ele[i].style.height=ele[r].style.height;
                ele[r].style.height=temp;
                ele[i].style.background="white"
                ele[r].style.background="white"

            }

        }
        for(let k=0;k<ele.length;k++){
            ele[k].style.background="green"
        }
}

document.getElementById("bogo").addEventListener("click", async function(){
    disableSizeSlider();
    disableSortingBtn();
    await bogo();
    enableSizeSlider();
    enableSortingBtn();
});