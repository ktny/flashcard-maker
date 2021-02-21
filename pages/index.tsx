import Layout from "../components/layout";
import PlayLists from "../components/play-lists";
import { IPlayList } from "../interfaces/main";

const playLists: IPlayList[] = [
  {
    id: 1,
    name: "英語初級",
    count: 5,
    cards: [],
  },
  {
    id: 2,
    name: "英語中級",
    count: 10,
    cards: [],
  },
  {
    id: 3,
    name: "英語上級",
    count: 15,
    cards: [],
  },
];

export default function Index() {
  return (
    <Layout>
      <PlayLists playLists={playLists} />
    </Layout>
  );
}
