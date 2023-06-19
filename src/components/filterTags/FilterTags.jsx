import { useState, useCallback, useId } from "react";
import "./style.css";

const FilterTags = () => {
  const [tags, setTags] = useState(["game"]);

  //   const id = useId();
  //   const id = crypto.randomUUID();

  //   console.log(id);
  const projects = [
    {
      title: "Example 0",
      description:
        "This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.",
      tags: ["react", "javascript", "game", "back-end"],
    },
    {
      title: "Game of Life",
      description: "React implementation of the game of life.",
      tags: ["react", "javascript", "game", "web", "front-end"],
    },
    {
      title: "Calculator",
      description: "Calculator written in Javascript",
      tags: ["javascript", "utility", "web"],
    },
    {
      title: "Tic Tac Toe",
      description: "A command-line Tic Tac Toe game written in Ruby",
      tags: ["ruby", "game", "cli"],
    },
    {
      title: "TodoList",
      description: "Full stack todo-list written in fullstack Javascript",
      tags: [
        "react",
        "javascript",
        "node",
        "fullstack",
        "front-end",
        "back-end",
        "web",
        "mvc",
      ],
    },
    {
      title: "Weather",
      description: "A Weather App with React Native ",
      tags: [
        "react",
        "javascript",
        "react-native",
        "front-end",
        "mobile",
        "android",
        "ios",
      ],
    },
    {
      title: "Markdown Editor",
      description: "Markdown Editor powered by Monaco and React",
      tags: ["react", "javascript", "monaco", "front-end"],
    },
    {
      title: "Bloggie",
      description: "Rails-powered blog with a React front-end",
      tags: [
        "react",
        "javascript",
        "ruby",
        "front-end",
        "back-end",
        "fullstack",
        "ruby-on-rails",
        "mvc",
      ],
    },
  ];

  const addTag = useCallback(
    (tag) => () => {
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  console.log(tags);

  const deleteTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  return (
    <div className="tags-container">
      <h1 className="tag-filter">Tags filtered</h1>
      <div>
        {tags.length > 0
          ? tags.map((tag) => {
              return (
                <button
                  key={`close-button-${crypto.randomUUID()}`}
                  className="close bg-[#2a50cc]"
                  onClick={deleteTag(tag)}
                >
                  {tag} &nbsp; x
                </button>
              );
            })
          : "No tags selected"}
      </div>
      {projects
        .filter((proj) => matchTags(proj.tags, tags))
        .map(({ title, description, tags }) => {
          return (
            <div
              key={`card-${crypto.randomUUID()}`}
              className="card p-5 w-full bg-[#1f76af]"
            >
              <div>
                <p>{title}</p>
                <p>{description}</p>
              </div>
              {tags.map((tag) => {
                return (
                  <button
                    key={`add-button-${crypto.randomUUID()}`}
                    type="button"
                    onClick={addTag(tag)}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default FilterTags;
