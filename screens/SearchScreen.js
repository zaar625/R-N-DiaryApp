import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchContext from '../contexts/SearchContext';
import LogContext from '../contexts/LogContext';
import FeedList from '../component/FeedList';
import EmptySearchResult from '../component/EmptySearchResult';

const SearchScreen = ({navigation}) => {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }
  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default SearchScreen;
