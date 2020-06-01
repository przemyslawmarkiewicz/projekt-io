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
  students: `${api}/userCourse/`
};
