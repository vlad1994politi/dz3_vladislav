const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
const tabImg = document.querySelectorAll(".tabImg")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    tabImg.forEach((item) => {
        item.style.transform = "scale(1)"
    })
}

const showTabContent = (i) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
    let transform = () => {
        tabImg[i].style.transform = "scale(1.1)"
    }
    let cleanTransform = () => {
        tabImg[i].style.transform = "scale(1)"
    }
    setTimeout(transform, 100)
    setTimeout(cleanTransform, 1000)
}

hideTabContent()
showTabContent(0)


tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, index) => {
            if(target === item){
                console.log("index-target",index)
                hideTabContent()
                showTabContent(index)
                indexVar = index
                console.log("indexVar", indexVar)
            }
        })
    }
})

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")


const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", event => {
    if (event.target === modal){
        closeModal()
    }
})



var indexVar = -1


const autoShowContent = () => {
    if(indexVar < 3){
        indexVar += 1
        hideTabContent()
        showTabContent(indexVar)
        setTimeout(autoShowContent, 3000)
    }
    else if(indexVar === 3){
        indexVar = indexVar - 3
        hideTabContent()
        showTabContent(indexVar)
        setTimeout(autoShowContent, 3000)
    }
}
autoShowContent()



window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    console.log(scrollTop)

    if (scrollTop > 3600){
        openModal()
    }
})

