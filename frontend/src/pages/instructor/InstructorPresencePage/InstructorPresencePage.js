import React from 'react';
import './InstructorPresencePage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import List from '@material-ui/core/List';

export const InstructorPresencePage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
  });

  const { selectedCourse, selectedStudent, students } = useSelector(mapState);

  return (
    <div className="InstructorPresencePage">
      <CoursesList />
    </div>
  );
};