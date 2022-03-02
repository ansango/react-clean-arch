import { useAppSelector, useAppDispatch } from "./app/redux/hooks";
import { fetchPlants } from "./app/redux/plant/plant.slice";

function App() {
  const dispatch = useAppDispatch();
  const { loading, plants } = useAppSelector(({ plantSlice }) => ({
    plants: plantSlice.plants,
    loading: plantSlice.loading,
  }));
  return (
    <div className="App">
      <div>
        {loading ? "Loading..." : "Loaded"}
        <div>
          {plants.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
        <button onClick={() => dispatch(fetchPlants())} disabled={loading}>
          Fetch Plants
        </button>
      </div>
    </div>
  );
}

export default App;
