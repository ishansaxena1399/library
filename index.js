let library = []

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, not ${read} yet`;
    }
}





function addBookToLibrary(title,author,pages,read){
    library.push(new Book(title,author,pages,read))
    
}

function render(arr){
    grid.innerHTML = "";
    for(let i=0;i<arr.length;i++){
        let flag = 0
        let card = document.createElement("div");
        let book_name_text = document.createElement("h3")
        let book_author_text = document.createElement("h3")
        let book_pages_text = document.createElement("h3")
        let book_read = document.createElement("h3")
        let read_button = document.createElement("button")
        let delete_button = document.createElement("button")
        delete_button.addEventListener("click",function(){
            let dataIndex = delete_button.getAttribute("data-index");
            library.splice(dataIndex,1);
            render(library);
            
        })
        
        delete_button.textContent = "Delete"
        delete_button.classList.add("del_btn")
        delete_button.setAttribute("data-index",i)

        book_name_text.textContent = arr[i].title
        book_author_text.textContent = arr[i].author
        book_pages_text.textContent = arr[i].pages
        read_button.setAttribute("data-index",i)
        if(arr[i].read===true){
        read_button.textContent = "Unread"

        read_button.classList.add("read_btn");
        } else if(arr[i].read===false){
            read_button.textContent = "Read"
            read_button.classList.add("read_btn");
            // read_button.setAttribute("data-index",i)
            
            // read_button.addEventListener("click",function(e){
            //     let dataIndex = read_button.getAttribute("data-index");
            //     library.splice(dataIndex,1);
            //     render(library);

            // })
            flag=1;

        }
        read_button.addEventListener("click",function(){
                let dataAttr = read_button.getAttribute("data-index")
                if(library[dataAttr].read === false){
                    library[dataAttr].read = true;
                } else if(library[dataAttr].read === true){
                    library[dataAttr].read = false;
                }
                render(library);
        })

        card.appendChild(book_name_text)
        card.appendChild(book_author_text)
        card.appendChild(book_pages_text)
        card.appendChild(book_read)
        card.appendChild(read_button);
        card.appendChild(delete_button)
        card.classList.add("card")
        grid.appendChild(card);
        
        book_form.style.display="none"
    }
}



const book_form = document.querySelector("#new-book");


const add_button = document.querySelector(".add-book");

add_button.addEventListener("click",function(){


    if(getComputedStyle(book_form).display==="none"){
        book_form.style.display="flex"
    } else if(getComputedStyle(book_form).display==="flex") {
        book_form.style.display="none"
    }
})



const grid = document.querySelector(".card-grid")

const add = document.querySelector(".add");

add.addEventListener("click",function(e){
    e.preventDefault()
    let book_name = document.querySelector("#name").value;
    let book_author = document.querySelector("#author").value;
    let book_pages = document.querySelector("#page").value;
    let book_read = document.querySelector("#check").checked;
    addBookToLibrary(book_name,book_author,book_pages,book_read);


    render(library)
    
    

    // let card = document.createElement("div");
    // let book_name_text = document.createElement("h3")
    // let book_author_text = document.createElement("h3")
    // let book_pages_text = document.createElement("h3")
    // book_name_text.textContent = book_name
    // book_author_text.textContent = book_author
    // book_pages_text.textContent = book_pages

    // card.appendChild(book_name_text)
    // card.appendChild(book_author_text)
    // card.appendChild(book_pages_text)
    // card.classList.add("card")
    // grid.appendChild(card);
    // book_form.style.display="none"
})



function read_unread(){
    let read_buttons = document.querySelectorAll(".read_btn");
    read_buttons.forEach(btn=>function(){
        btn.addEventListener("click",function(){
            console.log(btn)
            let dataAttr = btn.getAttribute("data-index")
            if(library[dataAttr].read === false){
                library[dataAttr].read = true;
            } else {
                library[dataAttr].read = false;
            }
            render(library);
        })
    })
}


