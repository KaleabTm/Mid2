import { Text, View ,Button, TextInput } from 'react-native';
import { styles } from "../styles/styles"
import {useState,useEffect} from 'react';
import axios from 'axios';


const Student = ({navigation}) => {

  const pressHandler=()=>{
    navigation.navigate('Employee')
  }
  const pressHandlerTeacher=()=>{

    navigation.navigate('Teacher')
    
  }

  const[stud,setStud]=useState([])
  const[studn,setStudn]=useState('')
  const[studg,setStudg]=useState('')

  
  const fetch =()=>{
    axios.get('http://127.0.0.1:8000/stu/List/')
    .then((res)=>setStud(res.data))
    .catch((err)=>console.log(err))
  }


  useEffect(()=>fetch(),[])

  const Studdelete=(id)=>{
    axios.delete(`http://127.0.0.1:8000/stu/Delete/${id}/`)
    .then((res)=>{console.log("deleted");fetch()})
    .catch((err)=>console.log(err))
    
  }

  const Sadd =()=>{
    axios.post('http://127.0.0.1:8000/stu/List/',{name:studn,grade:studg})
    .then((res)=>{console.log('Student was added');fetch();}) 
    .catch((err)=>console.log(err))
  }
  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Button title='Employee' onPress={pressHandler}/>
      <Button title='Teacher' onPress={pressHandlerTeacher}/>

      {stud.map((data)=>
       { return(
         <View key={data.id}>
          <Text>{data.name}</Text>
          <Text>{data.grade}</Text>
          <Button title='Delete' onPress={()=>Studdelete(data.id)}/>
        </View>)
      }
      )}

      <Text>Name</Text>
      <TextInput style={styles.box} onChange={(e)=>setStudn(e.target.value)} type='text'/> 
      <Text>Grade</Text>
      <TextInput style={styles.box} onChange={(e)=>setStudg(e.target.value)} type='text'/> 
      <Button title="Add" onPress={()=>Sadd()}/>

      <Text style={styles.item}>WELCOME ! TO Student SCREEN</Text>
    
    </View>
  )
}


export default Student