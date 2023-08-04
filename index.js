
  const clear = ()=>{
    alert('Cleared' )
    let ipt = document.getElementById('ipt');
    ipt.value = ''
    const img = document.querySelector("#image");
    img.src = '';
    const ulElement = document.querySelector('.result');
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

  }
  

document.getElementById('clearButton').addEventListener('click', clear);


const rest = async () => {
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  
    // When the model is loaded
       async function modelLoaded() {
        console.log('Model Loaded!');
        await fun();
        fun2();
      }

    const allResult = [];
    
      const fun = async () => {
        const results = await classifier.classify(document.getElementById('image'));
        if (results) {
          console.log('Success');
          for (let i = 0; i < results.length; i++) {
            console.log(i);
            allResult.push(results[i]);
          }
          console.log('done1 ');
        }
      };
   
     
    
  
    const fun2 = () => {
      const ulElement = document.querySelector('.result');
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }
  
      for (let i = 0; i < allResult.length; i++) {
        const div = document.createElement('div')
        div.style.display='flex'
        const result_temp = document.createElement('li');
        result_temp.innerHTML = `FOUND : ${allResult[i].label}<br>CONFIDENCE: ${allResult[i].confidence}%`;   result_temp.style.color = 'blue';  
        result_temp.style.padding = '10px';
        result_temp.style.fontSize = '20px';
        result_temp.style.marginLeft = 'auto';
        result_temp.style.marginRight = 'auto';
        ulElement.appendChild(div)

        div.append(result_temp)

        // ulElement.appendChild(result_temp);

      }
      console.log('done 2 ');
    };
  };



  const main = async () => {
  
    console.log('Clicked ');
    const url = document.getElementsByTagName('input')[0].value;
    const img = document.querySelector("#image");
      img.src = url;

   console.log(url);
  
 
      await rest();
    
  };




  main(); // will trigger onclick on the button
  
 
   
 