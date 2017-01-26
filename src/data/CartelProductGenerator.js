export default class CartelProductGenerator {
    constructor() {
        this.products = 0;
        this.firstTitles = this.getFirstTitles();
        this.middleTitles = this.getMiddleTitles();
        this.secondTitles = this.getSecondTitles();
        this.genres = this.getGenres();
        this.skuCount = 1000;
        this.idCount = 5000;

        this.config = {
            number_of_products: 100
        }
    }

    getProducts() {
        if (this.products === 0) {
            this.products = this.buildProducts();
        }
        return this.products;
        
    }

    buildProducts() {
        let array = [];
        for(let c = 0; c != this.config.number_of_products; c++) {
            array.push(this.buildProduct());
        }

        return array;
    }

    buildProduct() {
        let productObj = {};

        productObj.id = this.idCount;
        productObj.brand_name = this.generateArtistTitle();
        productObj.product_title = this.generateAlbumTitle();
        productObj.production_date = Math.floor(Math.random() * (2018 - 1990 + 1)) + 1990;
        productObj.details = {
            genre: this.generateGenre(),
            record_label: this.generateMusicLabel()
        }
        productObj.variants = this.buildVariants();
        
        this.idCount++;

        return productObj
    }

    buildVariants() {
        let c = Math.floor(Math.random() * 3) + 1;
        let variantObj = {};

        for (let i = 0; i != c; i++) {
            let tmpObj = {};

            tmpObj.sku = this.skuCount;
            switch(i) {
                case 0:
                    tmpObj.type = 'vinyl'
                    break;
                case 1:
                    tmpObj.type = 'cd'
                    break;
                case 2:
                    tmpObj.type = 'digital'
            }
            tmpObj.price = this.generatePrice();
            this.skuCount++;

            variantObj[i] = tmpObj;
        }

        return variantObj;
    }

    generateArtistTitle() {
        let firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        let secondTitleNum = Math.floor((Math.random() * this.secondTitles.length) + 0);
        let theCalc = Math.floor((Math.random() * 3) + 1);
        let the = '';
        if (theCalc == 1) the = 'The ';

        return the + this.firstTitles[firstTitleNum] + ' ' + this.secondTitles[secondTitleNum];
    }

    generateAlbumTitle() {
        let firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        let middleTitleNum = Math.floor((Math.random() * this.middleTitles.length) + 0);
        let secondTitleNum = Math.floor((Math.random() * this.secondTitles.length) + 0);
        let middleCalc = Math.floor((Math.random() * 2) + 1);
        let middle = '';
        if (middleCalc == 1) middle = this.middleTitles[middleTitleNum] + ' ';

        return this.firstTitles[firstTitleNum] + ' ' + middle + this.secondTitles[secondTitleNum];
    }

    generatePrice() {
        let mainPrice = Math.floor((Math.random() * 50) + 1);
        let subPrice = Math.floor((Math.random() * 99) + 0);

        if (subPrice.toString().length == 1) subPrice =  subPrice.toString() + '0';

        return {
            gbp: mainPrice + '.' + subPrice,
            eur: (mainPrice + 5) + '.' + subPrice,
            usd: (mainPrice + 10) + '.' + subPrice
        };
    }

    generateGenre() {
        return this.genres[Math.floor((Math.random() * this.genres.length) + 0)];
    }

    generateMusicLabel() {
        var firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        var middleTitleNum = Math.floor((Math.random() * this.middleTitles.length) + 0);

        return this.middleTitles[middleTitleNum] + ' ' + this.firstTitles[firstTitleNum];
    }

    getFirstTitles() {
        return [
            'Laughing', 'Cold', 'Red', 'Black', 'Deadly', 'Shit', 'Kicking', 'Bastardly', 'Only', 'Charming',
            'Cool', 'Fire', 'Scary', 'Scum', 'Lonely', 'Smashing', 'Defiant', 'Massive', 'I want', 'We\'re', 
            'High on', 'My', 'Serial', 'Ancient'
        ];
    }

    getMiddleTitles() {
        return [
            'On', 'With', 'Over', 'Down', 'Against', 'Turd', 'Mystic', 'Telepathic', 'Giant', 'Tiny'
        ];
    }

    getSecondTitles() {
        return [
            'Elephants', 'Children', 'Fuckers', 'Bastards', 'Monkeys', 'Pedos', 'Guns', 'Stones', 'Smokers', 'Wizards',
            'Beaters', 'Marshmellows', 'Individuals', 'Introspectives', 'Comics', 'Riders', 'Bandits', 'Home Wreckers',
            'Birds', 'Witch'
        ];
    }

    getGenres() {
        return [
            'rock', 'punk', 'metal', 'jazz', 'grunge'
        ];
    }
}