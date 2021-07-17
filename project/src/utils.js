import {AuthorizationStatus} from './const';

const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

const adaptToClient = (dataItem) => {
  const adaptedItem = Object.assign(
    {},
    dataItem,
    {
      host: {
        avatarUrl: dataItem.avatar_url,
        id: dataItem.id,
        isPro: dataItem.is_pro,
        name: dataItem.name,
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

export {isCheckedAuth, adaptToClient};
