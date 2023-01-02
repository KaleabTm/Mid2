import { Text, View ,Button,TextInput } from 'react-native';
import { styles } from "../styles/styles"
import {useState,useEffect} from 'react';
import axios from 'axios'

const Teacher = ({navigation}) => {

  const pressHandler=()=>{
    navigation.navigate('Employee')
  }

  const pressHandlerStudent=()=>{
    navigation.navigate('Student')
  }
  const[teach,setTeach]=useState([])
  const[teachn,setTeachn]=useState('')
  const[teachs,setTeachs]=useState()

  const fetch =()=>{
    axios.get('http://127.0.0.1:8000/teach/List/')
    .then((res)=>setTeach(res.data))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>fetch(),[])

  const teachDelete=(id)=>{
    axios.delete(`http://127.0.0.1:8000/teach/Delete/${id}/`)
    .then((res)=>{console.log("deleted");fetch()})
    .catch((err)=>console.log(err))
  }

  const Tadd=()=>{
    axios.post('http://127.0.0.1:8000/teach/List/',{name:teachn,subject:teachs})  
    .then((res)=>{console.log('Employee was added');fetch();}) 
    .catch((err)=>console.log(err)) 

  }



  return (
    
    <View style={styles.container} >
      <Button title='Student' onPress={pressHandlerStudent}/>
      <Button title='Employee' onPress={pressHandler}/>
      {teach.map((data)=>
       { return(
         <View key={data.id}>
          <Text>{data.name}</Text>
          <Text>{data.subject}</Text>
          <Button title='Delete' onPress={()=>teachDelete(data.id)}/>
        </View>)
      }
      )}

      <Text>Name</Text>
      <TextInput style={styles.box} onChange={(e)=>setTeachn(e.target.value)} type='text'/> 
      <Text>Subject</Text>
      <TextInput style={styles.box} onChange={(e)=>setTeachs(e.target.value)} type='text'/> 
      <Button title="Add" onPress={()=>Tadd()}/>

      
      <Text style={styles.item}>IF YOU WISH TO CONTACT Teachers</Text>
    
    </View>
  )
}


export default Teacher