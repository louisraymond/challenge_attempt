import React from 'react'

class DataContainer extends React.Component{

  state={
    data:[{"key":"key",
          "value":"value"}],
    key:'100m+'
  }

  headings = () =>{
      if (this.props.data.length > 0){
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
    console.log(this.props.match["params"]["key"])
    this.setState({
      data : this.props.data
    })
  }

  transform(array){
    let key='#'
    if ( this.props.match["params"]["key"]){
    let key = this.props.match["params"]["key"]
  } 
    let transformed =[]
    if ((key !== 'City') && (key !=='Country') === true ){
      transformed = array.sort((datum1,datum2)=>datum1[key]-datum2[key])
    }
    else{
      transformed=array.sort((datum1,datum2)=> {
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
