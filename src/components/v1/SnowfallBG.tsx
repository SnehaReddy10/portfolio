import React from 'react';
import { Snowfall } from 'react-snowfall';

function SnowfallBG() {
  return (
    <Snowfall
      color="#e5d5f6"
      snowflakeCount={200}
      radius={[0.5, 3]}
      wind={[-8.0, 1.0]}
    />
  );
}

export default SnowfallBG;
