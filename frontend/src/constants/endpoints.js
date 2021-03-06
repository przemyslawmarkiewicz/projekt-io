const api = 'http://localhost:8000';

export const endpoint = {
  courses: `${api}/courses/`,
  addCourse: `${api}/course/add/`,
  authorize: `${api}/token/obtain/`,
  currentUser: `${api}/current_user/`,
  assignUserToCourse: `${api}/userCourse/add/`,
  users: `${api}/users/`,
  getUser: (userId) => `${api}/user/${userId}/`,
  createUser: `${api}/user/create/`,
  coursesForUser: `${api}/user/courses/`,
  messages: `${api}/messages/`,
  sendMessage: `${api}/message/send/`,
  opinions: `${api}/opinions/`,
  announcements: `${api}/annoucements/`,
  tasks: `${api}/tasks/`,
  addTask: `${api}/task/add/`,
  addAnnouncement: `${api}/annoucement/add/`,
  sendOpinion: `${api}/opinion/add/`,
  grades: `${api}/grades/`,
  presences: `${api}/presences/`,
  addGrade: `${api}/grade/add/`,
  students: `${api}/userCourse/`,
  studentsForCourse: (courseId) => `${api}/userCourse/course/${courseId}/`,
  studentGrades: `${api}/grades/student/`,
  courseAnnoucement: `${api}/annoucements/course/`,
  addFile: `${api}/file/add/`,
  getFilesFromCourseId: `${api}/tasks/course/`,
  getFile: (fileId) => `${api}/file/${fileId}/`,
  gradesForCourseAndStudent: (courseId, studentId) =>
    `${api}/grades/courseStudent/${courseId}/${studentId}/`,
  studentInCourse: (studentId, courseId) =>
    `${api}/userCourse/${courseId}/${studentId}/`,
  classesForCourse: (courseId) => `${api}/classes/course/${courseId}/`,
  addClass: `${api}/classes/add/`,
  getPresenceForClass: (courseId) => `${api}/classes/${courseId}/presence/`,
};
