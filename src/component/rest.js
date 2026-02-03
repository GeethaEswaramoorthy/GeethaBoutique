import React, { useEffect, useState } from 'react';
 
function EffectOrderComponent() {

  const [count, setCount] = useState(0);
 
  console.log("b"); 
 
  useEffect(() => {

    console.log("a");

    // Side effect code here

  }, []);
 
  useEffect(() => {

    console.log("c");

    // Another side effect

  }, []);

  // This function is inside the render scope, so it runs during render

  const handleClick = () => {

    setCount(c => c + 1);

  };
 
  return (
<div>
<button onClick={handleClick}>Update Count</button>
<p>Count: {count}</p>
</div>

  );

}

 vertival scalling horozontal scalling
 stored procedures
 