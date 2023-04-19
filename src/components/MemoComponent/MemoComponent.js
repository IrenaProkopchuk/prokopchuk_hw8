import React from 'react';

const MemoComponent = React.memo(({ propA, propB, propC }) => {
  return (
    <div>
      <p>Prop A: {propA}</p>
      <p>Prop B: {propB}</p>
      <p>Prop C: {propC}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    (prevProps.propA === nextProps.propA)||(prevProps.propB === nextProps.propB)||(prevProps.propC === nextProps.propC)
  )
});

export default MemoComponent;