

const url = "https://fakestoreapi.com/products"

$.get(url, (respuesta, estado) => {

    if(estado == "success") {
        
        respuesta.forEach(element => {
            $("#cards").append(
                `
                <div class="col-3 border border-primary">
                    <p class="text-success">${element.title}</p>
                    <p class="text-danger">${element.price}</p>
                </div>
                `
            );
        });
    }
})