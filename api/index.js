import fetch from 'isomorphic-unfetch';

const getPeopleAPI = async (page = 1) => {
  try {
    const response = await fetch(`https://swapi.co/api/people/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getPeopleAPI };
