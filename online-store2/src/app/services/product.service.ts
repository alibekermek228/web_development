import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb',
      description: 'Новый iPhone с топовой камерой и мощным чипом для любых задач.',
      price: 949990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Apple iPhone 15 128Gb',
      description: 'Сбалансированная модель iPhone с отличным экраном и камерой.',
      price: 429990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Apple iPhone 17 Pro Max 256Gb',
      description: 'Большой экран, высокая автономность и производительность флагманского уровня.',
      price: 1049990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-oranzhevyi-145468241/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Apple iPhone 13 128Gb',
      description: 'Популярный iPhone, который до сих пор отлично подходит на каждый день.',
      price: 319990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-chernyi-102298404/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Apple iPhone 17 Pro 256Gb (темно-синий)',
      description: 'Свежий Pro с качественной камерой и премиальным дизайном.',
      price: 949990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: 'ThundeRobot 911S Core D',
      description: 'Игровой ноутбук с мощной начинкой для учебы, работы и игр.',
      price: 429990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ThundeRobot 911 X Wild Hunter G2D',
      description: 'Мощный ноутбук для тяжелых задач и современных игр.',
      price: 499990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/p64/59735835.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p40/p64/59735835.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p64/59735836.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p64/59735837.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p64/59735839.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2d-15-6-16-gb-ssd-512-gb-bez-os-i5165sg45n-144403452/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'ARTEO Prime One 14',
      description: 'Легкий и компактный ноутбук для учебы и повседневной работы.',
      price: 239990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/pa8/78549507.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p40/pa8/78549507.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/pa8/78549508.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pa8/78549509.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/paa/78549510.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/arteo-prime-one-14-16-gb-ssd-512-gb-win-11-2000000000725-146025962/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'HYDRA Home Razor R7',
      description: 'Производительный ноутбук с SSD и удобной клавиатурой.',
      price: 274990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p92/104344158.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p92/104344158.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/p92/104344159.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p8f/104344160.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p8b/32968744.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-razor-r7-15-6-16-gb-ssd-512-gb-win-11-h30-136547226/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HYDRA Home Razor R5',
      description: 'Надежный ноутбук для офиса, браузера и учебных программ.',
      price: 249990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p99/pc8/39543675.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p99/pc8/39543675.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pc8/39543676.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pc8/39543677.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pc8/39543678.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-razor-r5-15-6-16-gb-ssd-512-gb-win-11-h31-138766585/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: 'HYDRA Home Minor (бежевый)',
      description: 'Компактные беспроводные наушники для повседневного использования.',
      price: 8990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p7f/46750477.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/p7f/46750478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p7c/46750482.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'HYDRA Home Minor (черный)',
      description: 'Беспроводные наушники с удобной посадкой и простым управлением.',
      price: 8990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p23/46750539.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/p23/46750539.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p20/46750540.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p20/46750542.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p20/46750543.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-chernyi-120724113/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'HYDRA S61 (черный)',
      description: 'Доступная модель наушников с акцентом на бас и автономность.',
      price: 7990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p74/46240160.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p74/46240160.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/p74/46240161.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p74/46240164.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc2/p73/46240167.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-s61-chernyi-118584619/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Air Pro 2 (белый)',
      description: 'Легкие TWS-наушники для звонков, музыки и повседневных задач.',
      price: 6990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/pca/115884055.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/hcb/87200652984350.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'HYDRA S61 (белый)',
      description: 'Бюджетные беспроводные наушники с приятным звучанием.',
      price: 7990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/peb/46239909.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/peb/46239909.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/pee/46239910.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/pee/46239911.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/pee/46239912.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-s61-belyi-118584510/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'G-VIIL G2000 10"',
      description: 'Планшет с большим экраном и увеличенным объемом памяти.',
      price: 94990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p69/p48/13901399.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p48/13901399.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p92/13901400.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/p9b/8911127.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p36/13901340.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/g-viil-g2000-10-djuim-16-gb-512-gb-chernyi-131636935/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Apple iPad A16 11 2025 Wi-Fi (серебристый)',
      description: 'Свежий iPad с хорошей производительностью и отличным экраном.',
      price: 249990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p46/37011696.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Apple iPad A16 11 2025 Wi-Fi (синий)',
      description: 'Мощный и легкий планшет для учебы, развлечений и работы.',
      price: 249990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p46/37011696.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Xiaomi Redmi Pad 2 4G 11"',
      description: 'Планшет Xiaomi с большим экраном и поддержкой мобильной сети.',
      price: 169990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p9b/46318885.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Xiaomi Redmi Pad 2 11"',
      description: 'Удобный планшет для видео, учебы и браузера на каждый день.',
      price: 149990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/p41/46204511.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((product) => product.categoryId === categoryId);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
