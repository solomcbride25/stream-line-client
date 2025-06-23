import React, { useEffect, useState } from "react";

function Home() {
  //  create state (w/ useState hook) to hold data for most popular content; data type will be array of objects; each representing one movie, array of objects will be list of movies,
  // 1) most popular 2) new content 3) highest reviewed

  // in use effect, will need an URL. Update requested info

  const [mostPopular, setMostPopular] = useState([]);

  const [newContent, setNewContent] = useState([]);

  const [highestReviewed, setHighestReviewed] = useState([]);

  useEffect(() => {
    const getHighestReviewed = async () => {
        const url = `${import.meta.env.VITE_MOVIE_API_URL}/top250-movies`;
        const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${import.meta.env.VITE_MOVIE_API_KEY}`,
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, options);
        console.log(response)
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setHighestReviewed(result.items.slice(0, 3)); 
    }
} catch (error) {
    console.log(error);
  }
};
getHighestReviewed();
}, []);
console.log(highestReviewed);
  
  useEffect(() => {
    const getNewContent = async () => {
        const url = `${import.meta.env.VITE_MOVIE_API_URL}/top250-movies`;
        const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${import.meta.env.VITE_MOVIE_API_KEY}`,
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, options);
        console.log(response)
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setNewContent(result.items.slice(0, 3)); 
    }
} catch (error) {
    console.log(error);
  }
};
getNewContent();
}, []);
console.log(newContent);

  useEffect(() => {
    const getMostPopular = async () => {
      const url = `${import.meta.env.VITE_MOVIE_API_URL}/top250-movies`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${import.meta.env.VITE_MOVIE_API_KEY}`,
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        console.log(response)
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setMostPopular(result.items.slice(0, 3));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMostPopular();
  }, []);
  console.log(mostPopular);
  return (
    <main>
      <section className="poster-section">
        <h2 className="section-title">Most Popular</h2>
        <div className="poster-grid" />
        {mostPopular.map((movie, index) => (
          <div className="poster" key={index}>
            <a href="#">
              <img src={movie.image} alt={movie.title} />
            </a>
            <p>
              <strong>{movie.title}</strong>
              <br />
              {movie.platform}
            </p>
          </div>
        ))}
      </section>

      <section className="poster-section">
        <h2 className="section-title">New on Streamline</h2>
        {newContent.map((movie, index) => (
          <div>
            <div className="poster-grid" />
            <div className="poster" key={index}>
              <a href="#">
                <img src={movie.image} alt={movie.title} />
              </a>
              <p>
                <strong>{movie.title}</strong>
                <br />
                {movie.platform}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="poster-section">
        <h2 className="section-title">Highest Reviewed</h2>
        {highestReviewed.map((movie, index) => (
          <div>
            <div className="poster-grid" />
            <div className="poster" key={index}>
              <a href="#">
                <img src={movie.image} alt={movie.title} />
              </a>
              <p>
                <strong>{movie.title}</strong>
                <br />
                {movie.platform}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="poster-section">
        <h2 className="section-title">Featured Lists</h2>
      </section>
    </main>
  );
}

export default Home;
