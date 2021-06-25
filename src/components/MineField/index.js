import React from 'react'
import { View } from 'react-native'
import { Field } from '../Field';

import { styles } from './styles';

export function MineField({
  onOpenField,
  onSelectField,
  board
}) {
  const rows = board.map((rows, r) => {
    const columns = rows.map((field, c) => {
      return <Field {...field} key={c}
        onOpen={() => onOpenField(r, c)}
        onSelect={e => onSelectField(r, c)} />
    })
    return <View key={r}
      style={{ flexDirection: 'row' }}>{columns}</View>
  })
  return <View style={styles.container}>{rows}</View>
}
