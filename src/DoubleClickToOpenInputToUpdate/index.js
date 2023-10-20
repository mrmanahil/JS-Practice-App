import React, { useState } from "react";

const EditableText = ({ text, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return isEditing ? (
    <input
      type="text"
      value={editedText}
      onChange={handleChange}
      onBlur={handleBlur}
      autoFocus
    />
  ) : (
    <h1
      style={{
        marginTop: 2,
        margin: "20px 0",
      }}
      onDoubleClick={handleDoubleClick}
    >
      {text}
    </h1>
  );
};

const YourComponent = () => {
  const [folderName, setFolderName] = useState("Test");

  const handleUpdateFolderName = (newName) => {
    setFolderName(newName);
  };

  return (
    <div>
      <EditableText text={folderName} onUpdate={handleUpdateFolderName} />
    </div>
  );
};

export default YourComponent;
