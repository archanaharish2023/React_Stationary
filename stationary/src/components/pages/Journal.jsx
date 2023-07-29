import React from "react";
const journalEntries = [
  {
    id: 1,
    title: "Just Journaling",
    image: "https://slightlysorted.com/wp-content/uploads/2021/11/How-to-Start-a-Journal-Blog-1440x960.jpg", // Add the URL for the journal entry image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo vel odio feugiat dignissim vel a nunc. Aenean pharetra, nulla sit amet venenatis tincidunt.",
  },
  {
    id: 2,
    title: "Bullet journal pages to organize your Blog",
    image: "https://mashaplans.com/wp-content/uploads/2018/12/Bullet-Journal-Pages-To-Organize-Your-Blog-Masha-Plans.jpg", // Add the URL for the journal entry image
    description:
      "Praesent eu enim ut neque vehicula bibendum ut et massa. Nullam faucibus facilisis nunc, eget convallis odio gravida a.",
  },
  {
    id: 3,
    title: "10 Must have items for students",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAYEjAz5i3m0AxY5Me8-oYKn_cvIs92oQjCgsqJmN-uUmlK8gqqFzfIqAXS6I8uw2SOw&usqp=CAU", // Add the URL for the journal entry image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo vel odio feugiat dignissim vel a nunc. Aenean pharetra, nulla sit amet venenatis tincidunt.",
  },
  
  // Add more journal entries as needed
];

function Journal() {
  return (
    <div className="journal-section">
      <h2 className="journal-heading">Journal</h2>
      <div className="journal-list">
        {journalEntries.map((entry) => (
          <div key={entry.id} className="journal-item">
            <div className="journal-image">
              <img src={entry.image} alt={entry.title} />
            </div>
            <div className="journal-content">
              <h3 className="journal-title">{entry.title}</h3>
              <p className="journal-description">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
