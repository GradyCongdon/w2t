import { Main } from "routes/Main";
import { Nav } from "components/Nav";
import { DetailDrawer } from "routes/Detail";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { layoutState } from "states/layout";
import { sortingState } from "states/sorting";
import { teaStyleFilteringState } from "states/teaStyleFiltering";
import { viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import "./App.scss";

console.log(`msg: ${process.env.REACT_APP_GIT_MSG}`);

function App() {
  // const localStoreState = localStorage.getItem("state");
  // const state: AppState = localStoreState
  //   ? JSON.parse(localStoreState)
  //   : stateDefaults;
  const sorting = useRecoilValue(sortingState);
  const filtering = useRecoilValue(teaStyleFilteringState);
  const layout = useRecoilValue(layoutState);
  const viewGlobal = useRecoilValue(viewState);
  const whiteBalanced = useRecoilValue(whiteBalancedState);

  useEffect(() => {
    const state = {
      viewGlobal,
      sorting,
      filtering,
      layout,
      whiteBalanced,
    };
    const json = JSON.stringify(state);
    localStorage.setItem("state", json);
  }, [viewGlobal, sorting, filtering, layout, whiteBalanced]);

  return (
    <div className="app">
      <Nav />
      <Main />
      <DetailDrawer />
    </div>
  );
}

export default App;
