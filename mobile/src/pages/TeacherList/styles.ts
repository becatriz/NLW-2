import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  teacherList:{
    marginTop: -40,
    
  },
  searchForm:{
    marginBottom: -50,

  },
  label:{
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular'
  },
  input:{
    height:54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,

  },
  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  iputBlock:{
    width:'48%'
  },
  submitButton:{
    backgroundColor: '#04B361',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '18%'
  
  },
  submitButtonText:{
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
   
  }
})

export default styles;