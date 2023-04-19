import { useState, useEffect } from 'react';

function UseEffectForShouldComponentUpdate(props) {
  const [prevProps, setPrevProps] = useState(props);

  useEffect(() => {
    if (prevProps !== props) {

      console.log('Component should update!');
    }
    setPrevProps(props);
  });

  return <div>{props.text}</div>;
}

export default UseEffectForShouldComponentUpdate;