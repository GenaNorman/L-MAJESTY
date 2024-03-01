// import "./App.css";
import { useState } from "react";

const activities = [
  {
    id: "422321",
    image: "../images/ranson.jpg",
    department: "Engineering",
    name: "Leaders of Tomorrow",
    description:
      "Lorem sdea sjsdaea ajakeua afea ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia suscipit, odio quisquam recusandae",
  },
  {
    id: "426321",
    image: "../images/ranson.jpg",
    department: "Health",
    name: "Leaders of Tomorrow",
    owner: "Jefesson Yoshi",
    description:
      "Lorem sdea sjsdaea ajakeua afea ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia suscipit, odio quisquam recusandae",
  },
  {
    id: "353532",
    image: "../images/ranson.jpg",
    name: "Student portal ",
    department: "Agriculture",
    owner: "Gena Norman",
    description:
      "Lorem sdea sjsdaea ajakeua afea ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia suscipit, odio quisquam recusandae",
  },
  // {
  //   id: "234213",
  //   image: "../images/ranson.jpg",
  //   name: "Student portal creation",
  //   // department: "Buiseness",
  //   owner: "Tabe Joel",
  //   description:
  //     "Lorem sdea sjsdaea ajakeua afea ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia suscipit, odio quisquam recusandae",
  // },
];

function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

function AddProject() {
  const [Task, setTask] = useState(activities);

  function handleAddProject(Project) {
    console.log(Project);
    setTask((Task) => [...Task, Project]);
  }
  return (
    <div className="projects">
      <h3 className="project-category">Engineering</h3>
      <ProjectList Project={Project} Task={Task} onAddProject={handleAddProject}/>
      <h3 className="project-category">Medicine</h3>
      <ProjectList
        Project={Project}
        Task={Task}
        onAddProject={handleAddProject}
      />
      {/* <AddActivities onAddProject={handleAddProject} /> */}
      <h3 className="project-category">Buiseness</h3>
      <ProjectList Project={Project} Task={Task} />
      <h3 className="project-category">Agriculture</h3>
      <ProjectList Project={Project} Task={Task} />
      <AddActivities onAddProject={handleAddProject} />
    </div>
  );
}

function ProjectList({ Task, handleAddProject }) {
  return (
    <ul className="project">
      {Task.map((activity) => (
        <>
          <Project activity={activity} key={activity.id} />
          {/* <Project activity={activity} key={activity.id} />
        <Project activity={activity} key={activity.id} /> */}
        </>
      ))}
    </ul>
  );
}

function Project({ activity }) {
  return (
    <>
      <li className="project-description">
        <div className="owner">
          <h2 className="project-name">{activity.name}</h2>
          <p className="project-owner">Author: {activity.owner}</p>
        </div>
        <img className="project-image" src={activity.image} alt={activity.id} />
        <p className="project-caption">{activity.description}</p>
      </li>
    </>
  );
}

function AddActivities({ onAddProject }) {
  const [image, setImage] = useState("../images/ranson.jpg");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image || !description) return;
    const id = crypto.randomUUID();
    const newproject = {
      id,
      name,
      owner,
      image,
      description,
    };
    onAddProject(newproject);

    setDescription("");
    setOwner("");
    setImage("");
    setName("");
  }
  return (
    <form onSubmit={handleSubmit} className="addproject">
      <label>Project image link</label>
      <br></br>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.file)}
      />
      <br></br>
      <label>Project Name</label>
      <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <label>Project Author</label>
      <br></br>
      <input
        type="text"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <br></br>
      <label>Project description</label>
      <br></br>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <Button className="act-btn">+ Add</Button>
    </form>
  );
}

export default AddProject;
