import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines
        data={props.data}
        limit={props.limit || 25}
        width={120}
        height={20}
      >
        <SparklinesLine color={props.color || 'blue'} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg: {props.data.reduce((a, b) => a + b) / props.data.length}</div>
    </div>
  );
};
