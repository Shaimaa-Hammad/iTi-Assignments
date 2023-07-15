// function displayCourseInfo(courseInfo) {

//   let defaultInfo = {
//     courseName: "ES6",
//     courseDuration: "3 days",
//     courseOwner: "JavaScript",
//   };

//   let course = Object.assign({}, defaultInfo, courseInfo);

//   let allowedProps = ["courseName", "courseDuration", "courseOwner"];

//   let extraProps = Object.keys(course).filter((prop) => !(allowedProps.includes(prop)));

//   if (extraProps.length > 0) {
//     throw new Error(`Invalid course info object: contain extra property/properties: ${extraProps.join(`, `)}.`);
//   }

//   console.log(`Course name: ${course.courseName}`);
//   console.log(`Duration: ${course.courseDuration}`);
//   console.log(`Owner: ${course.courseOwner}`);
// }


// displayCourseInfo({ courseName: 'React', courseDuration: '5 days', courseOwner: 'Youtube' });

// displayCourseInfo({ courseName: 'Angular' });

// displayCourseInfo({});

// displayCourseInfo({ courseName: 'advjs', instructor: 'Arwa',  courseLabs: 2});


function displayCourseInfo(courseInfo) {
  let defaultInfo = {
    courseName: "ES6",
    courseDuration: "3 days",
    courseOwner: "JavaScript",
  };

  let course = Object.assign({}, defaultInfo, courseInfo);

  for (let prop in course) {
    if (!defaultInfo.hasOwnProperty(prop)) {
      throw new Error(`Invalid course info object: contain extra property/properties.`);
    }
  }

  console.log(`Course name: ${course.courseName}`);
  console.log(`Duration: ${course.courseDuration}`);
  console.log(`Owner: ${course.courseOwner}`);
}

displayCourseInfo({ courseName: 'React', courseDuration: '5 days', courseOwner: 'Youtube' });

displayCourseInfo({ courseName: 'Angular' });

displayCourseInfo({});

displayCourseInfo({ courseName: 'advjs', instructor: 'Arwa',  courseLabs: 2});