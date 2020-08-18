import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import LandingImg from '../../assets/images/landing.png'
import studyImg from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import api from '../../services/api'

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnecions, setTotalConnecions] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      console.log(response.data.total)
      const total = response.data.total;
      setTotalConnecions(total);
    })
  }, []);
 

  function handleNavigationToGiveClassesPage(){
    navigate('GiveClasses')
  }

  function handleNavigationToStudyPage(){
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindes, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigationToStudyPage} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
     
        <RectButton onPress={handleNavigationToGiveClassesPage} 
        style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnecions} conexões já realizadas {' '}
           <Image source={heartIcon}/>
        </Text>

    </View>
  )
}

export default Landing;