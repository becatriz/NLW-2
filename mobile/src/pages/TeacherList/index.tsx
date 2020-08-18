import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import PageHeader from '../../components/PageHeader'
import AsynStorege from '@react-native-community/async-storage'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'

import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function TeacherList() {
  const [isFiltersVisible, setFiltersVisible ] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites(){
    AsynStorege.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

 
  function hafleToggleFiltersVisible(){
    loadFavorites();
    setFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit(){
    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time
      }
    });
    setFiltersVisible(false);
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={hafleToggleFiltersVisible}>
          <Feather name='filter' size={20} color='#FFF'/>
        </BorderlessButton>
      )}>
      {isFiltersVisible && ( <View style={styles.searchForm}>
          <Text style={styles.label}>Matérias</Text>
          <TextInput 
          placeholderTextColor="#C1BCCC" 
          style={styles.input}
          value={subject}
          onChangeText={text => setSubject(text)}
          placeholder="Qual a matéria"
          />
          <View style={styles.inputGroup}>
            <View style={styles.iputBlock}>
              <Text style={styles.label}>Dia da Semana</Text>
              <TextInput placeholderTextColor="#C1BCCC" 
              style={styles.input} 
              placeholder="Qual o dia?" 
              value={week_day}
              onChangeText={text => setWeek_day(text)}
              />
            </View>
            <View style={styles.iputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput 
              placeholderTextColor="#C1BCCC" 
              style={styles.input} 
              placeholder="Qual o  horário ?"
              value={time}
              onChangeText={text => setTime(text)}
               />
            </View>
          </View>
          
          <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>

          </RectButton>

        </View>
      )}
      </PageHeader>
      <ScrollView style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}>
          {teachers.map((teacher: Teacher) => {
            return (
            <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorites.includes(teacher.id)}
            />
            )} 
          )}
      
      </ScrollView>

    </View>
  )
}

export default TeacherList;