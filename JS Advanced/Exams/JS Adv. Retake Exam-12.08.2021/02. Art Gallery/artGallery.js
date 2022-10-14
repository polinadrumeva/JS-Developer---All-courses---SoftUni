class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200, "photo":50, "item":250 };
        this.listOfArticles = [];
        this.guests = [];
        
    }

    addArticle(articleModel, articleName, quantity) {
        if(articleModel.toLowerCase() !== 'picture' && articleModel.toLowerCase() !== 'photo' && articleModel.toLowerCase() !== 'item') {
            throw new Error('This article model is not included in this gallery!');
        }
        if(this.listOfArticles.find(x => x.articleName === articleName)) {
            this.listOfArticles[articleName] += quantity;
        } else {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({articleModel, articleName, quantity});
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
    }

    inviteGuest(guestName, personality) {
        if(this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;
        if(personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        }

        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let searched = this.listOfArticles.find(x=> x.articleName === articleName);
        let searchedModel = searched.articleModel === articleModel;
        if(!searched || !searchedModel) {
            throw new Error("This article is not found.");
        }
        if(searched.quantity === 0) {
            return `The ${articleName} is not available`;
        }
        if(!this.guests.find(x=> x.guestName === guestName)) {
            return "This guest is not invited.";
        }

        let currentObj = this.guests.find(x => x.guestName === guestName);
        let currentArticle = this.listOfArticles.find(x=> x.articleName === articleName && x.articleModel === articleModel);
        let currentValue = Number(this.possibleArticles[articleModel]);
        if(currentObj.points < currentValue) {
            return "You need to more points to purchase the article.";
        } else {
            currentObj.points -= currentValue;
            currentArticle.quantity--;
            currentObj.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        }
    }

    showGalleryInfo(criteria) {
        let result = '';
        if(criteria === 'article') {
            result += `Articles information:\n`;
            for (let el of this.listOfArticles) {
                result += `${el.articleModel} - ${el.articleName} - ${el.quantity}\n`;
            }
        } else if (criteria === 'guest') {
            result += `Guests information:\n`;
            for (let el of this.guests) {
                result += `${el.guestName} - ${el.purchaseArticle}\n`;
            }
        }

        return result.trim();
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

