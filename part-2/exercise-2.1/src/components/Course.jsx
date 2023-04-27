const Header = ({ name }) => <h3>{name}</h3>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

  const Total = ({parts}) => <p>Total of {parts.reduce((acc, part) => acc += part.exercises, 0)} exercises</p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part}/>)}     
  </>

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course;