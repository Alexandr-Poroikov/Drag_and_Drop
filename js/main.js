
// ========= drag blocks ==========

document.addEventListener('DOMContentLoaded', function(){

  const card = document.querySelector('.js-card');
  const cells = document.querySelectorAll('.js-cell');

  // show and hide element when moving 
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);

  // blocks for drop
  cells.forEach((item)=>{
    // active block for drop
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    // drop in block
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
  })


  // hide an element when starting to move
  function dragStart(){
    setTimeout( ()=>{
      this.classList.add('hide'); 
    },0)
  }
  // show an item when you stop moving
  function dragEnd(){
    if(card.classList.contains){
      card.classList.remove('hide');
    }
  }
  // active block for drop
  function dragEnter(event){
    event.preventDefault();
    this.classList.add('list__item-active');
  }
  function dragLeave(){
    this.classList.remove('list__item-active');
  }
  // drop in block
  function dragOver(event){
    event.preventDefault()
  }
  function drop(){
    this.appendChild(card);
  }


  // =========== drag links ============

  function dragLinks(){


    let arr = [];


    let items = document.querySelectorAll('.js-link');
    let blocks = document.querySelectorAll('.js-item');

    // event drag the element
    items.forEach((item)=>{
        item.addEventListener('dragstart', dragStrat);
    })
    // event add an element
    blocks.forEach((block)=>{
        block.addEventListener('dragover', dragOver);
        block.addEventListener('drop', drop);
    })

    // drag the element
    function dragStrat(e){
        this.setAttribute('draggable','true')
        e.dataTransfer.setData('item', e.target.id);
    }
    // cancel the browser event
    function dragOver(event){
        event.preventDefault();
    }
    // add an element in block
    function drop(e){
        let dragFlag = e.dataTransfer.getData('item');
        let element = document.querySelector(`[id=${dragFlag}]`);
       if(this.id === "delete"){
            element.remove();
       }else if(this.id === "clone"){
            let clone = element.cloneNode(true);
            this.style.color = '#000'
            this.appendChild(clone);
       }else{
            this.appendChild(element)
       }
    }
  }

  dragLinks();
}) 
