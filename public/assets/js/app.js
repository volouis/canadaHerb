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


$(document).ready(function(){
    for(var i = 0; i < items.fruitName.length; i++){
        var image = $(`<img src="public/assets/img/fruits/${items.fruitPic[i]}.png" class="img-fluid" alt="Responsive image">`)
        var Name = $(`<p>${items.fruitName[i]} - ${items.fruitNameViet[i]}</p>`);

        $("#content").append(image);
        $("#content").append(Name);
    }

    for(var i = 0; i < items.vegetableName.length; i++){
        var image = $(`<img src="public/assets/img/vegetables/${items.vegetablePic[i]}.png" class="img-fluid" alt="Responsive image">`)
        var Name = $(`<p>${items.vegetableName[i]} - ${items.vegetableNameViet[i]}</p>`);

        $("#content").append(image);
        $("#content").append(Name);
    }


});

