import React,  { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'


import './styles.css'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'


function TeacherList() {

  const[teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
 async function searchTeacher(event: FormEvent){
    event.preventDefault();

    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time
      }
    });
    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container" >
      <PageHeader title="Estes são ps profissionais disponiveis.">
        <form  onSubmit={searchTeacher} id="search-teachers">
        <Select
         name="subject" 
         label="Matéria"
         value={subject}
         onChange={(e) => {setSubject(e.target.value)}}
         options={[
           {value: 'Artes', label: 'Artes'},
           {value: 'Biologia', label: 'Biologia'},
           {value: 'Ciências Sociais', label: 'Ciências Sociais'},
           {value: 'Programação I', label: 'Programação I'},
           {value: 'Matemática', label: 'Matemática'},
           {value: 'Português', label: 'Português'},
           {value: 'Física', label: 'Física'}
         ]}
         />
          <Select
         name="week-day" 
         label="Dia da Semana"
         value={week_day}
         onChange={(e) => {setWeekDay(e.target.value)}}
         options={[
           {value: '0', label: 'Domingo'},
           {value: '1', label: 'Segunda-Feira'},
           {value: '2', label: 'Terça-Feira'},
           {value: '3', label: 'Quarta-Feira'},
           {value: '4', label: 'Quinta-Feira'},
           {value: '5', label: 'Sexta-Feira'},
           {value: '6', label: 'Sábado'},
          
         ]}
         />
        <Input 
        value={time}
        onChange={(e) => {
          setTime(e.target.value)
        }}
        type="time" 
        name="time" 
        label="Hora"
        />
        <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) =>{
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  )

}

export default TeacherList;