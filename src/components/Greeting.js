import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings';

const Greeting = () => {
  const { greeting, loading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div>
      <h2>Greeting:</h2>
      { loading === true ? 'Loading!!!' : <h3 className="message">{greeting.message}</h3> }
    </div>
  );
};

export default Greeting;
