const goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];

const reformData = (items) => {
  return items.map(({ product_name, ...rest }) => {
        return {
            ...rest,
            title: product_name
        }
    })
}
const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const GOODS_POSTFIX = "/catalogData.json";

const service = function (url, postfix) {
    return new Promise((resolve, reject) => {
        fetch(`${url}${postfix}`).then((response) => {
            return response.json();
        }).then((data) => {
            resolve(data);
        })
    })
}




class GoodsItem {
    constructor({
        title,
        price
    }) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
    <h3 class="goods-item-title" >${this.title}</h3>
    <p class= "goods-item-price" >${this.price}</p>
    </div>`;
    }
}

class GoodsList { 

    setGoods() {
        return service(URL, GOODS_POSTFIX).then((data) => {
            return reformData(data)
        });
    }
    render() {
        this.setGoods().then((data) => {
           this.goods = data;
           const _goods = [...this.goods];
        const _goodsItems = _goods.map((item) => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        })
        document.querySelector('.goods-list').innerHTML = _goodsItems.join('');
        })
        
    }
    GetSumm() {
        return this.goods.reduce((prev, {
            price
        }) => prev + price, 0)
        // this.goods.reduce((prev, item) => prev + item.price, 0)   
    }
}
class Basket {

    setVision() {}
    renderer() {}

}
class BasketItem {
    render() {}
    setCount() {}
    deleteItem() {}
}

onload = () => {
    const goodsList = new GoodsList();
    goodsList.render();
}

