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
        "Holy Basil","Jamacai Pepper","Lemon Balm","Lemon Basil","Lemon Leaves","Magosa","Magosa Flower","Mimosa","Mint","Pananous","Par Wan",
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
        "Rau Que","Ngo Gai","Rau Dang","Quan Am Truc","Rau Ram","Vap Ca","Cu Rieng","Bay Capao","Ot Tron","Kinh Gioi","Itu","La Chanh",
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
        "jamacaiPepper","lemonBalm","lemonBasil","lemonLeaves","magosa","magosaFlower","mimosa","mint","pananous","parWan","pennyWort","pepperMint",
        "pocketLeaves","rauMuongCay","redChili","redMint","saladBanana","samekLeaf","tarostem","teruLeaf","thyme","turmaric","vangLeaves",
        "vietnameseSpinach","waterCelery","waterMint","wingBeans","yanangLeaves","yuteLeaves"
    ]
}

//Global variable
var cart = [];
$(`.cartTable`).hide();
$(`#custInfo`).hide();
$(`#pickDate`).hide();

//when the page opens first thing the user will see
$(document).ready(function(){
        for(var i = 0; i < items.fruitName.length; i++){
            var itemBox = $(`<div class="card" style="width: 10rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/fruits/${items.fruitPic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h8>${items.fruitName[i]} - ${items.fruitNameViet[i]}</h8>`);
            var itemMatch = items.fruitName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch} amInput" style="font-size: 10px;" placeholder="Amount of Box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
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
    $(`.header`).attr("style", "position: fixed")
    $(`.cartTable`).hide();
    $(`#custInfo`).hide();
    $('#item').empty();
        for(var i = 0; i < items.fruitName.length; i++){
            var itemBox = $(`<div class="card" style="width: 10rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/fruits/${items.fruitPic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h8>${items.fruitName[i]} - ${items.fruitNameViet[i]}</h8>`);
            var itemMatch = items.fruitName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch} amInput" placeholder="Amount of Box" style="font-size: 10px;" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">`);
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
    $(`.header`).attr("style", "position: fixed")
    $(`.cartTable`).hide();
    $(`#custInfo`).hide();
    $('#item').empty();
            for(var i = 0; i < items.vegetableName.length; i++){
        var itemBox = $(`<div class="card" style="width: 10rem;">`)
            
            var itemBody = $(`<div class="card-body">`)

            var image = $(`<img src="public/assets/img/vegetables/${items.vegetablePic[i]}.png" class="card-img-top" alt="Responsive image">`)
            var itemName = $(`<h8>${items.vegetableName[i]} - ${items.vegetableNameViet[i]}</h8>`);
            var itemMatch = items.vegetableName[i].split(' ').join('');
            var amtInp = $(`<input type="number" class="form-control ${itemMatch} amInput" placeholder="Amount in Pounds" aria-label="Sizing example input" style="font-size: 10px;" aria-describedby="inputGroup-sizing-sm">`);
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
    if(amount > 0){
    
        var addToCart = {"type": type, "product" : item, "quantity" : amount};
    
        cart.push(addToCart);
        console.log(cart)
        $("." + preAmo).val('');
    }

    cartTotal()
    updateOrder()
})

//this function will show the page when the user clicks on the Cart
$('.cartBtn').on('click', function() {
    $(`.header`).attr("style", "position: inherit")
    $(`tbody`).empty();
    // $(`#custInfo`).empty();
    $(`.cartTable`).show();
    $('#item').empty();

    itemList()
    custForm()
    $(`#custInfo`).show();    
})

//button to increase item quantity
$(document).on('click', 'button.inAmo',function() {
    cart[$(this).attr('data-item')]['quantity'] = parseInt(cart[$(this).attr('data-item')]["quantity"]) + 1
    itemList();
    cartTotal();
    updateOrder();
})

//button to decrease item quantity
$(document).on('click', 'button.deAmo',function() {
    cart[$(this).attr('data-item')]['quantity'] = parseInt(cart[$(this).attr('data-item')]["quantity"]) - 1
    itemList();
    cartTotal();
    updateOrder();
})

$('.inputField').keypress(function() {
    updateOrder()
});

$(document).on('click', '.inputField',function() {
    updateOrder();
})

$(document).on('click', 'button.inputField',function() {
    updateOrder();
})

$(document).on('change', 'select#orderType',function() {
    console.log($(`#pickDate`).val())
    if($(`#orderType`).val() === "Pick Up"){
        $(`#pickDate`).show();
    }else {
        $(`#pickDate`).hide();
    }
})

//Oder message sent
function updateOrder() {
    var orderList = "";
    
    for(var i = 0; i < cart.length; i++) {
        orderList += `Type:${cart[i]['type']}, Product: ${cart[i]['product']}, Quantity: ${cart[i]['quantity']}
        `
    }
    $(`#emailSubject`).val(`Canada Herb New Order: ${$(`#companyName`).val()}`)

    $(`#orderForm`).text(`
    Company Name: ${$(`#companyName`).val()}
    Person Full Name: ${$(`#personName`).val()}
    Phone: ${$(`#phone`).val()}
    Order Type: ${$(`#orderType`).val()}
    Pick Up Date: ${$(`#pickDate`).val()}
    ${orderList}
    `)
}

//cart total button change 
function cartTotal() {
    var totAmount = 0;
    for(var i = 0; i < cart.length; i++){
        totAmount += parseInt(cart[i]["quantity"]);
    }
    $('.cartBtn').text('Cart ' + totAmount)
}

//Customer form CSS position
function custForm() {

    var custlength = 150 + (110 * cart.length)

    $(`#custInfo`).attr("style", "top: " + custlength + "px");

}

//show the list of item in the cart page
function itemList() {
    $(`#itemList`).empty();
    for(var i = 0; i < cart.length; i++){
        var row = $(`<tr>`)
        var col = $(`
            <td>${i + 1}</td>
            <td>${cart[i]['type']}</td>
            <td>${cart[i]['product']}</td>
            <td>${cart[i]['quantity']}
                <button type="button" class="btn btn-dark inAmo" data-item="${i}">></button>
                <button type="button" class="btn btn-dark deAmo" data-item="${i}"><</button>
            </td>`)

        row.append(col)
        $(`tbody`).append(row);
    }
}
