import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import {useStore} from '../../store/store';
import FavouritesItemCard from '../components/FavouritesItemCard';

const FavouritesScreen = ({navigation}: any) => {
  const FavouritesList = useStore((state: any) => state.FavouritesList);
  const tabBarHeight = useBottomTabBarHeight();

  const addToFavouriteList = useStore((state: any) => state.addToFavouriteList);
  const deleteFromFavouriteList = useStore(
    (state: any) => state.deleteFromFavouriteList,
  );

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite
      ? deleteFromFavouriteList(type, id)
      : addToFavouriteList(type, id);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Favourites" />

            {FavouritesList.length == 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View style={styles.listItemContainer}>
                {FavouritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <FavouritesItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default FavouritesScreen;
