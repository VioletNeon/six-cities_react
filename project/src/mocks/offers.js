const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: [
    'https://images.pexels.com/photos/6489091/pexels-photo-6489091.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200&w=260',
    'https://images.pexels.com/photos/6312073/pexels-photo-6312073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=260',
  ],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'https://images.pexels.com/photos/6489091/pexels-photo-6489091.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200&w=260',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
}, {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370326,
      longitude: 4.895568,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'The place is far from what is called “a circus”. It is a well-known meeting point of the city',
  goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 2,
    isPro: false,
    name: 'Polina',
  },
  id: 2,
  images: [
    'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6585616/pexels-photo-6585616.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6585622/pexels-photo-6585622.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6238607/pexels-photo-6238607.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  ],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938498599,
    longitude: 4.673877537491069,
    zoom: 7,
  },
  maxAdults: 3,
  previewImage: 'https://images.pexels.com/photos/6238607/pexels-photo-6238607.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  price: 100,
  rating: 4.5,
  title: 'The world-known clock.',
  type: 'room',
}, {
  bedrooms: 5,
  city: {
    location: {
      latitude: 52.370659,
      longitude: 4.895899,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'The most famous museum of waxworks. It presents all famous people from singers and actors to Prime Ministers and Presidents.',
  goods: ['Cable TV', 'Washing machine', 'Coffee machine'],
  host: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 3,
    isPro: false,
    name: 'Anna',
  },
  id: 3,
  images: [
    'https://images.pexels.com/photos/6394512/pexels-photo-6394512.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/5745940/pexels-photo-5745940.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/800305/pexels-photo-800305.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/5824528/pexels-photo-5824528.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  ],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.35514938499567,
    longitude: 4.673877537494325,
    zoom: 8,
  },
  maxAdults: 6,
  previewImage: 'https://images.pexels.com/photos/5824528/pexels-photo-5824528.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  price: 200,
  rating: 3.5,
  title: 'Paul\'s Cathedral and many monuments and beautiful parks.',
  type: 'house',
}, {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370123,
      longitude: 4.895432,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
  description: 'The official name is Palace of Westminster. It includes more than 1,100 rooms, more than a hundred stairs and about 5 kilometers of corridors.',
  goods: ['Heating', 'Cable TV', 'Washing machine', 'Dishwasher'],
  host: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: true,
    name: 'Tina',
  },
  id: 4,
  images: [
    'https://images.pexels.com/photos/6636318/pexels-photo-6636318.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/4532825/pexels-photo-4532825.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6899443/pexels-photo-6899443.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6758785/pexels-photo-6758785.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/6636246/pexels-photo-6636246.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
    'https://images.pexels.com/photos/5824869/pexels-photo-5824869.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  ],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938494352,
    longitude: 4.673877537499487,
    zoom: 9,
  },
  maxAdults: 3,
  previewImage: 'https://images.pexels.com/photos/6899443/pexels-photo-6899443.jpeg?auto=compress&cs=tinysrgb&h=200&w=260',
  price: 140,
  rating: 4.9,
  title: 'One of London’s most recognisable landmarks which is located in Trafalgar Square.',
  type: 'hotel',
},
];

export default offers;