import React, {useContext, useState, useMemo} from 'react';
import CalendarView from '../component/CalendarView';
import LogContext from '../contexts/LogContext';
import {format} from 'date-fns';
import FeedList from '../component/FeedList';
// function FadeInAndOut() {
//   const animation = useRef(new Animated.Value(1)).current;
//   return (
//     <View>
//       <Animated.View style={[styles.rectangle, {opacity: animation}]}>
//         <Button
//           title="FadeIn"
//           onPress={() => {
//             Animated.timing(animation, {
//               toValue: 1,
//               useNativeDriver: true,
//             }).start();
//           }}
//         />
//         <Button
//           title="FadeOut"
//           onPress={() => {
//             Animated.timing(animation, {
//               toValue: 0,
//               useNativeDriver: true,
//             }).start();
//           }}
//         />
//       </Animated.View>
//     </View>
//   );
// }

const CalendarScreen = () => {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-mm-dd'),
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {maked: true};
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

export default CalendarScreen;
