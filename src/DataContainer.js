import React from 'react'

class DataContainer extends React.Component{

  state={
    data:[{"key":"key",
          "value":"value"}],
    key:'100m+'
  }

  headings = () =>{
      if (this.props.data.length > 0){
        console.log(this.props.data)
        return Object.keys(this.props.data[0])
      }
      else{
        return ["loading",1,2,3]
      }
  }


  objectParser = (obj) =>{
    let dataToRender=[]
    Object.keys(obj).map( (key) => dataToRender.push({"key":key,"value":obj[key]}))
    return dataToRender.map((datumObj)=> {
      return datumObj
    })
  }

  componentDidMount(props){
    let key = '#'
    let newData = this.props.data.sort((datum1,datum2)=>datum1[key]-datum2[key])
    console.log(this.props.data)
    this.setState({
      data : this.props.data
    })
  }

  transform(array){
    let key = this.state.key
    let transformed =[]
    if ((key != 'City') && (key !='Country') === true ){
      transformed = array.sort((datum1,datum2)=>datum1[key]-datum2[key])
      console.log(!!(key != 'City'))}
    else{
      transformed=array.sort((datum1,datum2)=> {
        console.log(key)
        let a = datum1[key].toUpperCase()
        let b = datum2[key].toUpperCase()

        return a.localeCompare(b)
      })
    }

    return transformed
  }

  render(){

    return(
      <table>
      <tr>
      {this.headings().map((key)=><th className={key}>{key}</th>)}
 </tr>
 {this.transform(this.props.data).map((entry)=> <tr> {this.objectParser(entry).map((datumObj)=> <td className={datumObj["key"]} >{datumObj["value"]}</td>)}</tr>)}
 </table>

)
}

}




export default  DataContainer
