let products = [];

function addProduct() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = parseFloat(document.getElementById("price").value);
    let stock = parseInt(document.getElementById("stock").value);

    if (!name || !price || !stock) {
        alert("Please fill all fields");
        return;
    }

    let product = {
        name,
        category,
        price,
        stock
    };

    products.push(product);
    showAll();
}

function showAll() {
    display(products);
}

function showElectronics() {
    let electronics = products.filter(p => p.category === "Electronics");
    display(electronics);
}

function showTop2Expensive() {
    let sorted = [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 2);

    display(sorted);
}

function display(list) {
    let output = document.getElementById("output");
    output.innerHTML = "";

    list.forEach(p => {
        output.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
                <p>Price: ₹${p.price}</p>
                <p>Stock: ${p.stock}</p>
            </div>
        `;
    });
}