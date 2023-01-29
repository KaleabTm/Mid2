import {useState,useEffect} from 'react';
import axios from 'axios';
import { Text, View ,Button,TextInput } from 'react-native';
import { styles } from "../styles/styles"


const Employee = ({navigation}) => {

  const pressHandler=()=>{
    
    navigation.goBack()

  }

  const pressHandlerTeacher=()=>{

    navigation.navigate('Teacher')
  }

  const[emp,setEmp]=useState([])
  const[empn,setEmpn]=useState('')
  const[empd,setEmpd]=useState('')

  const fetch =()=>{
    axios.get('http://127.0.0.1:8000/emp/List/')
    .then((res)=>setEmp(res.data))
    .catch((err)=>console.log(err))
  }


  useEffect(()=>fetch(),[])

  const Edelete=(id)=>{
    axios.delete(`http://127.0.0.1:8000/emp/Delete/${id}/`)
    .then((res)=>{console.log("deleted");fetch()})
    .catch((err)=>console.log(err))
  }


  const Eadd=()=>{
    axios.post('http://127.0.0.1:8000/emp/List/',{name:empn,department:empd})  
    .then((res)=>{console.log('Employee was added');fetch();}) 
    .catch((err)=>console.log(err)) 

  }


  return (
    
    <View style={styles.container} >
      <Button title='Teacher' onPress={pressHandlerTeacher}/>
      <Button title='Back' onPress={pressHandler}/>
      
      {emp.map((data)=>
       { return(
       <View key={data.id}>
          <Text>{data.name}</Text>
          <Text>{data.department}</Text>
          <Button title='Delete' onPress={()=>Edelete(data.id)}/>
        </View>)
      }
      )}
      

      <Text>Name</Text>
      <TextInput style={styles.box}   onChange={(e)=>setEmpn(e.target.value)} type='text'/> 
      <Text>Department</Text>
      <TextInput style={styles.box}   onChange={(e)=>setEmpd(e.target.value)} type='text'/> 
      <Button title="Add" onPress={()=>Eadd()}/>
      
    
      
       <Text style={styles.item}>EVERY THING YOU HAVE TO KNOW ABOUT OUR EMPLOYEES IS RIGHT HERE!</Text>
    </View>
  )
}




// axios.post('http://127.0.0.1:8000/teach/ListTeach/',{name:ufname})  
// .then((res)=> {alert('New Teacher is added Successfully');fetchData();}) 
 
// .catch((err)=>alert('Failed')) 

// const updateData=(Id)=>{ 
// axios.patch(`http://127.0.0.1:8000/teach/details/${Id}`,{name:ulname})  
// .then((res)=> {alert('Updated Successfully');fetchData();}) 
 
// .catch((err)=>alert('Failed')) 
// }


export default Employee