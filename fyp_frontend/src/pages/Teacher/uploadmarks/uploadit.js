import React from "react"

function UploadIt(props){
    const quizResults=[
        {
            id:'i192150',
            name:'Adil',
            grade:'matrix',
        },
        {
            id:'i190595',
            name:'Asim',
            grade:'matrix',
        },
        {
            id:'i191973',
            name:'Hassan',
            grade:'matrix',
        },
        {
            id:'i192175',
            name:'Asfand',
            grade:'matrix',
        },
        {
            id:'i190410',
            name:'Uzair',
            grade:'matrix',
        },
        {
            id:'i190549',
            name:'Mujtaba',
            grade:'matrix',
        },
        {
            id:'i191956',
            name:'Emaan',
            grade:'matrix',
        },
        {
            id:'i191957',
            name:'Faria',
            grade:'matrix',
        },
    ]
  return(
   <>
        <h2 style={{width:'370px',display:'block',margin:'auto',marginTop:'40px'}}>Upload marks for {props.location.state.detail}</h2>
            {/* <div style={{marginTop:'50px',width:'50%',display:'block', margin:'auto'}}>
            <Select 
                options={options}
                value={value}
                onChange={onchange}
            />
            </div> */}
            <div className="main_div2">
      <table className="table_div2">
      
      <tr>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>ID</td>
        <td id="t1" style={{fontWeight:'bold',fontSize:'20px'}}>name</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Grade</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Add marks</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td style={{textDecoration:'underline', color:'blue',cursor:'pointer'}}>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.grade}</td>
            <td><input style={{width:'40px'}} type="text" placeholder="i.e 5" /></td>
            </tr>
      ))}
      </table>
      <button style={{backgroundColor:'lightblue',marginLeft:'60%', fontSize:'20px', borderRadius:'20px',marginBottom:'20px', width:'100px'}}>Save</button>
      </div>
     
   </>
  );
}
export default UploadIt