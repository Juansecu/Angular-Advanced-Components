export class Store {
  storeProducts: Array<object>;

  constructor() {
    this.storeProducts = [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi recusandae, saepe cumque doloribus dolor asperiores perferendis nihil odit, aliquam aspernatur dicta amet consequatur nam mollitia provident quas quia error.',
        title: 'Lorem ipsum dolor sit amet',
        image: 'mineralwater-orange.jpg',
        price: 20
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi recusandae, saepe cumque doloribus dolor asperiores perferendis nihil odit.',
        title: 'Lorem ipsum dolor sit amet consectetur',
        image: 'mineralwater-strawberry.jpg',
        price: 30
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi recusandae, saepe cumque doloribus dolor asperiores.',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'mineralwater-orange.jpg',
        price: 40
      }
    ];
  }
}
