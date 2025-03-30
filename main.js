const extentions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ]

const productsForm = document.querySelector('form')
const bgMode = document.querySelector('#bg_mode') 
const body = document.body



function productLoad(extentionsArr){ 
  extentionsArr.forEach((extention) =>{
  const {logo, name, description} = extention;

    const html = `<aside class="bg-[#212636] pt-4 pl-4 pr-4 w-96 h-44 rounded-2xl text-white">
    <div class="flex gap-3 items-start h-[103px]">
      <img src="${logo}" alt="">
      <div class="">
        <p class="text-lg font-semibold h-6 -mt-1 mb-1">${name}</p>
        <article class="text-[#fbfdfeb3] text-sm w-64">
          ${description}
        </article>
      </div>
    </div>

        <div class="flex justify-between items-center">
          <button id="remove" class="cursor-pointer text-[] w-20 h-10 flex items-center justify-center rounded-3xl bg-[#2f364b]">
            Remove
          </button>
          <label for="switch">
            <input id="checkbox" type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
  </aside>`
  productsForm.innerHTML += html
})
}


function clearInside(ele){
  ele.innerHTML = ''
}


function activesArr(array){
   
  return  array.filter((extention) =>{
    return extention.isActive === true
  })
}

function passivesArr(array){
  return array.filter((extention) =>{
    return extention.isActive === false
  })
}

let activeExtentionsArr = activesArr(extentions);
let passiveExtentionsArr = passivesArr(extentions)



function actionsHandler(clickedEle){
  let exactClickId = clickedEle.target.id
  // exactClick.preventDefault()

  if(exactClickId === 'bg_mode'){
    let bodyClass = body.classList
    
        if(bodyClass.contains('linear')){
          bodyClass.replace('linear', 'white_background')
        }else{
          bodyClass.replace('white_background', 'linear')
        }
  }
  if(exactClickId === 'all' ){
    clearInside(productsForm)
    productLoad(extentions)
  }
  if(exactClickId === 'active'){
    clearInside(productsForm)
    productLoad(activeExtentionsArr)
  }
  if(exactClickId === 'inactive'){
    clearInside(productsForm)
    productLoad(passiveExtentionsArr)
  }
  // if(exactClickId === 'remove'){
  // }

}


productLoad(extentions)
