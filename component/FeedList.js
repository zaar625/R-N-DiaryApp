import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, ListHeaderComponent}) => {
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    // console.log({contentSize, layoutMeasurement, contentOffset});
  };
  return (
    <FlatList
      data={logs}
      sytle={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
export default FeedList;
