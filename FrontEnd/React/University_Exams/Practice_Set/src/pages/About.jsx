import { useEffect, useState } from 'react';
import json from '../store/data.json';
import { JJK } from '../components/JJK';

const About = () => {
  const [cards] = useState(json.data);

   const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
   const options = {
   	method: 'GET',
   	headers: {
   		'x-rapidapi-key': 'ba7c75d01emshd6979adde30835cp128c3fjsn46bc6df06a24',
   		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
   	}
   };

   useEffect(() => {
  const fetchAnime = async () => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  fetchAnime();
}, []);

  return (
    <div className="grid2">HOME
      {cards.map(c => (
        <JJK key={c.id} character={c} />
      ))}
    </div>
  );
};

export default About;