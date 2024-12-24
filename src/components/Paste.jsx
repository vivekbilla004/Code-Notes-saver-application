import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { FormatDate } from "../utils/formatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  function handleDelete (pasteId) {
        dispatch(removeFromPastes(pasteId))
  }

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        className="h-8 mt-4 mb-4 rounded-lg p-2 w-[70%] text-center"
        value={searchTerm}
        placeholder="search here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              
                <div className=" text-black border border-blue-950 border-solid h-[190px] mb-2">
                <div className="font-semibold">{paste.title}</div>
                <div className=" line-clamp-3  text-sm">{paste.content}</div>
            
               
                <div className="flex flex-row gap-2 h-20 w-20 text-white p-4 ml-2 f">
                  <button >
                    <a 
                    className="text-white"
                    href={`/?pasteId=${paste?._id}` }>Edit</a></button>
                  <button>
                    <a 
                    className="text-white"href={`/pastes/${paste?._id}`}>view</a></button>
                  <button onClick={() => handleDelete(paste?._id)}>delete</button>
                  <button onClick={() => {navigator.clipboard.writeText(paste?.content)
                    toast.success("copies successfully")
                  }}
                  >copy</button>
                 
                </div>
                <div className="flex pl-6 ">
                      {FormatDate(paste?.createdAt)}
                    </div>

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;



