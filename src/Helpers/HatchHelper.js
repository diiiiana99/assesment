//  Returns the average grade for each student
const getAverageGrade = (grades) => {
    let total = 0;
  
    // loop through all of the scores, convert them to numbers, and add them to the total
    for (const score of grades) {
      total = total + parseFloat(score);
    }
  
    // calculate the average grade of each individual student
    return total / grades.length;
  };
  
  // filter students by their name
  const filterStudentsByName = (name, students, setResults) => {
    // clear search result if the search field is empty
    if (name === "") {
      setResults([]);
    }
  
    //If there is no search results yet, stop.
    if (name === null || name === "" || students === []) return;
  
    // If there was a previous search array, remove it.
    const searchResult = [];
    const data = name.toLowerCase();
  
    // all students in a loop
    for (const student of students) {
      const firstName = student.firstName;
      const lastName = student.lastName;
  
      const fullName = firstName.toLowerCase() + " " + lastName.toLowerCase();
  
      // check if the search word or character matches
      if (
        [...fullName].includes(data) ||
        fullName === data ||
        fullName.split(" ").includes(data)
      ) {
        searchResult.push(student);
      }
    }
  
    setResults(searchResult);
  };
  
  // function to show or hide grades
  const renderGrades = (showGrades, setShowGrades) => {
    if (showGrades === false) {
      setShowGrades(true);
    } else {
      setShowGrades(false);
    }
  };
  
  // add tags to the student's details
  const addTag = (event, tag, student, setTag) => {
    event.preventDefault();
  
    // terminate if input is empty
    if (tag === "" || tag === null) return;
  
    // if the tags property already exist, add the new tag
    // else create a tags array and add the new tag
    if (student.tags) {
      student.tags.push(tag);
    } else {
      student.tags = [tag];
    }
  
    // clear the tag input field
    setTag("");
  };
  
  // get all students wih tags
  const getStudentsWithTags = (students) => {
    let studentsWithTag = [];
  
    for (const student of students) {
      if (student.tags) {
        studentsWithTag.push(student);
      }
    }
  
    return studentsWithTag;
  };
  
  // search students by tag
  const filterStudentsByTag = (tag, students, setResults) => {
    // clear search result if the search field is empty
    if (tag === "") {
      setResults([]);
    }
  
    // get all students with tags
    const studentsWithTag = getStudentsWithTags(students);
  
    // discontinue if there is no search yet
    if (tag === null || tag === "" || studentsWithTag === []) return;
  
    // empty the previous search array if any
    const searchResult = [];
    const data = tag.toLowerCase();
  
    // loop through all students
    for (const student of studentsWithTag) {
      const tags = student.tags;
  
      // loop throught the tags and see if there is a match
      for (const tag of tags) {
        // check if the search word or character matches
        if (
          [...tag].includes(data) ||
          tag === data ||
          tag.split(" ").includes(data)
        ) {
          searchResult.push(student);
        }
      }
    }
  
    setResults(searchResult);
  };
  
  export {
    getAverageGrade,
    filterStudentsByName,
    renderGrades,
    addTag,
    filterStudentsByTag,
  };