import "./styles.css";

function createRosterItem(studentName, studentPronouns, studentHS) {
  let rosterItem = (
    <div className="studentRow">
      <div className="studentData name">{studentName}</div>
      <div className="studentData pronouns">{studentPronouns}</div>
      <div className="studentData highschool">{studentHS}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      <div>
        <div>Mikkail Allan</div>
        <div>He/His</div>
        <div>Williamsburg Charter Highschool</div>
      </div>
      {createRosterItem("Justin Apupalo", "He/His", "NYIT")}
      {createRosterItem(
        "Christopher Bonifacio",
        "He/His",
        "Orchard Collegiate Academy"
      )}
    </div>
  );
}
