import React, { useRef } from "react";
import { addSearchResult } from "../utils/gptSlice";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

export const GptSearchBar = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  async function handleGptSearch(e) {
    e.preventDefault();

    // openAI code is not implemented as limit exceeded
    // const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: searchValue.current.value }],
    //     model: 'gpt-3.5-turbo',
    //   });
    // console.log("GPT RESULTSS", gptResults.choices);

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchValue.current.value +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const res = await data.json();
    dispatch(addSearchResult(res.results));
  }

  return (
    <div className="flex justify-center">
      <form className="w-[50%] grid grid-cols-12 bg-black">
        <input
          type="text"
          placeholder="what you feel like to watch?"
          ref={searchValue}
          className="col-span-9 p-2 m-4"
        />
        <button
          className="bg-yellow-300 col-span-3 p-4 my-4 mr-2 rounded-lg"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};
