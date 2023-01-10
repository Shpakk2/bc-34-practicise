import { useEffect } from "react";
import { getTodos } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectorAllTodos, selectorDoneTodos, selectorLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch()
  const Alltodos = useSelector(selectorAllTodos)
  const doneTodos = useSelector(selectorDoneTodos)
  const isLoading = useSelector(selectorLoading)

  useEffect(
    () =>{dispatch(getTodos())}, [dispatch]
  )
  
  return (
    isLoading? <div>Loading</div>:
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      done {doneTodos?.length} todos from {Alltodos?.length} quantity
    </div>
  );
};
