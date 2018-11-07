import React from 'react'

class DataContainer extends React.Component{

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

  render(){

    return(
      <table>
      <tr>
      {this.headings().map((key)=><th className={key}>{key}</th>)}
      </tr>
      <tr>
      {this.props.data.map((entry)=> {
      return(    <tr>
          {this.objectParser(entry).map((datumObj)=><td className={datumObj["key"]} >{datumObj["value"]}</td>)}
          </tr>
)
      })}
  </tr>
  </table>
)
}

}


export default  DataContainer
