const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews = [{
  comment: 'Piccadilly Circus has become an important meeting point - for as well as sightseers.',
  date: '2021-05-28T16:15:31.569Z',
  id: 1,
  rating: 3,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: true,
    name: 'Nick',
  },
}, {
  comment: 'At its heart is a bronze fountain topped by a figure of a winded archer, known as Eros, the pagan god of love.',
  date: '2021-05-25T10:10:25.569Z',
  id: 2,
  rating: 5,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 5,
    isPro: true,
    name: 'Alex',
  },
}, {
  comment: 'In the centre of the roadway stands the Cenotaph, the memorial to the fallen of both world wars.',
  date: '2021-06-02T19:55:12.569Z',
  id: 3,
  rating: 4,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 6,
    isPro: false,
    name: 'Tony',
  },
}, {
  comment: 'The streets are crowded with traffic. High \'double-decker\' buses rise above the smaller cars and vans.',
  date: '2021-06-10T09:05:04.569Z',
  id: 4,
  rating: 4,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 7,
    isPro: false,
    name: 'Robert',
  },
}, {
  comment: 'Here the medieval buildings stand side by side with modern glass high-rise offices.',
  date: '2021-06-15T11:17:35.569Z',
  id: 5,
  rating: 2,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 7,
    isPro: true,
    name: 'Ben',
  },
},
];

export default reviews;
