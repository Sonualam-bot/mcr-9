
import './App.css';
import { Routes, Route } from "react-router-dom"
import { LeftNavigation } from "./pages/navigation/LeftNavigation";
import { Homepage } from "./pages/homepage/Homepage";
import { ExplorePage } from "./pages/explore/ExplorePage";
import { Playlists } from "./pages/playlists/Playlists";
import { WatchLater } from "./pages/watchLater/WatchLater";
import { CategoryWiseVideoList } from "./pages/categoryVideoList/CategoryWiseVideoList";
import { Watch } from "./watch/Watch";

function App() {
  return (
    <div className="App" >


      <section className="left-section" >
        <LeftNavigation />
      </section>

      <section className="mid-section">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/catVideoList/:selectedCategory" element={<CategoryWiseVideoList />} />
          <Route path="/watch/:watchVideoId" element={<Watch />} />

        </Routes>

      </section>



    </div>
  );
}

export default App;
