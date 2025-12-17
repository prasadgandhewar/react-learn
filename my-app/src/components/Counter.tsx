import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { decrement, increment, modifyCount } from "../store/slices/counterSlice";
import incrementAsync from "../store/slices/thunk";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch: AppDispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(modifyCount(10))}>++</button>
        </div>
    )
}