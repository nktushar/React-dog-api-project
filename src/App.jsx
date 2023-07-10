import axios from "axios";
import { useEffect, useState } from "react";
//import './App.css'

function App() {
  const [randomPic, setRandomPic] = useState("");
  const [likedDogs, setLikedDogs] = useState([]);
  const [dislikedDogs, setDislikedDogs] = useState([]);

  useEffect(() => {
    getRandomDog();
  }, []);

  const getRandomDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setRandomPic(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLikeBtn = (event) => {
    event.preventDefault();
    setLikedDogs([...likedDogs, randomPic]);
    console.log(likedDogs);
    getRandomDog();
  };

  const handleDislikeBtn = (event) => {
    event.preventDefault();
    setDislikedDogs([...dislikedDogs, randomPic]);
    getRandomDog();
  };



  return (
    <>
      <div>
        <div>
          <img src={randomPic} alt="Random Dog" />
        </div>
        <button onClick={handleLikeBtn}>Like</button>
        <button onClick={handleDislikeBtn}>Dislike</button>
      </div>
      <hr />
      <div>
        <h3>Liked Dogs</h3>
        <ul>
          {
            likedDogs.map((dog, index) => {
              return <li key={index}><img src={dog} alt="Liked Dog" /></li>
            }
            )
          }
        </ul>
      </div>

      <hr />

      <div>
        <h3>Disliked Dogs</h3>
        <ul>
          {
            dislikedDogs.map((dog, index) => {
              return <li key={index}><img src={dog} alt="Disliked Dog" /></li>
            }
            )
          }
        </ul>
      </div>
    </>
  );
}

export default App;
