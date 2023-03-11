const Pics = document.querySelectorAll('.Pic')
                window.addEventListener('scroll', checkBoxes)
                checkBoxes()

                function checkBoxes(){
                    const triggerBottom = window.innerHeight / 5 * 4
                    Pics.forEach(Pic =>{
                        const boxTop = Pic.getBoundingClientRect().top
                        if(boxTop < triggerBottom){
                            Pic.classList.add('show')
                        }else{
                            Pic.classList.remove('show')
                        }
                    })
                }