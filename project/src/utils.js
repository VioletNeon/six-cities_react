import {AuthorizationStatus} from './const';

const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

const adaptToClient = (dataItem) => {
  const adaptedItem = Object.assign(
    {},
    dataItem,
    {
      host: {
        avatarUrl: dataItem.host.avatar_url,
        id: dataItem.host.id,
        isPro: dataItem.host.is_pro,
        name: dataItem.host.name,
      },
      isFavorite: dataItem.is_favorite,
      isPremium: dataItem.is_premium,
      maxAdults: dataItem.max_adults,
      previewImage: dataItem.preview_image,
    },
  );

  delete adaptedItem.is_favorite;
  delete adaptedItem.is_premium;
  delete adaptedItem.max_adults;
  delete adaptedItem.preview_image;

  return adaptedItem;
};

const adaptCommentToClient = (dataItem) => (
  Object.assign(
    {},
    dataItem,
    {
      user: {
        avatarUrl: dataItem.user.avatar_url,
        id: dataItem.user.id,
        isPro: dataItem.user.is_pro,
        name: dataItem.user.name,
      },
    },
  )
);

const generateKey = () => {
  let startNum = 0;
  return () => startNum++;
};

const toUpperFirstLetter = (str) => !str ? str : (str[0].toUpperCase() + str.slice(1));

export {isCheckedAuth, adaptToClient, generateKey, toUpperFirstLetter, adaptCommentToClient};
