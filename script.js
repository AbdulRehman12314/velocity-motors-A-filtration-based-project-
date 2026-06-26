const products = [
    { name: "Tesla Model S Plaid", category: "tesla", desc: "Tri-motor electric setup with 1,020 horsepower.", price: "$89,990", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500" },
    { name: "Tesla Model X", category: "tesla", desc: "Electric luxury SUV featuring falcon wing doors.", price: "$94,990", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500" },
    { name: "Tesla Model 3", category: "tesla", desc: "Compact aerodynamic everyday electric sedan.", price: "$38,990", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tesla Model Y", category: "tesla", desc: "Versatile electric crossover with dual motor AWD.", price: "$44,990", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500" },
    { name: "Tesla Cybertruck", category: "tesla", desc: "Futuristic stainless steel electric utility truck.", price: "$79,990", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500" },

    { name: "Ford Mustang GT", category: "ford", desc: "Classic high performance naturally aspirated V8 muscle.", price: "$42,495", image: "https://images.unsplash.com/photo-1610286304609-6e3ed57352d7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ford GT", category: "ford", desc: "Limited edition carbon fiber mid-engine track supercar.", price: "$500,000", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500" },
    { name: "Ford F-150 Raptor", category: "ford", desc: "High speed high-end desert off-road racing pickup truck.", price: "$78,330", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500" },
    { name: "Ford Mustang Mach-E", category: "ford", desc: "All-electric performance crossover carrying the legacy.", price: "$43,995", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500" },
    { name: "Ford Bronco Raptor", category: "ford", desc: "Extreme capability heavy duty ultra off-road SUV.", price: "$90,035", image: "https://images.unsplash.com/photo-1672866405177-8537e2e6cc79?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { name: "BMW M5 Competition", category: "bmw", desc: "Twin-turbo V8 high performance executive sedan.", price: "$111,100", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500" },
    { name: "BMW M4 Coupe", category: "bmw", desc: "Aggressive styling track ready twin-turbo inline 6.", price: "$78,100", image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500" },
    { name: "BMW i8 Roadster", category: "bmw", desc: "Futuristic hybrid sports car with butterfly doors.", price: "$147,500", image: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "BMW X5 M", category: "bmw", desc: "High performance twin-turbo luxury sports SUV build.", price: "$122,300", image: "https://images.unsplash.com/photo-1674996047492-6b5cdc2dcf0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "BMW M8 Gran Coupe", category: "bmw", desc: "The ultimate flagship 4-door luxury race machine.", price: "$138,800", image: "https://images.unsplash.com/photo-1667328558078-c27cf2a2ccfd?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { name: "Audi R8 V10", category: "audi", desc: "Naturally aspirated mid-engine iconic raw performance supercar.", price: "$158,600", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500" },
    { name: "Audi RS6 Avant", category: "audi", desc: "Twin-turbo V8 ultimate ultra high performance wagon.", price: "$125,800", image: "https://images.unsplash.com/photo-1655195575608-96d2f48dadf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Audi e-tron GT", category: "audi", desc: "Fully electric high performance grand tourer sports chassis.", price: "$106,500", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500" },
    { name: "Audi RS7 Sportback", category: "audi", desc: "Aggressive widebody luxury performance fastback layout.", price: "$127,800", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500" },
    { name: "Audi RS Q8", category: "audi", desc: "Twin-turbo elite hyper SUV engineered for lap records.", price: "$125,400", image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500" },

    { name: "Porsche 911 GT3 RS", category: "porsche", desc: "Pure naturally aspirated ultimate track performance machine.", price: "$223,800", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500" },
    { name: "Porsche Taycan Turbo S", category: "porsche", desc: "Ultra fast charging fully electric blistering fast sedan.", price: "$194,900", image: "https://images.unsplash.com/photo-1708885959562-8fd3be5f4036?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Porsche Cayman GT4", category: "porsche", desc: "Mid-engine layout pure driver-focused precision machine.", price: "$106,500", image: "https://images.unsplash.com/photo-1596450886763-6f9b7f3cbd0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Porsche Cayenne Turbo", category: "porsche", desc: "Luxury sports SUV delivering unbelievable track capabilities.", price: "$146,900", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500" },
    { name: "Porsche Panamera GTS", category: "porsche", desc: "Premium luxury high speed grand tourer built for luxury.", price: "$135,200", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500" }
];

const productsContainer = document.getElementById("productsContainer");
const brandFilter = document.getElementById("brandFilter");

function buildCatalog(list) {
    productsContainer.innerHTML = "";
    
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        
        const cardNode = document.createElement("div");
        cardNode.className = "product-card";
        
        cardNode.innerHTML = `
            <div class="image-wrapper">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="info-row">
                <span class="tag">${item.category}</span>
                <span class="price">${item.price}</span>
            </div>
            <div class="title">${item.name}</div>
            <div class="description">${item.desc}</div>
        `;
        
        productsContainer.appendChild(cardNode);
    }
}

brandFilter.addEventListener("change", function() {
    const choice = brandFilter.value;
    
    if (choice === "all") {
        buildCatalog(products);
    } else {
        const customArray = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].category === choice) {
                customArray.push(products[i]);
            }
        }
        buildCatalog(customArray);
    }
});

buildCatalog(products);