//list of products
var items = {
    fruitName: [
        "Baby Jack Fruit","Cooking Banana","Dragon Fruit","Durian","Elephant Mango","Hoa Loc Mango","Jack Fruit","Jujubee",
        "Kalamadin","Longan Rambutan","Long Kong","Lychee","Mangosteen","Milk Fruit","Rambutan","Red Rose Apple","Sapodina",
        "Small Seed Longan","Soursop","Sugar Apple","Thai Mango","White Rose Apple"
    ],
    vegetableName: [
        "Acacia","Baby Eggplant","Balingale","BambooShoot","Banana Flower Slices","Bitter Leaves","Bitter Nut","Bong So Dua",
        "Bong Thien Ly","Chinese Glory","Cinnamon Basil","Culantro","Dang Leaves","Draceana","Finger Mint","Fish Mint","Galanga",
        "Holy Basil","Jamacai Pepper","Lemon Basil","Lemon Leaves","Magosa","Magosa Flower","Mimosa","Mint","Pananous","Par Wan",
        "Penny Wort","Pepper Mint","Pocket Leaves","Rau Moung Cay","Red Chilli","Red Mint","Salad Banana","Samek Leaf","Taro Stem",
        "Teru Leaf","Thyme","Tumaric","Vang Leaves","Vietnamese Spinach","Water Celery","Water Mint","Wing Bean","Yanang Leaves",
        "Yute Leaves"
    ],
    fruitNameViet: [
        "Mit To Nu","Chuoi Su","Thanh Long","Sau Rieng","Xoai Tuong","Xoai Cac","Mit Thai lan","Tao Thai","Trai Tac","Chom Chom Nhan",
        "Bon Bon","Trai Vai","Mang Cut","Trai Sua","Chom Chom Thai","Man Do","Sapoche","Nhan Hot Tieu","Mang Cau Xiem","Mang Cau Dai",
        "Xoai Thai","Man Trang"
    ],
    vegetableNameViet: [
        "Sà Om","Cà Thái","Ngai Bún","Mang Tuoi","Bap Chuoi Bào","La Trau","Trai Cao","Bong So Dua","Bong Thien Ly","Rau Muong Bao",
        "Rau Que","Ngo Gai","Rau Dang","Quan Am Truc","Rau Ram","Vap Ca","Cu Nghe","Bay Capao","Ot Tron","King Gioi","Itu","La Chanh",
        "Sau Dau","Bong Sau Dau","Rau Nhut","Hung Lui","La Dua","Rau Bo Ngot","Rau Ma","Hung Cay","La Lop","Rau Muong Cay","Ot Hiem Do",
        "Tia To","Chuoi Chat","Samek Leaf","Bac Ha","Teru Leaf","Thyme","Cu Nghe","La Vang","Mong Toi","Rau Can Nuoc","Ngo Om","Dau Rong","Yanang","Rau Day"
    ],
    fruitPic: [
        "babyJackFruits","cookingBanana","dragonFruit","durian","elephantMango","hoaLocMango","jackFruit","jujubee","kalamadin",
        "longAnRambutan","longKong","lychee","mangosteen","milkFruits","rambutan","redRoseApple","sapodina","smallSeedLongAn",
        "soursop","sugarApple","thaiMango","whiteRoseApple",
    ],
    vegetablePic: [
        "acacia","babyEggplant","balingale","bambooShoot","bananaFlowerSlices","bitterLeaves","bitterNut","bongSoDua","bongThienLy",
        "chineseGlory","cinnamonBasil","culantro","dangLeaves","draceana","fingerMint","fishMint","galanga","holyBasil",
        "jamacaiPepper","lemonBasil","lemonLeaves","magosa","magosa","mimosa","mint","pananous","parWan","PennyWort","pepperMint",
        "pocketLeaves","rauMuongCay","redChili","redMint","saladBanana","samekLeaf","tarostem","teruleaf","thyme","turmaric","vangLeaves",
        "vietnameseSpinach","waterCelery","waterMint","wingBeans","yanangLeaves","yuteLeaves"
    ]
}

//Global variable
var cart = [];


//when the page opens first thing the user will see
$(document).ready(function(){
    $(`.cartTable`).hide();
    // for(var i = 0; i < 1; i++){
        for(var i = 0; i < items.fruitName.length; i++){
            var itemBox = $(`<div class="card" style="width: 18rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/fruits/${items.fruitPic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h5>${items.fruitName[i]} - ${items.fruitNameViet[i]}</h5>`);
            var itemMatch = items.fruitName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch}" placeholder="Amount of Box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
            var addBtn = $(`<button type="button" class="btn btn-success addToCart" data-item="${items.fruitName[i]} - ${items.fruitNameViet[i]}" data-match="${items.fruitName[i]}" data-type="fruit">Add to Cart</button>`);

            itemBody.append(itemName);
            itemBody.append(amtInp);
            itemBody.append(addBtn);

            itemBox.append(image);
            itemBox.append(itemBody);


            $("#item").append(itemBox);
        }
})

// This function will show the user all fruits when they click the fruit button 
$('.fruitBtn').on('click', function() {
    $(`.cartTable`).hide();
    $('#item').empty();
    // for(var i = 0; i < 1; i++){
        for(var i = 0; i < items.fruitName.length; i++){
            var itemBox = $(`<div class="card" style="width: 18rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/fruits/${items.fruitPic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h5>${items.fruitName[i]} - ${items.fruitNameViet[i]}</h5>`);
            var itemMatch = items.fruitName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch}" placeholder="Amount of Box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
            var addBtn = $(`<button type="button" class="btn btn-success addToCart" data-item="${items.fruitName[i]} - ${items.fruitNameViet[i]}" data-match="${items.fruitName[i]}" data-type="fruit">Add to Cart</button>`);

            itemBody.append(itemName);
            itemBody.append(amtInp);
            itemBody.append(addBtn);

            itemBox.append(image);
            itemBox.append(itemBody);


            $("#item").append(itemBox);
        }
})

// This function will show the user all vegetable when they click the vegetable button 
$('.vegBtn').on('click', function() {
    $(`.cartTable`).hide();
    $('#item').empty();
    // for(var i = 0; i < 1; i++){
            for(var i = 0; i < items.vegetableName.length; i++){
        var itemBox = $(`<div class="card" style="width: 18rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/vegetables/${items.vegetablePic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h5>${items.vegetableName[i]} - ${items.vegetableNameViet[i]}</h5>`);
            var itemMatch = items.vegetableName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch}" placeholder="Amount in Pounds" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
            var addBtn = $(`<button type="button" class="btn btn-success addToCart" data-item="${items.vegetableName[i]} - ${items.vegetableNameViet[i]}" data-match="${items.vegetableName[i]}" data-type="vegetable">Add to Cart</button>`);

            itemBody.append(itemName);
            itemBody.append(amtInp);
            itemBody.append(addBtn);

            itemBox.append(image);
            itemBox.append(itemBody);


            $("#item").append(itemBox);

    }
})

//function to capture the amount of items the user wants to add to cart and change cart total
$(document).on('click', 'button.addToCart',function() {
    var item = $(this).attr('data-item');
    var preAmo = $(this).attr('data-match').split(' ').join('');
    var type = $(this).attr('data-type')
    var amount = $("." + preAmo).val();
    var totAmount = 0;

    var addToCart = {"type": type, "product" : item, "quantity" : amount};

    cart.push(addToCart);
    console.log(cart)
    $("." + preAmo).val('');

    for(var i = 0; i < cart.length; i++){
        totAmount += parseInt(cart[i]["quantity"]);
    }
    $('.cartBtn').text('Cart ' + totAmount)
})

//this function will show the page when the user clicks on the Cart
$('.cartBtn').on('click', function() {
    $(`tbody`).empty();
    $(`#custInfo`).empty();
    $(`.cartTable`).show();
    $('#item').empty();

    var companyName = $(`<input type="text" class="form-control " placeholder="Company Name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
    var address = $(`<input type="text" class="form-control " placeholder="Address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
    var phone = $(`<input type="number" class="form-control " placeholder="Phone" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
    var email = $(`<input type="email" class="form-control " placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
    var submit = $(`<button type="button" class="btn btn-success">Submit</button>`);

    for(var i = 0; i < cart.length; i++){
        var row = $(`<tr>`)
        var col = $(`<td>${i + 1}</td><td>${cart[i]['type']}</td><td>${cart[i]['product']}</td><td>${cart[i]['quantity']}</td>`)

        row.append(col)
        $(`tbody`).append(row);
    }

    $(`#custInfo`).append(companyName)
    $(`#custInfo`).append(address)
    $(`#custInfo`).append(phone)
    $(`#custInfo`).append(email)
    $(`#custInfo`).append(submit)
})