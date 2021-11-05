import './App.css';
import React, { FC, useEffect, Suspense } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from './hooks/useTypeSelector';
import { getPosts } from "./store/action/action-creators/postActions";

const PostCard = React.lazy(() => import('./components/PostCard'));

const App: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const { data, loading } = useSelector(state => state.posts);

  return (
    <div className="container">
      <h1 className="center">React Redux Typescript</h1>
      <Suspense fallback={<div>render components</div>}>
        <div className="group-post">
          {
            loading ? <div>loading...</div> : data && data.map((post, index) => {
              return <PostCard {...post} key={index} />
            })
          }
        </div>
      </Suspense>
    </div>
  );
}

export default App;
