import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updatePastes, addToPastes } from "../redux/pasteSlice";

const Homepage = () => {
  const [title, setTitle] = useState(0);
  const [text, setText] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const allPastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside use effect");
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      console.log("page found");
      if (pasteId) {
        setTitle(paste.title);
        setText(paste.content);
      }
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: text,
      _id: pasteId || Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setText("");
  }
  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
  };

  return (
    <div className="4mt-">
      <div className=" flex flex-row gap-12 justify-center ">
        <input
          className="w-[60%] h-10 p-2 mt-2 rounded-lg"
          type="text"
          placeholder="type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="min-w-20 h-10 p-2 mt-2 rounded-lg"
        >
          {pasteId ? "update paste" : "create paste"}
        </button>
      </div>
      <div className="flex justify-center ">
        <textarea
          className="w-[880px] h-[450px] mt-4  flex rounded-md"
          value={text}
          placeholder="type here"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Homepage;
