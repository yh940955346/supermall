import  request  from "./request"
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.realPrice = itemInfo.lowNowPrice;
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo){
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.fans = shopInfo.cFans;
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
  }
}