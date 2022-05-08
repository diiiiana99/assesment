import React, { useState } from "react";
import { addTag, getAverageGrade, renderGrades } from "../Helpers/HatchHelper";
import { ImPlus, ImMinus } from "react-icons/im";
import {Fade} from 'react-reveal'
import { Link, animateScroll as scroll } from "react-scroll";


export default function Student(props) {

    
  // props of student's info. i could deconstructs the props but coding wise, it would be better to set it for variable.
  const student = props.student;

  //   states that are responsible to show the test results when click event happens
  const [show, setShow] = useState(false);
  const [tag, setTag] = useState("");

  return (
    <div key={student.id} id="student">
      
      <aside>
          {/*i decided to use react reveal to optimize the elements and add some animations*/}
          <Fade left>
        <img
          src={student.pic}
          alt={student.firstName + " " + student.lastName}
        />
        </Fade>
      </aside>

      <aside>
          <Fade right>
        <section id="name_and_button">
          {/* name of the student */}
          <h1>{student.firstName + " " + student.lastName}</h1>

          {/* toggle button that is coming from the react hook that i initilized at the top*/}
          <button onClick={() => renderGrades(show, setShow)}>
            {show ? <ImMinus /> : <ImPlus />}
          </button>
        </section>
        </Fade>

        {/* additional details of the students that is being rendered */}
        <Fade bottom>
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {getAverageGrade(student.grades)}</p>
        </Fade>

        {/* my form that is functional to add new tag and is persistent */}
        <form id="tag_form" onSubmit={(e) => addTag(e, tag, student, setTag)}>
          {student.tags && student.tags.length > 0
            ? student.tags.map((tag) => <button>{tag}</button>)
            : "No Tags Yet"}

          <br />

          {/* input form that is validated due to to the useState*/}
          <input
            name="Tag"
            placeholder="Add a Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </form>

        {/* rendered grades that students have from url*/}
        {show ? (
       
          <table id="section">
            {student.grades && student.grades.length > 0
              ? student.grades.map((grade, index) => (
                  <tr key={index}>
                      <Fade left>
                    <td>Test {index + 1}</td>
                    </Fade>
                    <Fade right>
                    <td>{grade}%</td>
                    </Fade>
                  </tr>
                ))
              : "No Grades Yet"}
          </table>
        ) : (
          ""
        )}
      </aside>
    </div>
  );
}