import React, { useState } from "react";

const emojis = ["😀", "😍", "🚀", "🎉", "🐱", "🌸", "🍕", "🎈"];

const EmojiPicker = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const copyEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji);
    alert(`Copied: ${emoji}`);
  };

  const filteredEmojis = emojis.filter((emoji) => emoji.includes(searchQuery));

  return (
    <div className="emoji-picker">
      <h2>Emoji Picker</h2>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="emoji-list">
        {filteredEmojis.map((emoji, index) => (
          <span key={index} onClick={() => copyEmoji(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;
